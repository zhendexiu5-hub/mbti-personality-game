# Heart Map Visual Novel Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved visual-novel + heart-map exploration upgrade for the existing 32-scene personality game.

**Architecture:** Keep the static single-page app and add a generated map screen, deterministic echo fragments, chapter summaries, and richer result evidence on top of the existing `heartMapScenes` source of truth. Preserve local-only progress and Cloudflare Pages deployment.

**Tech Stack:** Plain HTML, CSS, JavaScript, Node `assert` tests, Cloudflare Pages via Wrangler.

---

## File Structure

- Modify `mbti-game.js`: add map/echo/chapter-summary/result helper functions, update `gameState`, update render flow, and preserve hidden scoring.
- Modify `mbti-game.css`: add full-screen heart-map, chapter summary, result strength, and echo evidence styles.
- Modify `tests/mbti-game.test.js`: add coverage for map nodes, unlock states, echo fragments, chapter summaries, balanced dimensions, and new render states.
- No new runtime dependency.

## Task 1: Add Failing Tests For Map And Echo Data

**Files:**
- Modify: `tests/mbti-game.test.js`
- Test: `tests/mbti-game.test.js`

- [ ] **Step 1: Add assertions for generated map nodes**

Append this block after the existing chapter count assertions:

```js
const mapNodes = sandbox.buildHeartMapNodes();
assert.strictEqual(mapNodes.length, 32);
assert.deepStrictEqual(
  mapNodes.slice(0, 4).map((node) => node.id),
  ["s01", "s02", "s03", "s04"]
);
assert.strictEqual(mapNodes[0].chapter, "energy");
assert.strictEqual(mapNodes[0].number, 1);
assert.ok(Number.isFinite(mapNodes[0].x));
assert.ok(Number.isFinite(mapNodes[0].y));
assert.ok(mapNodes.every((node) => node.echoName));
```

- [ ] **Step 2: Add assertions for node unlock states**

Append this block after the map node assertions:

```js
const emptyNodeState = sandbox.getHeartMapNodeState("s01", {});
assert.strictEqual(emptyNodeState.done, false);
assert.strictEqual(emptyNodeState.active, true);
assert.strictEqual(emptyNodeState.locked, false);

const lockedNodeState = sandbox.getHeartMapNodeState("s03", { s01: "a" });
assert.strictEqual(lockedNodeState.locked, true);

const doneNodeState = sandbox.getHeartMapNodeState("s02", { s01: "a", s02: "b" });
assert.strictEqual(doneNodeState.done, true);
assert.strictEqual(doneNodeState.locked, false);
```

- [ ] **Step 3: Add assertions for echo fragments**

Append this block after the blended result assertions:

```js
const echo = sandbox.buildChoiceEcho(sandbox.heartMapScenes[0], sandbox.heartMapScenes[0].choices[0]);
assert.strictEqual(echo.sceneId, "s01");
assert.strictEqual(echo.chapter, "energy");
assert.ok(echo.name.length > 0);
assert.ok(echo.text.length > 0);
assert.ok(echo.category.length > 0);

const fragments = sandbox.buildEchoFragments({ s01: "a", s02: "b", s09: "c" });
assert.strictEqual(fragments.length, 3);
assert.deepStrictEqual(fragments.map((fragment) => fragment.sceneId), ["s01", "s02", "s09"]);
assert.ok(fragments.every((fragment) => fragment.name && fragment.text));
```

- [ ] **Step 4: Run test to verify it fails**

Run:

```powershell
npm test
```

Expected: FAIL with `sandbox.buildHeartMapNodes is not a function`.

- [ ] **Step 5: Commit failing test**

```powershell
git add tests/mbti-game.test.js
git commit -m "test: cover heart map node and echo data"
```

## Task 2: Implement Map And Echo Helpers

**Files:**
- Modify: `mbti-game.js`
- Test: `tests/mbti-game.test.js`

- [ ] **Step 1: Add helper constants**

Insert this after `categoryVisuals`:

```js
var chapterMapPositions = {
  energy: { cx: 50, cy: 18, arc: 24 },
  perception: { cx: 18, cy: 50, arc: 24 },
  judgment: { cx: 82, cy: 50, arc: 24 },
  rhythm: { cx: 50, cy: 82, arc: 24 }
};

var echoNameByPole = {
  E: "靠近之光",
  I: "静候之灯",
  S: "线索碎片",
  N: "隐喻回声",
  T: "清晰刻痕",
  F: "心灯余温",
  J: "秩序路标",
  P: "流动星尘"
};
```

- [ ] **Step 2: Add generated map node helpers**

Insert this after `currentHeartScene()`:

```js
function chapterSceneIndex(scene) {
  return heartMapScenes.filter((item) => item.chapter === scene.chapter).findIndex((item) => item.id === scene.id);
}

function buildHeartMapNodes() {
  return heartMapScenes.map((scene) => {
    const index = sceneIndex(scene.id);
    const localIndex = chapterSceneIndex(scene);
    const position = chapterMapPositions[scene.chapter];
    const angle = (-105 + localIndex * (210 / 7)) * (Math.PI / 180);
    return {
      id: scene.id,
      title: scene.title,
      chapter: scene.chapter,
      category: scene.category,
      number: index + 1,
      localNumber: localIndex + 1,
      x: Math.round((position.cx + Math.cos(angle) * position.arc) * 10) / 10,
      y: Math.round((position.cy + Math.sin(angle) * position.arc) * 10) / 10,
      echoName: echoNameByPole[primaryChoicePole(scene.choices[0])] || "心境回响"
    };
  });
}

function isHeartSceneUnlocked(sceneId, answers) {
  const targetIndex = sceneIndex(sceneId);
  if (targetIndex <= 0) return targetIndex === 0;
  return Boolean(answers[heartMapScenes[targetIndex - 1].id]);
}

function getHeartMapNodeState(sceneId, answers) {
  const firstMissing = firstUnfinishedScene(answers);
  return {
    done: Boolean(answers[sceneId]),
    active: (firstMissing ? firstMissing.id : heartMapScenes[heartMapScenes.length - 1].id) === sceneId,
    locked: !isHeartSceneUnlocked(sceneId, answers)
  };
}
```

- [ ] **Step 3: Add echo helper functions**

Insert this after `compactNote(note)`:

```js
function buildChoiceEcho(scene, choice) {
  const pole = primaryChoicePole(choice);
  return {
    sceneId: scene.id,
    title: scene.title,
    chapter: scene.chapter,
    category: scene.category,
    choiceId: choice.id,
    pole,
    name: echoNameByPole[pole] || "心境回响",
    action: choiceAction(scene, choice),
    text: compactNote(choice.note)
  };
}

function buildEchoFragments(answers) {
  return heartMapScenes.reduce((fragments, scene) => {
    const choice = scene.choices.find((item) => item.id === answers[scene.id]);
    if (choice) fragments.push(buildChoiceEcho(scene, choice));
    return fragments;
  }, []);
}
```

- [ ] **Step 4: Run tests**

Run:

```powershell
npm test
```

Expected: PASS with `mbti game tests passed`.

- [ ] **Step 5: Commit implementation**

```powershell
git add mbti-game.js tests/mbti-game.test.js
git commit -m "feat: derive heart map nodes and echo fragments"
```

## Task 3: Add Failing Tests For Map Screen Flow

**Files:**
- Modify: `tests/mbti-game.test.js`
- Test: `tests/mbti-game.test.js`

- [ ] **Step 1: Add render assertions for map screen**

Append this block before `console.log("mbti game tests passed");`:

```js
sandbox.gameState.screen = "map";
sandbox.gameState.answers = { s01: "a", s02: "b" };
sandbox.gameState.currentScene = "s03";
sandbox.renderHeartGame();
assert.ok(gameMount.innerHTML.includes("heart-map-screen"));
assert.ok(gameMount.innerHTML.includes("map-node"));
assert.ok(gameMount.innerHTML.includes("心境地图"));
assert.ok(gameMount.innerHTML.includes("回响"));
```

- [ ] **Step 2: Add transition assertions for start and return to map**

Append this block after the render assertions:

```js
sandbox.gameState.answers = {};
sandbox.startHeartMap();
assert.strictEqual(sandbox.gameState.screen, "map");
sandbox.openHeartScene("s01");
assert.strictEqual(sandbox.gameState.screen, "play");
sandbox.openHeartMap();
assert.strictEqual(sandbox.gameState.screen, "map");
```

- [ ] **Step 3: Run test to verify it fails**

Run:

```powershell
npm test
```

Expected: FAIL because `heart-map-screen` is missing or `openHeartMap` is not defined.

- [ ] **Step 4: Commit failing test**

```powershell
git add tests/mbti-game.test.js
git commit -m "test: cover heart map screen flow"
```

## Task 4: Implement Dedicated Heart Map Screen

**Files:**
- Modify: `mbti-game.js`
- Modify: `mbti-game.css`
- Test: `tests/mbti-game.test.js`

- [ ] **Step 1: Update game state**

Change the `gameState` object to include `currentChapterSummary`:

```js
var gameState = {
  screen: savedHeartMap.screen || "intro",
  currentScene: savedHeartMap.currentScene || "s01",
  answers: savedHeartMap.answers || {},
  result: savedHeartMap.result || null,
  lastChoice: null,
  navigatorOpen: false,
  currentChapterSummary: savedHeartMap.currentChapterSummary || null,
  toast: ""
};
```

Update `saveHeartMap()` so it stores the new field:

```js
function saveHeartMap() {
  localStorage.setItem("heartMapProgress", JSON.stringify({
    screen: gameState.screen,
    currentScene: gameState.currentScene,
    answers: gameState.answers,
    result: gameState.result,
    currentChapterSummary: gameState.currentChapterSummary
  }));
}
```

- [ ] **Step 2: Add map navigation function**

Insert this after `startHeartMap()`:

```js
function openHeartMap() {
  gameState.screen = "map";
  gameState.navigatorOpen = false;
  gameState.lastChoice = null;
  saveHeartMap();
  renderHeartGame();
}
```

Change `startHeartMap()` to open the map first:

```js
function startHeartMap() {
  gameState.screen = "map";
  gameState.currentScene = firstUnfinishedScene(gameState.answers)?.id || "s01";
  gameState.lastChoice = null;
  gameState.navigatorOpen = false;
  gameState.currentChapterSummary = null;
  saveHeartMap();
  renderHeartGame();
}
```

- [ ] **Step 3: Update locked scene logic**

Replace the unlock logic inside `openHeartScene(sceneId)` with:

```js
function openHeartScene(sceneId) {
  const unlocked = isHeartSceneUnlocked(sceneId, gameState.answers);
  if (!unlocked) {
    showHeartToast("先点亮前一个心境节点。");
    return;
  }
  gameState.screen = "play";
  gameState.currentScene = sceneId;
  gameState.lastChoice = null;
  gameState.navigatorOpen = false;
  gameState.currentChapterSummary = null;
  saveHeartMap();
  renderHeartGame();
}
```

- [ ] **Step 4: Add map renderer**

Insert this before `renderHeartIntro()`:

```js
function renderHeartMapScreen() {
  const nodes = buildHeartMapNodes();
  const fragments = buildEchoFragments(gameState.answers);
  return `
    <div class="heart-map-screen">
      <div class="map-sky"></div>
      <header class="map-hero">
        <span>HEART MAP</span>
        <h2>心境地图</h2>
        <p>四片区域正在记录你的行动回响。</p>
      </header>
      <div class="map-canvas" aria-label="心境地图节点">
        <div class="map-core">
          <strong>${Object.keys(gameState.answers).length}</strong>
          <span>回响</span>
        </div>
        ${heartMapChapters.map((chapter) => `
          <section class="map-region region-${chapter.id}" style="--chapter:${chapter.color}">
            <h3>${chapterMarks[chapter.id]} ${chapter.title}</h3>
          </section>
        `).join("")}
        ${nodes.map((node) => {
          const state = getHeartMapNodeState(node.id, gameState.answers);
          const answer = gameState.answers[node.id];
          const scene = heartMapScenes.find((item) => item.id === node.id);
          const choice = scene.choices.find((item) => item.id === answer);
          const echo = choice ? buildChoiceEcho(scene, choice) : null;
          return `
            <button
              class="map-node ${state.done ? "done" : ""} ${state.active ? "active" : ""} ${state.locked ? "locked" : ""}"
              style="--x:${node.x}%; --y:${node.y}%; --chapter:${heartMapChapters.find((chapter) => chapter.id === node.chapter).color}"
              ${state.locked ? "disabled" : ""}
              onclick="openHeartScene('${node.id}')"
              aria-label="${node.title}"
            >
              <i>${node.number}</i>
              <span>${echo ? echo.name : node.title}</span>
            </button>
          `;
        }).join("")}
      </div>
      <section class="map-echo-panel">
        <h3>最近回响</h3>
        <div class="map-echo-list">
          ${(fragments.length ? fragments.slice(-5).reverse() : [{ name: "空白心灯", text: "开始第一幕，地图会留下你的选择痕迹。" }]).map((fragment) => `
            <article>
              <strong>${fragment.name}</strong>
              <span>${fragment.text}</span>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}
```

- [ ] **Step 5: Route the new screen**

Replace the stage expression inside `renderHeartGame()`:

```js
${gameState.screen === "intro" ? renderHeartIntro() : gameState.screen === "map" ? renderHeartMapScreen() : gameState.screen === "chapter" ? renderChapterSummary() : gameState.screen === "result" ? renderHeartResult() : renderHeartPlay()}
```

- [ ] **Step 6: Add basic CSS for map screen**

Append this before `.result-playfield` styles:

```css
.heart-map-screen {
  position: relative;
  min-height: 100%;
  overflow: hidden;
  padding: 28px;
  background: radial-gradient(circle at 50% 42%, rgba(251, 191, 36, 0.16), transparent 34%), #020617;
}

.map-hero {
  position: relative;
  z-index: 3;
  max-width: 520px;
}

.map-hero span,
.map-hero p {
  color: #cbd5e1;
  font-size: 12px;
  font-weight: 900;
}

.map-hero h2 {
  margin: 8px 0;
  color: #fef3c7;
  font-size: 36px;
  font-weight: 900;
}

.map-canvas {
  position: relative;
  z-index: 2;
  height: min(62vh, 620px);
  min-height: 430px;
  margin-top: 18px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  background: radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.3), rgba(2, 6, 23, 0.86));
}

.map-core {
  position: absolute;
  left: 50%;
  top: 50%;
  display: grid;
  place-items: center;
  width: 92px;
  height: 92px;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(251, 191, 36, 0.42);
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.86);
  color: #fef3c7;
}

.map-core strong,
.map-core span {
  display: block;
}

.map-core strong {
  font-size: 28px;
}

.map-core span {
  color: #cbd5e1;
  font-size: 11px;
  font-weight: 900;
}

.map-region {
  position: absolute;
  color: color-mix(in srgb, var(--chapter), white 24%);
  font-size: 12px;
  font-weight: 900;
}

.region-energy { left: 42%; top: 6%; }
.region-perception { left: 7%; top: 47%; }
.region-judgment { right: 7%; top: 47%; }
.region-rhythm { left: 42%; bottom: 6%; }

.map-node {
  position: absolute;
  left: var(--x);
  top: var(--y);
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  transform: translate(-50%, -50%);
  border: 1px solid color-mix(in srgb, var(--chapter), transparent 30%);
  border-radius: 50%;
  background: rgba(15, 23, 42, 0.86);
  color: #f8fafc;
  box-shadow: 0 0 18px color-mix(in srgb, var(--chapter), transparent 75%);
}

.map-node i {
  font-style: normal;
  font-weight: 900;
}

.map-node span {
  position: absolute;
  top: 52px;
  width: 92px;
  color: #cbd5e1;
  font-size: 10px;
  font-weight: 900;
  text-align: center;
}

.map-node.done {
  background: color-mix(in srgb, var(--chapter), #020617 55%);
}

.map-node.active {
  animation: node-pulse 1.6s ease-in-out infinite;
}

.map-node.locked {
  opacity: 0.34;
  box-shadow: none;
}

.map-echo-panel {
  position: relative;
  z-index: 3;
  margin-top: 16px;
}

.map-echo-panel h3 {
  margin: 0 0 10px;
  color: #fbbf24;
  font-size: 15px;
}

.map-echo-list {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
}

.map-echo-list article {
  min-height: 78px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  background: rgba(15, 23, 42, 0.72);
}

.map-echo-list strong,
.map-echo-list span {
  display: block;
}

.map-echo-list strong {
  color: #fef3c7;
  font-size: 13px;
}

.map-echo-list span {
  margin-top: 6px;
  color: #cbd5e1;
  font-size: 11px;
  line-height: 1.5;
}
```

Add this keyframe near existing keyframes:

```css
@keyframes node-pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.12);
  }
}
```

- [ ] **Step 7: Run tests**

Run:

```powershell
npm test
```

Expected: PASS.

- [ ] **Step 8: Commit map screen**

```powershell
git add mbti-game.js mbti-game.css tests/mbti-game.test.js
git commit -m "feat: add dedicated heart map screen"
```

## Task 5: Add Chapter Summary Tests And Flow

**Files:**
- Modify: `tests/mbti-game.test.js`
- Modify: `mbti-game.js`
- Modify: `mbti-game.css`

- [ ] **Step 1: Add failing chapter summary tests**

Append this before `console.log("mbti game tests passed");`:

```js
const energyAnswers = {};
sandbox.heartMapScenes.filter((scene) => scene.chapter === "energy").forEach((scene) => {
  energyAnswers[scene.id] = "a";
});
const energySummary = sandbox.buildChapterSummary("energy", energyAnswers);
assert.strictEqual(energySummary.chapter, "energy");
assert.strictEqual(energySummary.fragments.length, 8);
assert.ok(energySummary.title.includes("能量"));
assert.ok(energySummary.text.length > 0);
```

Run:

```powershell
npm test
```

Expected: FAIL with `sandbox.buildChapterSummary is not a function`.

- [ ] **Step 2: Add summary helpers**

Insert this after `buildEchoFragments(answers)`:

```js
function buildChapterSummary(chapterId, answers) {
  const chapter = heartMapChapters.find((item) => item.id === chapterId);
  const fragments = buildEchoFragments(answers).filter((fragment) => fragment.chapter === chapterId);
  const names = fragments.slice(-3).map((fragment) => fragment.name).join("、") || "尚未形成回响";
  return {
    chapter: chapterId,
    title: `${chapter.title}已点亮`,
    fragments,
    text: `这一章留下了${names}。它们会在最终心型里变成你的选择证据。`
  };
}

function isChapterComplete(chapterId, answers) {
  return heartMapScenes.filter((scene) => scene.chapter === chapterId).every((scene) => answers[scene.id]);
}

function nextChapterFirstScene(chapterId) {
  const chapterIndex = heartMapChapters.findIndex((chapter) => chapter.id === chapterId);
  const nextChapter = heartMapChapters[chapterIndex + 1];
  if (!nextChapter) return null;
  return heartMapScenes.find((scene) => scene.chapter === nextChapter.id) || null;
}
```

- [ ] **Step 3: Update answer flow to show chapter summary**

Replace the last part of `answerHeartScene(choiceId)` after `gameState.lastChoice = { ... }` with:

```js
  const currentChapter = scene.chapter;
  const nextScene = heartMapScenes[sceneIndex(scene.id) + 1];
  if (isChapterComplete(currentChapter, gameState.answers) && (!nextScene || nextScene.chapter !== currentChapter)) {
    gameState.currentChapterSummary = currentChapter;
    gameState.screen = "chapter";
  } else if (nextScene) {
    gameState.currentScene = nextScene.id;
  }
  saveHeartMap();
  renderHeartGame();
```

- [ ] **Step 4: Add chapter summary navigation**

Insert this after `openHeartMap()`:

```js
function continueFromChapterSummary() {
  const nextScene = nextChapterFirstScene(gameState.currentChapterSummary);
  gameState.currentChapterSummary = null;
  if (nextScene) {
    gameState.screen = "map";
    gameState.currentScene = nextScene.id;
  } else {
    finishHeartMap();
    return;
  }
  saveHeartMap();
  renderHeartGame();
}
```

- [ ] **Step 5: Add chapter summary renderer**

Insert this before `renderHeartMapScreen()`:

```js
function renderChapterSummary() {
  const chapterId = gameState.currentChapterSummary || currentHeartScene().chapter;
  const summary = buildChapterSummary(chapterId, gameState.answers);
  const chapter = heartMapChapters.find((item) => item.id === chapterId);
  return `
    <div class="chapter-summary-screen" style="--chapter:${chapter.color}">
      <div class="chapter-summary-card">
        <span>${chapterMarks[chapterId]}</span>
        <h2>${summary.title}</h2>
        <p>${summary.text}</p>
        <div class="summary-fragments">
          ${summary.fragments.slice(-4).map((fragment) => `
            <article>
              <strong>${fragment.name}</strong>
              <small>${fragment.action}</small>
              <p>${fragment.text}</p>
            </article>
          `).join("")}
        </div>
        <div class="heart-actions">
          <button onclick="openHeartMap()">回到地图</button>
          <button class="heart-primary" onclick="continueFromChapterSummary()">继续旅程</button>
        </div>
      </div>
    </div>
  `;
}
```

- [ ] **Step 6: Add chapter summary CSS**

Append near map styles:

```css
.chapter-summary-screen {
  display: grid;
  min-height: 100%;
  place-items: center;
  padding: 28px;
  background: radial-gradient(circle at 50% 42%, color-mix(in srgb, var(--chapter), transparent 72%), transparent 42%), #020617;
}

.chapter-summary-card {
  width: min(92vw, 680px);
  padding: 28px;
  border: 1px solid color-mix(in srgb, var(--chapter), transparent 48%);
  border-radius: 8px;
  background: rgba(15, 23, 42, 0.84);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.5);
}

.chapter-summary-card > span {
  display: grid;
  place-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--chapter), transparent 70%);
  color: #fef3c7;
  font-weight: 900;
}

.chapter-summary-card h2 {
  margin: 18px 0 8px;
  color: #fef3c7;
  font-size: 30px;
}

.chapter-summary-card p {
  color: #d1d5db;
  line-height: 1.7;
}

.summary-fragments {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 22px 0;
}

.summary-fragments article {
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  background: rgba(2, 6, 23, 0.44);
}

.summary-fragments strong,
.summary-fragments small {
  display: block;
}

.summary-fragments strong {
  color: #fbbf24;
}

.summary-fragments small {
  margin-top: 5px;
  color: #94a3b8;
  font-weight: 900;
}
```

- [ ] **Step 7: Run tests**

Run:

```powershell
npm test
```

Expected: PASS.

- [ ] **Step 8: Commit chapter summary**

```powershell
git add mbti-game.js mbti-game.css tests/mbti-game.test.js
git commit -m "feat: add chapter echo summaries"
```

## Task 6: Upgrade Result Evidence And Balanced Dimensions

**Files:**
- Modify: `tests/mbti-game.test.js`
- Modify: `mbti-game.js`
- Modify: `mbti-game.css`

- [ ] **Step 1: Add failing result tests**

Append this before `console.log("mbti game tests passed");`:

```js
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
```

Run:

```powershell
npm test
```

Expected: FAIL with `sandbox.calculateDimensionStrengths is not a function`.

- [ ] **Step 2: Add dimension strength helper**

Insert this before `calculateHeartMapResult(answers)`:

```js
function dimensionStrength(primaryScore, secondaryScore) {
  const diff = Math.abs(primaryScore - secondaryScore);
  if (diff >= 4) return "明显";
  if (diff >= 2) return "温和";
  return "平衡";
}

function dimensionText(label, primary, secondary) {
  if (label === "平衡") return `你会在${poleMeta[primary].name}与${poleMeta[secondary].name}之间灵活移动。`;
  if (label === "温和") return `你更常使用${poleMeta[primary].name}，但仍保留另一侧的弹性。`;
  return `${poleMeta[primary].name}是这组选择里更清晰的主旋律。`;
}

function calculateDimensionStrengths(scores) {
  const dimensions = [
    ["energy", "E", "I"],
    ["perception", "S", "N"],
    ["judgment", "T", "F"],
    ["rhythm", "J", "P"]
  ];
  return dimensions.reduce((summary, [key, left, right]) => {
    const primary = scores[left] >= scores[right] ? left : right;
    const secondary = primary === left ? right : left;
    const label = dimensionStrength(scores[primary], scores[secondary]);
    summary[key] = {
      primary,
      secondary,
      label,
      text: dimensionText(label, primary, secondary)
    };
    return summary;
  }, {});
}
```

- [ ] **Step 3: Update result calculation**

Replace the result creation in `calculateHeartMapResult(answers)` with:

```js
  const echoes = buildEchoFragments(answers);
  const result = {
    type,
    scores,
    notes,
    echoes,
    strengths: calculateDimensionStrengths(scores),
    profile: heartTypeProfiles[type]
  };
  result.report = buildHeartMapReport(result);
  return result;
```

- [ ] **Step 4: Extend report builder**

Replace `buildHeartMapReport(result)` with:

```js
function buildHeartMapReport(result) {
  const letters = result.type.split("");
  const strongest = letters.map((letter) => poleMeta[letter]);
  const loveNotes = result.notes.filter((item) => item.category === "情感关系").map((item) => item.note);
  const growthNotes = result.notes.filter((item) => item.category === "情绪成长").map((item) => item.note);
  const evidence = result.echoes.slice(-5).map((item) => `${item.name}：${item.text}`).join("；");
  const strengthText = Object.values(result.strengths).map((item) => item.text).join("");
  return {
    journey: `你走完了一张心境地图，最终呈现为 ${result.type}：${result.profile}。${strongest.map((item) => item.text).join("")}${strengthText}`,
    love: `在情感和亲密关系里，${formatHeartNotes(loveNotes)}。这不是给你贴标签，而是提醒你：喜欢、边界和安全感需要同时被看见。`,
    social: `在人际相处中，你的选择显示出一种稳定模式：先保护真实节奏，再决定靠近方式。朋友、家庭和社交场合都适合用更清楚的话表达边界。`,
    work: `在职业或任务情境里，这张地图只给轻量参考：把工作当成能量管理的一部分，不把人格结果变成固定职业模板。`,
    growth: `情绪成长线索：${formatHeartNotes(growthNotes)}。接下来 7 天可以记录“让我靠近的事”和“让我后退的事”，找到真正适合你的恢复方式。`,
    evidence: `你的关键回响包括：${evidence || "尚未留下足够回响"}。`
  };
}
```

- [ ] **Step 5: Update result renderer**

In `renderHeartResult()`, add this block after `.trait-grid`:

```js
        <div class="strength-grid">
          ${Object.entries(result.strengths).map(([key, item]) => `
            <article>
              <strong>${heartMapChapters.find((chapter) => chapter.id === key).title}</strong>
              <span>${item.primary}/${item.secondary} · ${item.label}</span>
              <p>${item.text}</p>
            </article>
          `).join("")}
        </div>
        <section class="result-evidence">
          <h3>选择回响</h3>
          <div>
            ${result.echoes.slice(-6).map((echo) => `
              <article>
                <strong>${echo.name}</strong>
                <span>${echo.title} · ${echo.action}</span>
                <p>${echo.text}</p>
              </article>
            `).join("")}
          </div>
        </section>
```

Add `"选择证据": result.report.evidence` to the report entries:

```js
          "选择证据": result.report.evidence,
```

- [ ] **Step 6: Add CSS for strength and evidence**

Append near result styles:

```css
.strength-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  margin-bottom: 24px;
}

.strength-grid article,
.result-evidence article {
  padding: 12px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 6px;
  background: rgba(15, 23, 42, 0.64);
}

.strength-grid strong,
.strength-grid span,
.strength-grid p,
.result-evidence strong,
.result-evidence span,
.result-evidence p {
  display: block;
}

.strength-grid strong,
.result-evidence h3,
.result-evidence strong {
  color: #fef3c7;
}

.strength-grid span,
.result-evidence span {
  margin-top: 5px;
  color: #fbbf24;
  font-size: 12px;
  font-weight: 900;
}

.strength-grid p,
.result-evidence p {
  margin: 8px 0 0;
  color: #cbd5e1;
  font-size: 12px;
  line-height: 1.55;
}

.result-evidence {
  margin-bottom: 24px;
}

.result-evidence h3 {
  margin: 0 0 10px;
  font-size: 16px;
}

.result-evidence > div {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}
```

- [ ] **Step 7: Run tests**

Run:

```powershell
npm test
```

Expected: PASS.

- [ ] **Step 8: Commit result upgrade**

```powershell
git add mbti-game.js mbti-game.css tests/mbti-game.test.js
git commit -m "feat: add result strengths and echo evidence"
```

## Task 7: Mobile Polish And Static Checks

**Files:**
- Modify: `mbti-game.css`
- Test: `mbti-game.js`
- Test: `tests/mbti-game.test.js`

- [ ] **Step 1: Add mobile map CSS**

Append inside the existing mobile media section, or add a new one near the end of `mbti-game.css`:

```css
@media (max-width: 760px) {
  .heart-map-screen {
    padding: 18px 12px 24px;
  }

  .map-hero h2 {
    font-size: 28px;
  }

  .map-canvas {
    height: 58vh;
    min-height: 380px;
  }

  .map-node {
    width: 42px;
    height: 42px;
  }

  .map-node span {
    display: none;
  }

  .map-echo-list,
  .summary-fragments,
  .strength-grid,
  .result-evidence > div {
    grid-template-columns: 1fr;
  }

  .chapter-summary-card {
    padding: 20px;
  }

  .chapter-summary-card h2 {
    font-size: 24px;
  }
}
```

- [ ] **Step 2: Ensure scene actions point to map**

In `renderHeartPlay()`, replace the first `.heart-actions` button:

```js
          <button onclick="openHeartMap()">地图</button>
```

In `renderHeartResult()`, replace the back action:

```js
          <button onclick="openHeartMap()">回看地图</button>
```

- [ ] **Step 3: Run static checks**

Run:

```powershell
node --check mbti-game.js
npm test
```

Expected:

```text
mbti game tests passed
```

`node --check` should produce no output.

- [ ] **Step 4: Commit polish**

```powershell
git add mbti-game.js mbti-game.css
git commit -m "style: polish heart map mobile layout"
```

## Task 8: Browser Verification And Deployment

**Files:**
- Verify: `index.html`
- Verify: `mbti-game.js`
- Verify: `mbti-game.css`

- [ ] **Step 1: Start local server**

Run:

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Expected: server listens on `http://127.0.0.1:5173/`.

- [ ] **Step 2: Verify local desktop flow**

Open `http://127.0.0.1:5173/`. Verify:

- Intro opens without console errors.
- Start opens the new heart map.
- First unlocked node opens the scene page.
- Choosing actions creates echo feedback.
- Completing a chapter opens chapter summary.
- Result page shows strengths and echo evidence.

- [ ] **Step 3: Verify mobile flow**

Use a mobile viewport around `390x844`. Verify:

- Map nodes remain tappable.
- Node labels do not overlap controls.
- Summary cards fit within the viewport.
- Result evidence cards stack to one column.

- [ ] **Step 4: Commit any verification fixes**

If verification required CSS or JS adjustments:

```powershell
git add mbti-game.js mbti-game.css tests/mbti-game.test.js
git commit -m "fix: resolve heart map verification issues"
```

If no fixes were needed, skip this commit.

- [ ] **Step 5: Push and deploy**

Run:

```powershell
git status --short
git push origin main
npm run deploy
```

Expected:

- `git status --short` is empty before push.
- Push succeeds.
- Wrangler prints a Cloudflare Pages deployment URL.

- [ ] **Step 6: Production smoke test**

Open `https://mbti-personality-game.pages.dev/`. Verify:

- Production page returns HTTP 200.
- Start opens the map.
- A scene can be opened and answered.
- No broken image icons are visible.
- No console errors appear during the first interaction.

## Self-Review

- Spec coverage: The plan covers the dedicated map screen, generated nodes, echo fragments, chapter summaries, result strength/evidence, hidden scoring, mobile polish, tests, and deployment.
- Scope check: The plan does not add complex branching, login, cloud storage, paid reports, backend management, or chapter expansion.
- Red-flag scan: No forbidden vague markers remain.
- Type consistency: Helper names used in tests match implementation steps: `buildHeartMapNodes`, `getHeartMapNodeState`, `buildChoiceEcho`, `buildEchoFragments`, `buildChapterSummary`, `calculateDimensionStrengths`, and `openHeartMap`.
