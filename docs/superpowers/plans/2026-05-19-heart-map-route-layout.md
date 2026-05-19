# Heart Map Route Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the crowded heart-map scatter layout with a readable four-quadrant route map.

**Architecture:** Keep the existing static JavaScript game. Change only map node coordinate generation, map rendering metadata, and CSS presentation; do not change scenes, scoring, reports, or persistence.

**Tech Stack:** Plain JavaScript, CSS, Node `assert` tests, Cloudflare Pages.

---

## File Structure

- Modify `mbti-game.js`: replace shared arc node placement with chapter route templates and expose node route metadata.
- Modify `mbti-game.css`: hide always-on labels, show active/hover labels, and style quadrant route spacing.
- Modify `tests/mbti-game.test.js`: add spacing and chapter-count assertions for route-map nodes.

## Task 1: Add Route-Map Spacing Test

**Files:**
- Modify: `tests/mbti-game.test.js`

- [ ] **Step 1: Add the failing test**

After the existing `mapNodes.every((node) => node.y >= 6 && node.y <= 94)` assertion, add:

```js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run:

```powershell
npm test
```

Expected: FAIL because current map coordinates still have close pairs and no `routeClass`.

- [ ] **Step 3: Commit failing test**

```powershell
git add tests/mbti-game.test.js
git commit -m "test: cover readable route map spacing"
```

## Task 2: Implement Route Coordinates

**Files:**
- Modify: `mbti-game.js`
- Modify: `tests/mbti-game.test.js`

- [ ] **Step 1: Replace chapter map position data**

Replace `chapterMapPositions` with:

```js
var chapterRouteOrigins = {
  energy: { x: 19, y: 20, className: "route-energy" },
  perception: { x: 59, y: 20, className: "route-perception" },
  judgment: { x: 19, y: 58, className: "route-judgment" },
  rhythm: { x: 59, y: 58, className: "route-rhythm" }
};

var chapterRoutePoints = [
  { x: 0, y: 0 },
  { x: 12, y: 0 },
  { x: 24, y: 0 },
  { x: 30, y: 10 },
  { x: 24, y: 20 },
  { x: 12, y: 20 },
  { x: 0, y: 20 },
  { x: 6, y: 10 }
];
```

- [ ] **Step 2: Replace coordinate logic in `buildHeartMapNodes()`**

Inside `buildHeartMapNodes()`, replace the `position` and `angle` logic with:

```js
    const origin = chapterRouteOrigins[scene.chapter];
    const point = chapterRoutePoints[localIndex];
```

Then replace `x`, `y`, and add `routeClass`:

```js
      x: origin.x + point.x,
      y: origin.y + point.y,
      routeClass: origin.className,
```

- [ ] **Step 3: Run tests**

Run:

```powershell
npm test
```

Expected: PASS.

- [ ] **Step 4: Commit route coordinate implementation**

```powershell
git add mbti-game.js tests/mbti-game.test.js
git commit -m "fix: space heart map nodes into chapter routes"
```

## Task 3: Clean Up Map Labels And Region Styling

**Files:**
- Modify: `mbti-game.js`
- Modify: `mbti-game.css`

- [ ] **Step 1: Add route class to rendered node**

In `renderHeartMapScreen()`, change the node button class to:

```js
class="map-node ${node.routeClass} ${state.done ? "done" : ""} ${state.active ? "active" : ""} ${state.locked ? "locked" : ""}"
```

- [ ] **Step 2: Replace label CSS**

Replace `.map-node span` with:

```css
.map-node span {
  position: absolute;
  left: 50%;
  top: 54px;
  z-index: 4;
  display: none;
  width: max-content;
  max-width: 132px;
  transform: translateX(-50%);
  padding: 4px 7px;
  border: 1px solid color-mix(in srgb, var(--chapter), transparent 42%);
  border-radius: 4px;
  background: rgba(2, 6, 23, 0.92);
  color: #e2e8f0;
  font-size: 10px;
  font-weight: 900;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
}

.map-node.active span,
.map-node:focus-visible span,
.map-node:hover span {
  display: block;
}
```

- [ ] **Step 3: Reposition region labels**

Replace the four `.region-*` rules with:

```css
.region-energy {
  left: 16%;
  top: 9%;
}

.region-perception {
  right: 15%;
  top: 9%;
}

.region-judgment {
  left: 16%;
  bottom: 30%;
}

.region-rhythm {
  right: 15%;
  bottom: 30%;
}
```

- [ ] **Step 4: Add route surface treatment**

After `.map-node.locked`, add:

```css
.route-energy,
.route-perception,
.route-judgment,
.route-rhythm {
  outline: 1px solid rgba(255, 255, 255, 0.02);
}
```

- [ ] **Step 5: Run checks**

Run:

```powershell
node --check mbti-game.js
npm test
```

Expected: `node --check` has no output and tests pass.

- [ ] **Step 6: Commit style fix**

```powershell
git add mbti-game.js mbti-game.css
git commit -m "style: simplify heart map route labels"
```

## Task 4: Verify And Deploy

**Files:**
- Verify: `mbti-game.js`
- Verify: `mbti-game.css`

- [ ] **Step 1: Local browser verification**

Run local server:

```powershell
python -m http.server 5173 --bind 127.0.0.1
```

Open `http://127.0.0.1:5173/` and verify:

- Map has four separated chapter routes.
- Only active/hover labels appear.
- No dense text pile appears on the map.
- Active node opens the scene.
- Mobile 390x844 has no horizontal overflow.

- [ ] **Step 2: Push and deploy**

Run:

```powershell
git push origin main
npx wrangler pages deploy . --project-name mbti-personality-game
```

Expected: Git push succeeds and Wrangler prints a deployment URL.

- [ ] **Step 3: Production smoke test**

Open `https://mbti-personality-game.pages.dev/` and verify:

- Start opens readable four-route map.
- There are 32 nodes.
- Active node can be opened.
- No console errors.

## Self-Review

- Spec coverage: route layout, hidden labels, spacing tests, local verification, and deployment are covered.
- Scope check: no scoring, story, report, backend, or asset changes.
- Red-flag scan: no vague markers remain.
