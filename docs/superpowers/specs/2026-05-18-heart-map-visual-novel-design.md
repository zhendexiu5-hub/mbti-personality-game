# Heart Map Visual Novel Upgrade Design

## Summary

This spec upgrades the current 32-scene personality game into a visual-novel personality journey with a real heart-map exploration layer. The goal is to make the experience feel like a game about self-discovery instead of a long questionnaire.

The selected direction is **visual novel + heart-map exploration**. The game keeps the existing 32 scenes, three narrative choices per scene, hidden scoring, local progress, and static Cloudflare Pages deployment. The upgrade adds a dedicated map screen, echo fragments from choices, chapter summaries, stronger result evidence, and mobile-first game polish.

## Product Goals

- Make the game feel like an inner journey, not a test form.
- Preserve MBTI-style personality exploration without implying right or wrong answers.
- Keep the first implementation small enough to test and deploy safely.
- Improve the final report with visible evidence from the player's own choices.
- Keep production work inside `release/mbti-personality-game`.

## Non-Goals

- No complex branching story graph in this phase.
- No login, cloud save, ranking, paid report, or backend question management.
- No large chapter expansion beyond the current 32 scenes.
- No visible E/I, S/N, T/F, or J/P labels during the choice process.

## Core Experience

The player enters a heart map divided into four regions:

- Energy Gate: energy and social approach patterns.
- Perception Forest: factual signals and hidden meaning.
- Judgment Bridge: problem solving and emotional care.
- Rhythm City: structure, flexibility, and life rhythm.

Each region has 8 narrative nodes. A node is a short visual-novel moment:

1. The node opens with a background, guide character, and event object.
2. One compact scene conflict appears.
3. The player chooses one of three short action options.
4. A choice echo appears through visual feedback and text.
5. The map node lights up and an echo fragment is saved.

The player should feel they are walking through their inner map, leaving traces that later explain the result.

## Page States

### Intro

The intro remains a game title screen. It shows the world mood, current progress, and clear actions to continue or restart. It should not read like a marketing page or explanatory quiz landing page.

### Heart Map

The new map page becomes the structural center of the game. It shows four regions and 32 generated nodes. Node states:

- Completed nodes glow.
- Current node pulses.
- Unlocked but unanswered nodes are visible.
- Locked nodes are dim.

Players can open unlocked nodes from the map. Completed nodes can be revisited and changed, with scoring and echo fragments updated accordingly.

### Scene

The scene page keeps the visual-novel stage. The existing "journey" control becomes a return-to-map action. Fixed explanatory text should stay minimal. The scene focuses on image, guide, conflict, three actions, and immediate feedback.

### Chapter Summary

When a region is completed, the player sees a short chapter summary before continuing. It lists the strongest echo fragments from that region and gives one short emotional interpretation without exposing personality letters.

### Result

The result page starts with a heart-map convergence moment: four regions gather into a final profile. It then shows:

- Four-letter type.
- One-sentence core portrait.
- Dimension strengths: clear, mild, or balanced.
- Echo evidence from the player's choices.
- Expandable report sections.

Report sections:

- Self-understanding.
- Emotional relationships.
- Social interaction.
- Work style.
- Growth practices.

## Data Design

The current `heartMapScenes` remains the main source of truth. The implementation should add or derive:

- Map metadata: region, node index, coordinate, state, and display label.
- Echo fragment: name, short evidence text, chapter, category, and optional strength.
- Chapter completion summary: strongest echoes and a short interpretation.
- Result strength: per-dimension score difference translated into clear, mild, or balanced.

Progress remains in `localStorage`. The saved record should continue to include screen, current scene, answers, and result. It should also include echo fragments or enough answer data to regenerate them deterministically.

## Scoring and Trust Boundary

Scoring stays hidden during play. Choice labels must remain narrative and should not reveal MBTI poles. The result can show the final four-letter type, but the copy should frame it as a self-reflection profile rather than a clinical or official assessment.

Balanced dimensions should be treated as useful information. If a dimension is close, the report should say the player moves flexibly between both patterns instead of forcing a strong label.

## UI Direction

The map should use a 2D star-map or heart-map style. It should not become a complex 3D scene. The center can be the player's heart lamp, with four regions around it and connected glowing nodes.

The mobile layout is primary. Text must stay compact and cannot overlap fixed controls. Buttons should keep short action labels. The map must be usable on a phone without tiny tap targets.

## Testing

Automated tests should cover:

- 32 scenes remain present.
- Four chapters still contain 8 scenes each.
- Every scene has 3 choices.
- Third choices use hidden weighted scoring.
- Map node states respect answer and unlock status.
- Opening locked scenes is blocked.
- Echo fragments are generated or regenerated for answered scenes.
- Result reports include all required sections.
- Balanced dimension wording appears when scores are close.

Manual verification should include:

- Desktop local run.
- Mobile-width local run.
- Intro to map to scene to chapter summary to result flow.
- Revisit completed node and confirm progress/report update.
- Production Cloudflare Pages smoke check after deployment.

## Deployment

Production work should happen in `release/mbti-personality-game`. Expected commands:

```powershell
npm test
node --check mbti-game.js
npm run deploy
```

The repository should be committed and pushed before deploying, unless the owner explicitly asks for a local-only prototype.

## Open Follow-Up Phases

After this phase is complete, the next useful phases are:

- Richer report calibration and share card.
- Optional audio and stronger transitions.
- Anonymous completion analytics.
- True branching interludes or hidden echo events.
- Larger content expansion beyond 32 scenes.
