const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("mbti-game.js", "utf8");
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
    getElementById() {
      return { innerHTML: "" };
    }
  },
  window: {}
};

vm.createContext(sandbox);
vm.runInContext(source, sandbox);

assert.strictEqual(sandbox.heartMapScenes.length, 16);
assert.deepStrictEqual([...new Set(sandbox.heartMapScenes.map((scene) => scene.chapter))], ["energy", "perception", "judgment", "rhythm"]);
assert.deepStrictEqual([...new Set(sandbox.heartMapScenes.map((scene) => scene.category))], ["情感关系", "人际相处", "职业工作", "情绪成长"]);

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

console.log("mbti game tests passed");
