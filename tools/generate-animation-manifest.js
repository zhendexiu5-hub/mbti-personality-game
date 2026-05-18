const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "mbti-game.js"), "utf8");

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
      return null;
    }
  },
  window: {}
};

vm.createContext(sandbox);
vm.runInContext(source, sandbox);

const manifest = {
  version: 1,
  strategy: "procedural-cinematic-director",
  engine: "html-css-js",
  externalDependencies: [],
  chapters: Object.fromEntries(
    sandbox.heartMapChapters.map((chapter) => {
      const profile = sandbox.cinematicChapterProfiles[chapter.id];
      return [chapter.id, {
        title: chapter.title,
        pair: chapter.pair,
        color: chapter.color,
        mood: profile.mood,
        camera: profile.camera,
        ambience: profile.ambience,
        foreground: profile.foreground,
        asset: sandbox.chapterVisuals[chapter.id].image
      }];
    })
  ),
  scenes: Object.fromEntries(
    sandbox.heartMapScenes.map((scene) => {
      const direction = sandbox.cinematicDirection(scene);
      return [scene.id, {
        title: scene.title,
        chapter: scene.chapter,
        category: scene.category,
        speaker: scene.speaker,
        mood: direction.mood,
        camera: direction.camera,
        ambience: direction.ambience,
        foreground: direction.foreground,
        expression: direction.expression,
        gesture: direction.gesture,
        prop: direction.prop,
        beat: direction.beat,
        choices: Object.fromEntries(scene.choices.map((choice) => {
          const primaryPole = sandbox.primaryChoicePole(choice);
          const profile = sandbox.cinematicPoleProfiles[primaryPole];
          return [choice.id, {
            pole: primaryPole,
            weights: choice.weights || null,
            tone: profile.tone,
            motion: profile.motion,
            label: profile.label
          }];
        }))
      }];
    })
  )
};

const output = path.join(root, "assets", "animation-manifest.json");
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
console.log(`Generated ${path.relative(root, output)}`);
