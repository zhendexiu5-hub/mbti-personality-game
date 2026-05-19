const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("mbti-game.js", "utf8");
const gameMount = { innerHTML: "" };
const toastMount = { innerHTML: "" };
const sandbox = {
  console,
  localStorage: {
    getItem() {
      return null;
    },
    setItem() {},
    removeItem() {}
  },
  document: {
    getElementById(id) {
      if (id === "game") return gameMount;
      if (id === "heartToast") return toastMount;
      return { innerHTML: "" };
    }
  },
  window: {}
};

vm.createContext(sandbox);
vm.runInContext(source, sandbox);

assert.strictEqual(sandbox.heartMapScenes.length, 32);
assert.deepStrictEqual([...new Set(sandbox.heartMapScenes.map((scene) => scene.chapter))], ["energy", "perception", "judgment", "rhythm"]);
assert.deepStrictEqual([...new Set(sandbox.heartMapScenes.map((scene) => scene.category))], ["情感关系", "人际相处", "职业工作", "情绪成长"]);

const chapterCounts = sandbox.heartMapChapters.map((chapter) => (
  sandbox.heartMapScenes.filter((scene) => scene.chapter === chapter.id).length
));
assert.deepStrictEqual(Array.from(chapterCounts), [8, 8, 8, 8]);

const mapNodes = sandbox.buildHeartMapNodes();
assert.strictEqual(mapNodes.length, 32);
assert.deepStrictEqual(
  Array.from(mapNodes.slice(0, 4).map((node) => node.id)),
  ["s01", "s02", "s03", "s04"]
);
assert.strictEqual(mapNodes[0].chapter, "energy");
assert.strictEqual(mapNodes[0].number, 1);
assert.ok(Number.isFinite(mapNodes[0].x));
assert.ok(Number.isFinite(mapNodes[0].y));
assert.ok(mapNodes.every((node) => node.echoName));
assert.ok(mapNodes.every((node) => node.x >= 6 && node.x <= 94));
assert.ok(mapNodes.every((node) => node.y >= 6 && node.y <= 94));
const routeChapterCounts = sandbox.heartMapChapters.map((chapter) => (
  mapNodes.filter((node) => node.chapter === chapter.id).length
));
assert.deepStrictEqual(Array.from(routeChapterCounts), [8, 8, 8, 8]);

const closeRoutePairs = [];
for (let i = 0; i < mapNodes.length; i += 1) {
  for (let j = i + 1; j < mapNodes.length; j += 1) {
    const dx = mapNodes[i].x - mapNodes[j].x;
    const dy = mapNodes[i].y - mapNodes[j].y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 11) closeRoutePairs.push([mapNodes[i].number, mapNodes[j].number, distance]);
  }
}
assert.deepStrictEqual(closeRoutePairs, []);
assert.ok(mapNodes.every((node) => node.routeClass));

const emptyNodeState = sandbox.getHeartMapNodeState("s01", {});
assert.strictEqual(emptyNodeState.done, false);
assert.strictEqual(emptyNodeState.active, true);
assert.strictEqual(emptyNodeState.locked, false);

const lockedNodeState = sandbox.getHeartMapNodeState("s03", { s01: "a" });
assert.strictEqual(lockedNodeState.locked, true);

const doneNodeState = sandbox.getHeartMapNodeState("s02", { s01: "a", s02: "b" });
assert.strictEqual(doneNodeState.done, true);
assert.strictEqual(doneNodeState.locked, false);

assert.strictEqual(sandbox.heartMapScenes.every((scene) => scene.choices.length === 3), true);
assert.strictEqual(sandbox.heartMapScenes.every((scene) => scene.choices[2].weights && !scene.choices[2].pole), true);

const answers = {};
sandbox.heartMapScenes.forEach((scene) => {
  answers[scene.id] = scene.choices[0].id;
});

const result = sandbox.calculateHeartMapResult(answers);
assert.strictEqual(result.type.length, 4);
assert.ok(result.report.journey.includes("心境地图"));
assert.ok(result.report.love.includes("亲密") || result.report.love.includes("情感"));
assert.ok(result.report.growth.includes("情绪") || result.report.growth.includes("恢复"));

const missing = sandbox.firstUnfinishedScene({ s01: "a" });
assert.strictEqual(missing.id, "s02");

const blendedAnswers = {};
sandbox.heartMapScenes.forEach((scene) => {
  blendedAnswers[scene.id] = "c";
});
const blended = sandbox.calculateHeartMapResult(blendedAnswers);
assert.strictEqual(blended.type.length, 4);
assert.ok(Object.values(blended.scores).every((score) => score > 0));

const echo = sandbox.buildChoiceEcho(sandbox.heartMapScenes[0], sandbox.heartMapScenes[0].choices[0]);
assert.strictEqual(echo.sceneId, "s01");
assert.strictEqual(echo.chapter, "energy");
assert.ok(echo.name.length > 0);
assert.ok(echo.text.length > 0);
assert.ok(echo.category.length > 0);

const fragments = sandbox.buildEchoFragments({ s01: "a", s02: "b", s09: "c" });
assert.strictEqual(fragments.length, 3);
assert.deepStrictEqual(Array.from(fragments.map((fragment) => fragment.sceneId)), ["s01", "s02", "s09"]);
assert.ok(fragments.every((fragment) => fragment.name && fragment.text));

sandbox.gameState.screen = "play";
sandbox.gameState.currentScene = "s01";
sandbox.renderHeartGame();
assert.ok(gameMount.innerHTML.includes("journey-navigator") === false);
assert.strictEqual((gameMount.innerHTML.match(/class="choice-card/g) || []).length, 3);
assert.ok(gameMount.innerHTML.includes("Ⅲ"));

sandbox.gameState.screen = "map";
sandbox.gameState.answers = { s01: "a", s02: "b" };
sandbox.gameState.currentScene = "s03";
sandbox.renderHeartGame();
assert.ok(gameMount.innerHTML.includes("heart-map-screen"));
assert.ok(gameMount.innerHTML.includes("map-node"));
assert.ok(gameMount.innerHTML.includes("心境地图"));
assert.ok(gameMount.innerHTML.includes("回响"));

sandbox.gameState.answers = {};
sandbox.startHeartMap();
assert.strictEqual(sandbox.gameState.screen, "map");
sandbox.openHeartScene("s01");
assert.strictEqual(sandbox.gameState.screen, "play");
sandbox.openHeartMap();
assert.strictEqual(sandbox.gameState.screen, "map");

const energyAnswers = {};
sandbox.heartMapScenes.filter((scene) => scene.chapter === "energy").forEach((scene) => {
  energyAnswers[scene.id] = "a";
});
const energySummary = sandbox.buildChapterSummary("energy", energyAnswers);
assert.strictEqual(energySummary.chapter, "energy");
assert.strictEqual(energySummary.fragments.length, 8);
assert.ok(energySummary.title.includes("能量"));
assert.ok(energySummary.text.length > 0);

const closeScores = { E: 5, I: 4, S: 4, N: 4, T: 6, F: 2, J: 3, P: 5 };
const strengths = sandbox.calculateDimensionStrengths(closeScores);
assert.strictEqual(strengths.energy.label, "温和");
assert.strictEqual(strengths.perception.label, "平衡");
assert.strictEqual(strengths.judgment.label, "明显");
assert.ok(strengths.rhythm.text.includes("弹性"));

const resultWithEvidence = sandbox.calculateHeartMapResult(answers);
assert.ok(Array.isArray(resultWithEvidence.echoes));
assert.ok(resultWithEvidence.echoes.length > 0);
assert.ok(resultWithEvidence.strengths.energy.label);
assert.ok(resultWithEvidence.report.evidence.includes("回响"));

console.log("mbti game tests passed");
