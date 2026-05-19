# Heart Map Route Layout Fix Design

## Summary

The current heart map uses four overlapping arcs of nodes. With 32 nodes and visible labels, the map becomes crowded and hard to read, especially on the production desktop layout shown by the owner.

This design replaces the crowded star-map scatter with a four-quadrant route map. Each chapter gets a clear 8-node route. The center heart lamp remains as the shared convergence point, while node text is moved out of the dense playfield.

## Problem

The current layout has three root causes:

- Four chapter arcs overlap around the center.
- Many node pairs are too close for a readable 48px control.
- Every node has a visible 92px text label, so labels collide even when the circles are barely separated.

Measured evidence from the current algorithm:

- 32 total nodes.
- 52 node pairs are closer than 12% of the map canvas.
- Some different chapters are only about 3% apart in canvas coordinates.

## Goals

- Make the map immediately readable as a game route map.
- Keep all 32 nodes visible and tappable.
- Preserve four chapter identities.
- Keep the center heart lamp and echo count.
- Avoid always-visible node-title clutter.
- Keep existing scoring, story, report, and local progress behavior unchanged.

## Non-Goals

- No change to the 32 scenes.
- No change to hidden scoring.
- No change to result report logic.
- No new backend, assets, or dependencies.
- No complex zoomable or draggable map in this pass.

## Layout Design

The map becomes a four-quadrant route board:

- Energy Gate: top-left route.
- Perception Forest: top-right route.
- Judgment Bridge: bottom-left route.
- Rhythm City: bottom-right route.

Each chapter displays 8 nodes in a compact route shape. The route is readable as a path, not as a pile of points. Chapter labels sit near their route area, outside the densest node cluster.

The center remains a heart lamp showing the number of collected echoes.

## Node Labels

Default node display:

- Circle shows only the global node number.
- Completed node glows.
- Current node pulses.
- Locked node dims.

Text display:

- Full text is not shown under every node.
- The current node can show a compact label.
- Completed nodes can reveal echo names through hover/focus on desktop.
- Mobile keeps labels hidden and uses the echo panel for text context.

## Technical Design

Update `buildHeartMapNodes()` so node coordinates are generated from chapter route templates instead of a shared arc formula.

Each route template provides eight stable local points. The helper maps chapter-local points into four quadrants. The resulting node positions must satisfy a minimum spacing test so future changes cannot reintroduce the pile-up.

Update CSS:

- Hide node labels by default.
- Show active node label as a small badge.
- Show done node label on hover/focus for desktop users.
- Reposition chapter labels away from node clusters.
- Add route-line styling if it can be done without clutter.

## Testing

Automated tests should verify:

- Still exactly 32 generated map nodes.
- Every node remains inside the visible map bounds.
- No two nodes are closer than the selected minimum distance.
- Every chapter still has 8 nodes.
- Map render still includes 32 `.map-node` elements.

Manual verification should check:

- Desktop map no longer has overlapping node labels.
- Mobile map no longer has overlapping text.
- Active node is visually obvious.
- A locked node is clearly dimmed.
- Clicking the active node still opens the scene.

## Deployment

After implementation:

- Run `npm test`.
- Run `node --check mbti-game.js`.
- Verify local browser layout at desktop and 390x844 mobile.
- Push to GitHub.
- Deploy with `npx wrangler pages deploy . --project-name mbti-personality-game`.
