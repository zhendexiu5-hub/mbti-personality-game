const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const source = fs.readFileSync("app.js", "utf8");
const sandbox = {
  console,
  navigator: { clipboard: { writeText() {} } },
  localStorage: {
    getItem() {
      return null;
    },
    setItem() {}
  },
  document: {
    getElementById() {
      return { innerHTML: "", textContent: "" };
    },
    querySelector() {
      return null;
    }
  },
  window: {
    setInterval() {
      return 1;
    },
    clearInterval() {}
  }
};

vm.createContext(sandbox);
vm.runInContext(source, sandbox);

function buildAnswers(valueForPole) {
  const answers = {};
  sandbox.mbtiQuestions.forEach((question) => {
    answers[question.id] = valueForPole(question);
  });
  return answers;
}

const estj = sandbox.calculateMbtiResult(buildAnswers((question) => (
  ["E", "S", "T", "J"].includes(question.positivePole) ? 5 : 1
)));
assert.strictEqual(estj.type, "ESTJ");
assert.strictEqual(estj.confidence.every((item) => item.level === "high"), true);

const infp = sandbox.calculateMbtiResult(buildAnswers((question) => (
  ["I", "N", "F", "P"].includes(question.positivePole) ? 5 : 1
)));
assert.strictEqual(infp.type, "INFP");

const balanced = sandbox.calculateMbtiResult(buildAnswers(() => 3));
assert.strictEqual(balanced.confidence.every((item) => item.level === "low"), true);
assert.ok(balanced.confidenceNote.includes("你可能处在"));

assert.deepStrictEqual(Object.keys(estj.report), ["self", "love", "social", "work", "growth"]);
assert.ok(estj.report.love.some((item) => /亲密|喜欢|安全感|边界/.test(item.body)));
assert.ok(estj.report.social.some((item) => /朋友|家庭|社交|相处/.test(item.body)));

console.log("mbti scoring tests passed");
