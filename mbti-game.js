var heartMapChapters = [
  { id: "energy", title: "能量之门", pair: "E / I", theme: "靠近世界的方式", color: "#ff6b3d" },
  { id: "perception", title: "感知森林", pair: "S / N", theme: "理解信号的方式", color: "#1f9f84" },
  { id: "judgment", title: "判断天平", pair: "T / F", theme: "做出选择的方式", color: "#4f6fb7" },
  { id: "rhythm", title: "生活节奏城", pair: "J / P", theme: "安排生活的方式", color: "#d49a23" }
];

var heartMapScenes = [
  {
    id: "s01",
    chapter: "energy",
    category: "情感关系",
    tag: "序章",
    img: "./assets/energy-gate.svg",
    fallback: "linear-gradient(to bottom, #451a03, #020617)",
    icon: "🏮",
    speaker: "酒馆老板",
    glow: "rgba(251,146,60,0.8)",
    title: "暴雪酒馆",
    prompt: "“外面的暴风雪可真够猛的，陌生人。今晚你打算在我的酒馆里怎么打发时间？”",
    choices: [
      { id: "a", text: "端起麦酒，挤进最热闹的人群里打听前线的战况。", pole: "E", note: "你在喧闹和回应里被点亮。" },
      { id: "b", text: "丢下一枚银币，走向最昏暗的角落，独自擦拭武器。", pole: "I", note: "你在安静角落里重新找回力量。" }
    ]
  },
  {
    id: "s02",
    chapter: "energy",
    category: "人际相处",
    tag: "第Ⅰ章",
    img: "./assets/energy-gate.svg",
    fallback: "linear-gradient(to bottom, #451a03, #020617)",
    icon: "🏕️",
    speaker: "游侠斥候",
    glow: "rgba(96,165,250,0.8)",
    title: "营地篝火",
    prompt: "“队长，我们在森林里扎营了。篝火燃起来了，大家都看着你呢。”",
    choices: [
      { id: "a", text: "走到火堆中央，大声分享过去的冒险故事，鼓舞士气。", pole: "E", note: "你会用表达让队伍升温。" },
      { id: "b", text: "坐在火光照不到的边缘，安静地倾听他们的谈话。", pole: "I", note: "你会先保存能量，观察每个人。" }
    ]
  },
  {
    id: "s03",
    chapter: "energy",
    category: "职业工作",
    tag: "第Ⅱ章",
    img: "./assets/energy-gate.svg",
    fallback: "linear-gradient(to bottom, #451a03, #020617)",
    icon: "👑",
    speaker: "宫廷执事",
    glow: "rgba(192,132,252,0.8)",
    title: "千人盛宴",
    prompt: "“恭喜您受邀参加国王陛下的千人盛宴。大门已经为您敞开。”",
    choices: [
      { id: "a", text: "太棒了！这是结交各路权贵和新盟友的绝佳猎场。", pole: "E", note: "你会把陌生场合变成机会场。" },
      { id: "b", text: "真麻烦……我只打算和同行的几个老友喝杯酒就溜走。", pole: "I", note: "你更愿意把能量留给熟悉的人。" }
    ]
  },
  {
    id: "s04",
    chapter: "energy",
    category: "情绪成长",
    tag: "第Ⅲ章",
    img: "./assets/energy-gate.svg",
    fallback: "linear-gradient(to bottom, #451a03, #020617)",
    icon: "🛡️",
    speaker: "远征军号手",
    glow: "rgba(251,146,60,0.8)",
    title: "破晓集结",
    prompt: "黎明前的城门口，远征队即将出发。号手问你：“你要如何让自己进入状态？”",
    choices: [
      { id: "a", text: "召集伙伴，互相拍肩打气，让队伍的热度把你带起来。", pole: "E", note: "你通过集体回应恢复勇气。" },
      { id: "b", text: "独自检查装备，在安静里把心跳调回稳定。", pole: "I", note: "你通过独处整理自己的节奏。" }
    ]
  },
  {
    id: "s05",
    chapter: "perception",
    category: "情感关系",
    tag: "第Ⅳ章",
    img: "./assets/perception-forest.svg",
    fallback: "linear-gradient(to bottom, #064e3b, #020617)",
    icon: "🗿",
    speaker: "遗迹石碑",
    glow: "rgba(52,211,153,0.8)",
    title: "青苔壁画",
    prompt: "你在废墟中发现了一面布满青苔的壁画。你的目光首先落在了哪里？",
    choices: [
      { id: "a", text: "壁画的雕刻材质、风化程度，以及画中战士使用的具体武器。", pole: "S", note: "你先抓住可见线索和真实细节。" },
      { id: "b", text: "壁画背后隐藏的神话隐喻，以及它可能预示的某种未来。", pole: "N", note: "你会先寻找图像背后的意义。" }
    ]
  },
  {
    id: "s06",
    chapter: "perception",
    category: "人际相处",
    tag: "第Ⅴ章",
    img: "./assets/perception-forest.svg",
    fallback: "linear-gradient(to bottom, #064e3b, #020617)",
    icon: "🕯️",
    speaker: "内心独白",
    glow: "rgba(148,163,184,0.8)",
    title: "迷宫岔路",
    prompt: "地下城迷宫出现了岔路，火把即将熄灭。你决定前进方向的依据是：",
    choices: [
      { id: "a", text: "蹲下观察地上的脚印、墙壁的湿度和微弱的气流走向。", pole: "S", note: "你相信现场证据会给出方向。" },
      { id: "b", text: "闭上眼睛，感受空间中魔力的流动，相信直觉的指引。", pole: "N", note: "你相信不可见的模式正在说话。" }
    ]
  },
  {
    id: "s07",
    chapter: "perception",
    category: "职业工作",
    tag: "第Ⅵ章",
    img: "./assets/perception-forest.svg",
    fallback: "linear-gradient(to bottom, #064e3b, #020617)",
    icon: "🔮",
    speaker: "盲眼先知",
    glow: "rgba(129,140,248,0.8)",
    title: "地图与箴言",
    prompt: "“勇者啊，临行前，你要精确的地图，还是要命运的箴言？”",
    choices: [
      { id: "a", text: "“地图。告诉我敌人的数量、陷阱的位置和宝藏的坐标。”", pole: "S", note: "你需要清晰坐标与可执行信息。" },
      { id: "b", text: "“箴言。隐喻往往比枯燥的数据包含更深刻的真理。”", pole: "N", note: "你愿意从象征里读出未来。" }
    ]
  },
  {
    id: "s08",
    chapter: "perception",
    category: "情绪成长",
    tag: "第Ⅶ章",
    img: "./assets/perception-forest.svg",
    fallback: "linear-gradient(to bottom, #064e3b, #020617)",
    icon: "🧭",
    speaker: "迷雾回声",
    glow: "rgba(52,211,153,0.8)",
    title: "雾中低语",
    prompt: "一封没有署名的信从树影里飘来，字迹残缺，只剩下几个模糊的警告。",
    choices: [
      { id: "a", text: "收集纸张、墨迹和风向，先确认这封信到底从哪里来。", pole: "S", note: "你会先把不安落到证据上。" },
      { id: "b", text: "把残缺词句连成预兆，判断它背后真正想提醒什么。", pole: "N", note: "你会追问碎片背后的整体含义。" }
    ]
  },
  {
    id: "s09",
    chapter: "judgment",
    category: "情感关系",
    tag: "第Ⅷ章",
    img: "./assets/judgment-scale.svg",
    fallback: "linear-gradient(to bottom, #172554, #020617)",
    icon: "⚔️",
    speaker: "受伤的同伴",
    glow: "rgba(34,211,238,0.8)",
    title: "撤离抉择",
    prompt: "“别管我了队长……带着我，我们都会被半兽人追上杀死的……”",
    choices: [
      { id: "a", text: "咬紧牙关，留下药剂让他隐蔽，带领大部队撤离。", pole: "T", note: "你会先计算整体存活的概率。" },
      { id: "b", text: "拔出武器：“绝不抛弃任何人！”宁可增加风险也要带上他。", pole: "F", note: "你把关系承诺放在冷酷计算之前。" }
    ]
  },
  {
    id: "s10",
    chapter: "judgment",
    category: "人际相处",
    tag: "第Ⅸ章",
    img: "./assets/judgment-scale.svg",
    fallback: "linear-gradient(to bottom, #172554, #020617)",
    icon: "⚖️",
    speaker: "治安官",
    glow: "rgba(251,113,133,0.8)",
    title: "圣水判决",
    prompt: "“这孩子偷了神殿的圣水是为了救他濒死的母亲。大人，您要如何判决？”",
    choices: [
      { id: "a", text: "“律法就是律法。同情不能破坏秩序，必须施以盗窃的惩罚。”", pole: "T", note: "你会先维护规则的稳定。" },
      { id: "b", text: "“法理不外乎人情。我会免除惩罚，并帮他寻找其他救助。”", pole: "F", note: "你会先看见人的处境。" }
    ]
  },
  {
    id: "s11",
    chapter: "judgment",
    category: "职业工作",
    tag: "第Ⅹ章",
    img: "./assets/judgment-scale.svg",
    fallback: "linear-gradient(to bottom, #172554, #020617)",
    icon: "📜",
    speaker: "公会使者",
    glow: "rgba(251,191,36,0.8)",
    title: "矿脉仲裁",
    prompt: "“两大公会正在为矿脉归属争吵不休。您作为仲裁者，首要原则是？”",
    choices: [
      { id: "a", text: "契约精神！必须保证利益分配的绝对公平和效率最大化。", pole: "T", note: "你把清晰、公平和效率放在前面。" },
      { id: "b", text: "和谐至上！必须修补双方的关系，确保没有人感到被侮辱。", pole: "F", note: "你把关系修复看作真正的解决。" }
    ]
  },
  {
    id: "s12",
    chapter: "judgment",
    category: "情绪成长",
    tag: "第Ⅺ章",
    img: "./assets/judgment-scale.svg",
    fallback: "linear-gradient(to bottom, #172554, #020617)",
    icon: "🕳️",
    speaker: "审判回声",
    glow: "rgba(34,211,238,0.8)",
    title: "俘虏的情报",
    prompt: "敌方俘虏掌握着关键情报，却声称自己只是被胁迫参战。队伍等待你的决定。",
    choices: [
      { id: "a", text: "按军规审问，先确认情报价值和风险，不让情绪干扰判断。", pole: "T", note: "你会先建立可执行的判断标准。" },
      { id: "b", text: "先确认他是否还有选择余地，再决定如何处理这份情报。", pole: "F", note: "你会把人的处境纳入判断。" }
    ]
  },
  {
    id: "s13",
    chapter: "rhythm",
    category: "情感关系",
    tag: "第Ⅻ章",
    img: "./assets/rhythm-city.svg",
    fallback: "linear-gradient(to bottom, #78350f, #020617)",
    icon: "🎒",
    speaker: "后勤军需官",
    glow: "rgba(45,212,191,0.8)",
    title: "巨龙巢穴前夜",
    prompt: "“明天就要前往巨龙巢穴了。大人，今晚有什么吩咐？”",
    choices: [
      { id: "a", text: "“核对物资清单，确认撤退路线，制定好 A、B、C 三套预案。”", pole: "J", note: "你从计划和预案里获得掌控感。" },
      { id: "b", text: "“带上足够的恢复药水就行。到了现场再看那头龙喜欢什么招数。”", pole: "P", note: "你愿意把空间留给现场变化。" }
    ]
  },
  {
    id: "s14",
    chapter: "rhythm",
    category: "人际相处",
    tag: "第ⅩⅢ章",
    img: "./assets/rhythm-city.svg",
    fallback: "linear-gradient(to bottom, #78350f, #020617)",
    icon: "🦋",
    speaker: "系统提示",
    glow: "rgba(163,230,53,0.8)",
    title: "幻影妖精",
    prompt: "在执行紧急暗杀任务途中，你瞥见了一只传说中能带来奇遇的幻影妖精。",
    choices: [
      { id: "a", text: "无视它。任务为重，绝对不能偏离既定计划和路线。", pole: "J", note: "你会优先守住既定路线。" },
      { id: "b", text: "立刻改变路线追上去！计划外的惊喜才是冒险的精华。", pole: "P", note: "你会为未知可能改道。" }
    ]
  },
  {
    id: "s15",
    chapter: "rhythm",
    category: "职业工作",
    tag: "第ⅩⅣ章",
    img: "./assets/rhythm-city.svg",
    fallback: "linear-gradient(to bottom, #78350f, #020617)",
    icon: "🧱",
    speaker: "造桥工匠",
    glow: "rgba(251,191,36,0.8)",
    title: "未完成的桥",
    prompt: "通往王城的桥只差最后三块石板。此时，一条更短但没有验证过的小路忽然显现。",
    choices: [
      { id: "a", text: "继续铺完原桥，先让队伍拥有一条确定能走的路。", pole: "J", note: "你重视完成闭环后的安全感。" },
      { id: "b", text: "派人试探新路，如果它更快，就立刻调整路线。", pole: "P", note: "你愿意为更好可能保留弹性。" }
    ]
  },
  {
    id: "s16",
    chapter: "rhythm",
    category: "情绪成长",
    tag: "终章",
    img: "./assets/rhythm-city.svg",
    fallback: "linear-gradient(to bottom, #78350f, #020617)",
    icon: "🌌",
    speaker: "时间之神",
    glow: "rgba(255,255,255,0.9)",
    title: "旅途尽头",
    prompt: "“凡人，当你走到旅途的尽头，你认为冒险最大的意义是什么？”",
    choices: [
      { id: "a", text: "“是将混乱终结，建立起坚不可摧的秩序，达成我既定的宏愿。”", pole: "J", note: "你会把旅途收束成清晰目标。" },
      { id: "b", text: "“是体验无限的可能，在未知的变化中感受自由的脉动。”", pole: "P", note: "你会把旅途看作不断展开的可能。" }
    ]
  }
];

var heartMapActions = {
  s01: { a: "赴约", b: "改期", c: "试聊" },
  s02: { a: "破冰", b: "观察", c: "小聊" },
  s03: { a: "同步", b: "整理", c: "试发" },
  s04: { a: "倾诉", b: "静音", c: "缓回" },
  s05: { a: "看事实", b: "问情绪", c: "读信号" },
  s06: { a: "追线索", b: "想转折", c: "直接问" },
  s07: { a: "列边界", b: "画大图", c: "找案例" },
  s08: { a: "拆事实", b: "问触点", c: "去散步" },
  s09: { a: "讲清楚", b: "先接住", c: "暂停" },
  s10: { a: "判紧急", b: "调整", c: "折中" },
  s11: { a: "指出", b: "铺垫", c: "列问题" },
  s12: { a: "复盘", b: "允许", c: "宽待" },
  s13: { a: "要安排", b: "随当下", c: "提前说" },
  s14: { a: "排日程", b: "看状态", c: "只选一场" },
  s15: { a: "收尾", b: "改道", c: "小实验" },
  s16: { a: "7 天计划", b: "试方向", c: "先整理" }
};

var chapterMarks = {
  energy: "火",
  perception: "林",
  judgment: "秤",
  rhythm: "城"
};

var chapterVisuals = {
  energy: {
    label: "CHAPTER 01",
    seal: "✦",
    speaker: "镜灯",
    image: "./assets/energy-gate.svg",
    fallback: "linear-gradient(180deg, #431407 0%, #0f172a 56%, #020617 100%)",
    glow: "rgba(251, 146, 60, 0.72)"
  },
  perception: {
    label: "CHAPTER 02",
    seal: "◇",
    speaker: "林间回声",
    image: "./assets/perception-forest.svg",
    fallback: "linear-gradient(180deg, #064e3b 0%, #0f172a 58%, #020617 100%)",
    glow: "rgba(52, 211, 153, 0.66)"
  },
  judgment: {
    label: "CHAPTER 03",
    seal: "△",
    speaker: "天平守卫",
    image: "./assets/judgment-scale.svg",
    fallback: "linear-gradient(180deg, #1e3a8a 0%, #111827 58%, #020617 100%)",
    glow: "rgba(96, 165, 250, 0.7)"
  },
  rhythm: {
    label: "CHAPTER 04",
    seal: "◎",
    speaker: "时间之门",
    image: "./assets/rhythm-city.svg",
    fallback: "linear-gradient(180deg, #78350f 0%, #172554 58%, #020617 100%)",
    glow: "rgba(251, 191, 36, 0.72)"
  }
};

var categoryVisuals = {
  "情感关系": { icon: "☾", cue: "关系影子在远处亮起。" },
  "人际相处": { icon: "✦", cue: "几道剪影围成未完成的圆。" },
  "职业工作": { icon: "▣", cue: "草稿、路牌和任务光点浮现。" },
  "情绪成长": { icon: "◌", cue: "内心的灯在暗处呼吸。" }
};

var cinematicChapterProfiles = {
  energy: {
    mood: "ember",
    camera: "push",
    ambience: "snow",
    foreground: "lanterns",
    guideTone: "warm",
    mantra: "火光会替你照出靠近世界的方式。"
  },
  perception: {
    mood: "mist",
    camera: "drift",
    ambience: "spores",
    foreground: "branches",
    guideTone: "quiet",
    mantra: "雾不会给答案，只会让真正的线索发亮。"
  },
  judgment: {
    mood: "steel",
    camera: "tilt",
    ambience: "sparks",
    foreground: "chains",
    guideTone: "clear",
    mantra: "每一次判断，都会让天平记住你的重量。"
  },
  rhythm: {
    mood: "gold",
    camera: "orbit",
    ambience: "stars",
    foreground: "gears",
    guideTone: "bright",
    mantra: "旅途走到这里，时间开始显露形状。"
  }
};

var cinematicCategoryProfiles = {
  "情感关系": { expression: "soft", gesture: "open", prop: "moon", beat: "bond" },
  "人际相处": { expression: "watch", gesture: "listen", prop: "circle", beat: "crowd" },
  "职业工作": { expression: "focus", gesture: "point", prop: "route", beat: "task" },
  "情绪成长": { expression: "inner", gesture: "hold", prop: "spark", beat: "growth" }
};

var cinematicPoleProfiles = {
  E: { tone: "flare", label: "向外点燃", motion: "step-forward" },
  I: { tone: "dusk", label: "向内回收", motion: "step-back" },
  S: { tone: "detail", label: "拾取线索", motion: "inspect" },
  N: { tone: "vision", label: "看见隐喻", motion: "dream" },
  T: { tone: "edge", label: "校准原则", motion: "measure" },
  F: { tone: "heart", label: "接住关系", motion: "reach" },
  J: { tone: "order", label: "收束路径", motion: "lock" },
  P: { tone: "wild", label: "保留变化", motion: "swerve" }
};

var poleMeta = {
  E: { pair: "EI", name: "外向能量", text: "你在互动和回应中更容易被点亮。" },
  I: { pair: "EI", name: "内向能量", text: "你在安静和深度整理中更容易恢复。" },
  S: { pair: "SN", name: "现实感知", text: "你会先抓事实、细节和可落地路径。" },
  N: { pair: "SN", name: "直觉想象", text: "你会先看模式、意义和未来可能。" },
  T: { pair: "TF", name: "逻辑判断", text: "你重视原则、因果和问题被解决。" },
  F: { pair: "TF", name: "价值判断", text: "你重视感受、关系和选择背后的意义。" },
  J: { pair: "JP", name: "计划结构", text: "你从计划、边界和确定感里获得安全。" },
  P: { pair: "JP", name: "弹性探索", text: "你从余地、试探和变化中找到活力。" }
};

var heartTypeProfiles = {
  ISTJ: "稳稳守住承诺和现实边界的人",
  ISFJ: "细腻照顾关系也照顾秩序的人",
  INFJ: "在意义和亲密深处寻找方向的人",
  INTJ: "把内在愿景整理成长期路径的人",
  ISTP: "冷静观察并用行动试出答案的人",
  ISFP: "用真实感受和柔软边界生活的人",
  INFP: "沿着价值感寻找亲密与自我的人",
  INTP: "在理解世界时也理解自己的人",
  ESTP: "在真实现场里确认热情和选择的人",
  ESFP: "用体验、表达和温度靠近世界的人",
  ENFP: "被可能性、关系和新故事点亮的人",
  ENTP: "用碰撞和探索打开人生分支的人",
  ESTJ: "用责任、秩序和行动照顾生活的人",
  ESFJ: "在关系回应中建立安全和归属的人",
  ENFJ: "擅长看见他人潜力并带动关系成长的人",
  ENTJ: "用清晰目标和判断力推动人生展开的人"
};

var savedHeartMap = JSON.parse(localStorage.getItem("heartMapProgress") || "{}");
var gameState = {
  screen: savedHeartMap.screen || "intro",
  currentScene: savedHeartMap.currentScene || "s01",
  answers: savedHeartMap.answers || {},
  result: savedHeartMap.result || null,
  lastChoice: null,
  toast: ""
};

function saveHeartMap() {
  localStorage.setItem("heartMapProgress", JSON.stringify({
    screen: gameState.screen,
    currentScene: gameState.currentScene,
    answers: gameState.answers,
    result: gameState.result
  }));
}

function firstUnfinishedScene(answers) {
  return heartMapScenes.find((scene) => !answers[scene.id]) || null;
}

function sceneIndex(sceneId) {
  return heartMapScenes.findIndex((scene) => scene.id === sceneId);
}

function currentHeartScene() {
  return heartMapScenes[sceneIndex(gameState.currentScene)] || heartMapScenes[0];
}

function choiceAction(scene, choice) {
  return heartMapActions[scene.id]?.[choice.id] || choice.text.replace(/[。！？；;]+$/g, "");
}

function compactNote(note) {
  return note.replace(/^你/, "").replace(/[。！？；;]+$/g, "");
}

function sceneVisual(scene) {
  const chapter = chapterVisuals[scene.chapter];
  const category = categoryVisuals[scene.category];
  return {
    ...chapter,
    ...category,
    label: scene.tag || chapter.label,
    speaker: scene.speaker || chapter.speaker,
    image: scene.img || chapter.image,
    fallback: scene.fallback || chapter.fallback,
    icon: scene.icon || category.icon,
    glow: scene.glow || chapter.glow
  };
}

function sceneVisualClass(scene) {
  return `${scene.chapter} ${scene.category === "情感关系" ? "love" : scene.category === "人际相处" ? "social" : scene.category === "职业工作" ? "work" : "growth"}`;
}

function renderSceneVisual(scene, chapter, index) {
  return `
    <div class="scene-visual ${sceneVisualClass(scene)}" style="--chapter:${chapter.color}">
      <div class="visual-sky">
        <span></span><span></span><span></span>
      </div>
      <div class="visual-gate">
        <i></i><i></i><i></i>
      </div>
      <div class="visual-path">
        ${Array.from({ length: 6 }, (_, step) => `<b class="${step <= index % 6 ? "lit" : ""}"></b>`).join("")}
      </div>
      <div class="visual-actors">
        <span class="actor hero"><i></i></span>
        <span class="actor other"><i></i></span>
        <span class="actor small"><i></i></span>
      </div>
      <div class="visual-prop">
        <i></i><b></b><em></em>
      </div>
    </div>
  `;
}

function cinematicDirection(scene) {
  const index = sceneIndex(scene.id);
  const chapter = cinematicChapterProfiles[scene.chapter];
  const category = cinematicCategoryProfiles[scene.category];
  const firstPole = scene.choices[0]?.pole || "E";
  const secondPole = scene.choices[1]?.pole || "I";
  return {
    ...chapter,
    ...category,
    index,
    firstPole,
    secondPole,
    chapterKey: scene.chapter,
    categoryKey: scene.category,
    pulse: index % 4,
    guideName: scene.speaker,
    beatLine: `${category.beat.toUpperCase()} · ${chapter.mantra}`
  };
}

function renderParticleField(direction) {
  return `
    <div class="particle-field ambience-${direction.ambience}" aria-hidden="true">
      ${Array.from({ length: 24 }, (_, item) => `<i style="--i:${item}; --delay:${(item % 8) * -0.6}s"></i>`).join("")}
    </div>
  `;
}

function renderCinematicStage(scene, visual, selected) {
  const direction = cinematicDirection(scene);
  const selectedChoice = scene.choices.find((choice) => choice.id === selected);
  const selectedPole = selectedChoice?.pole || direction.firstPole;
  const poleProfile = cinematicPoleProfiles[selectedPole] || cinematicPoleProfiles.E;
  return `
    <div class="cinematic-stage mood-${direction.mood} camera-${direction.camera} foreground-${direction.foreground} expression-${direction.expression} ${selected ? `choice-${poleProfile.tone}` : ""}" style="--chapter:${visual.glow}">
      <div class="parallax-plane plane-back"></div>
      <div class="parallax-plane plane-mid"></div>
      <div class="parallax-plane plane-front"></div>
      ${renderParticleField(direction)}
      <div class="scene-architecture scene-${direction.chapterKey}">
        <i></i><i></i><i></i><b></b><b></b>
      </div>
      <div class="cinematic-guide gesture-${direction.gesture} motion-${poleProfile.motion}" aria-label="${direction.guideName}">
        <div class="guide-aura"></div>
        <div class="guide-body">
          <span class="guide-head"><i></i><b></b><em></em></span>
          <span class="guide-torso"></span>
          <span class="guide-hand left"></span>
          <span class="guide-hand right"></span>
        </div>
        <div class="guide-name">${direction.guideName}</div>
      </div>
      <div class="scene-oracle prop-${direction.prop}">
        <span>${visual.icon}</span>
        <b>${chapterMarks[scene.chapter]}</b>
      </div>
      <div class="cinematic-caption">
        <span>${direction.beatLine}</span>
        <strong>${selected ? poleProfile.label : "等待你的行动"}</strong>
      </div>
    </div>
  `;
}

function renderChoiceEcho() {
  if (!gameState.lastChoice) return "";
  const poleProfile = cinematicPoleProfiles[gameState.lastChoice.pole] || cinematicPoleProfiles.E;
  return `
    <div class="choice-echo echo-${poleProfile.tone}">
      <i>${gameState.lastChoice.pole}</i>
      <strong>${poleProfile.label}</strong>
      <span>${compactNote(gameState.lastChoice.note)}</span>
    </div>
  `;
}

function renderIntroCinematic() {
  return `
    <div class="intro-cinematic" aria-hidden="true">
      <div class="intro-rings"><i></i><i></i><i></i></div>
      <div class="intro-gates">
        ${heartMapChapters.map((chapter, index) => `<span style="--chapter:${chapter.color}; --i:${index}">${chapterMarks[chapter.id]}</span>`).join("")}
      </div>
      ${renderParticleField({ ambience: "stars" })}
    </div>
  `;
}

function renderResultConstellation(result) {
  const letters = result.type.split("");
  return `
    <div class="result-constellation" aria-hidden="true">
      <div class="result-ring"></div>
      ${letters.map((letter, index) => `
        <span class="result-star star-${index}" style="--i:${index}">
          <b>${letter}</b>
          <i>${poleMeta[letter].name}</i>
        </span>
      `).join("")}
    </div>
  `;
}

function answerHeartScene(choiceId) {
  const scene = currentHeartScene();
  const choice = scene.choices.find((item) => item.id === choiceId);
  gameState.answers[scene.id] = choiceId;
  if (choice) {
    gameState.lastChoice = {
      sceneId: scene.id,
      title: scene.title,
      choiceId: choice.id,
      pole: choice.pole,
      note: choice.note
    };
  }
  const nextScene = heartMapScenes[sceneIndex(scene.id) + 1];
  if (nextScene) {
    gameState.currentScene = nextScene.id;
  }
  saveHeartMap();
  renderHeartGame();
}

function startHeartMap() {
  gameState.screen = "play";
  gameState.currentScene = firstUnfinishedScene(gameState.answers)?.id || "s01";
  gameState.lastChoice = null;
  saveHeartMap();
  renderHeartGame();
}

function openHeartScene(sceneId) {
  const targetIndex = sceneIndex(sceneId);
  const unlocked = targetIndex === 0 || Boolean(gameState.answers[heartMapScenes[targetIndex - 1].id]);
  if (!unlocked) {
    showHeartToast("先走完前一个心境事件。");
    return;
  }
  gameState.screen = "play";
  gameState.currentScene = sceneId;
  gameState.lastChoice = null;
  saveHeartMap();
  renderHeartGame();
}

function finishHeartMap() {
  const missing = firstUnfinishedScene(gameState.answers);
  if (missing) {
    gameState.screen = "play";
    gameState.currentScene = missing.id;
    saveHeartMap();
    showHeartToast(`还差「${missing.title}」这段心境。`);
    renderHeartGame();
    return;
  }
  gameState.result = calculateHeartMapResult(gameState.answers);
  gameState.screen = "result";
  saveHeartMap();
  renderHeartGame();
}

function resetHeartMap() {
  gameState.screen = "intro";
  gameState.currentScene = "s01";
  gameState.answers = {};
  gameState.result = null;
  gameState.lastChoice = null;
  localStorage.removeItem("heartMapProgress");
  renderHeartGame();
}

function calculateHeartMapResult(answers) {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  const notes = [];
  heartMapScenes.forEach((scene) => {
    const choice = scene.choices.find((item) => item.id === answers[scene.id]);
    if (!choice) return;
    scores[choice.pole] += 1;
    notes.push({ scene: scene.title, category: scene.category, pole: choice.pole, note: choice.note });
  });
  const type = [
    scores.E >= scores.I ? "E" : "I",
    scores.S >= scores.N ? "S" : "N",
    scores.T >= scores.F ? "T" : "F",
    scores.J >= scores.P ? "J" : "P"
  ].join("");
  const result = { type, scores, notes, profile: heartTypeProfiles[type] };
  result.report = buildHeartMapReport(result);
  return result;
}

function buildHeartMapReport(result) {
  const letters = result.type.split("");
  const strongest = letters.map((letter) => poleMeta[letter]);
  const loveNotes = result.notes.filter((item) => item.category === "情感关系").map((item) => item.note);
  const growthNotes = result.notes.filter((item) => item.category === "情绪成长").map((item) => item.note);
  return {
    journey: `你走完了一张心境地图，最终呈现为 ${result.type}：${result.profile}。${strongest.map((item) => item.text).join("")}`,
    love: `在情感和亲密关系里，${formatHeartNotes(loveNotes)}。这不是给你贴标签，而是提醒你：喜欢、边界和安全感需要同时被看见。`,
    social: `在人际相处中，你的选择显示出一种稳定模式：先保护真实节奏，再决定靠近方式。朋友、家庭和社交场合都适合用更清楚的话表达边界。`,
    work: `在职业或任务情境里，这张地图只给轻量参考：把工作当成能量管理的一部分，不把人格结果变成固定职业模板。`,
    growth: `情绪成长线索：${formatHeartNotes(growthNotes)}。接下来 7 天可以记录“让我靠近的事”和“让我后退的事”，找到真正适合你的恢复方式。`
  };
}

function formatHeartNotes(notes) {
  return notes.map((note) => note.replace(/[。！？；;]+$/g, "")).join("；");
}

function showHeartToast(message) {
  gameState.toast = message;
  renderHeartToast();
  window.setTimeout(() => {
    gameState.toast = "";
    renderHeartToast();
  }, 1800);
}

function renderHeartGame() {
  const mount = document.getElementById("game");
  if (!mount) return;
  mount.innerHTML = `
    <section class="heart-shell ${gameState.screen} ${gameState.lastChoice ? `has-choice-echo echo-${gameState.lastChoice.pole.toLowerCase()}` : ""}">
      <aside class="heart-sidebar">
        <div class="heart-brand">
          <button class="heart-mark" onclick="gameState.screen='intro'; renderHeartGame()" aria-label="返回起点">心</button>
          <div>
            <h1>心境地图</h1>
            <p>${gameState.screen === "result" ? "心型已生成" : "16 格探索"}</p>
          </div>
        </div>
        ${renderHeartStats()}
        ${renderHeartMap()}
        <div class="side-actions">
          <button onclick="resetHeartMap()">重开</button>
          <button onclick="finishHeartMap()">结算</button>
        </div>
      </aside>
      <section class="heart-stage">
        ${gameState.screen === "intro" ? renderHeartIntro() : gameState.screen === "result" ? renderHeartResult() : renderHeartPlay()}
      </section>
      <div class="overlay-grain"></div>
    </section>
    <div id="heartToast"></div>
  `;
  renderHeartToast();
}

function renderHeartStats() {
  const done = Object.keys(gameState.answers).length;
  const percent = Math.round((done / heartMapScenes.length) * 100);
  return `
    <div class="heart-stats">
      <div><strong>${done}/${heartMapScenes.length}</strong><span>进度</span></div>
      <div><strong>${percent}%</strong><span>地图点亮</span></div>
    </div>
  `;
}

function renderHeartMap() {
  return `
    <div class="heart-map">
      ${heartMapChapters.map((chapter) => {
        const scenes = heartMapScenes.filter((scene) => scene.chapter === chapter.id);
        const doneCount = scenes.filter((scene) => gameState.answers[scene.id]).length;
        return `
          <section class="heart-chapter" style="--chapter:${chapter.color}">
            <div class="chapter-label">
              <i>${chapterMarks[chapter.id]}</i>
              <strong>${chapter.title}</strong>
              <span>${doneCount}/4</span>
            </div>
            <div class="heart-nodes">
              ${scenes.map((scene) => {
                const index = sceneIndex(scene.id);
                const done = Boolean(gameState.answers[scene.id]);
                const active = gameState.currentScene === scene.id && gameState.screen === "play";
                const locked = index > 0 && !gameState.answers[heartMapScenes[index - 1].id];
                return `<button class="${done ? "done" : ""} ${active ? "active" : ""} ${locked ? "locked" : ""}" onclick="openHeartScene('${scene.id}')">${index + 1}</button>`;
              }).join("")}
            </div>
          </section>
        `;
      }).join("")}
    </div>
  `;
}

function renderHeartIntro() {
  return `
    <div class="intro-playfield" style="--chapter:${chapterVisuals.energy.glow}; --scene-image:url('${chapterVisuals.energy.image}'); --scene-fallback:${chapterVisuals.energy.fallback}">
      <div class="scene-layer"></div>
      ${renderIntroCinematic()}
      <div class="intro-content">
        <div class="chapter-seal">◇</div>
        <div class="intro-kicker">SOUL MAPPING SEQUENCE</div>
        <h2 class="intro-title">心境地图</h2>
        <div class="intro-desc">
          这不是一场问卷。<br>
          你会穿过四道心门，<br>
          用 16 次行动点亮自己的心型。
        </div>
        <button class="heart-primary" onclick="startHeartMap()">开始</button>
      </div>
      <div class="gate-board">
        ${heartMapChapters.map((chapter) => `
          <button class="gate-tile" style="--chapter:${chapter.color}" onclick="startHeartMap()">
            <i>${chapterMarks[chapter.id]}</i>
            <strong>${chapter.title}</strong>
            <span>${chapter.pair}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function renderHeartPlay() {
  const scene = currentHeartScene();
  const chapter = heartMapChapters.find((item) => item.id === scene.chapter);
  const visual = sceneVisual(scene);
  const selected = gameState.answers[scene.id];
  const index = sceneIndex(scene.id);
  const nextScene = heartMapScenes[index + 1];
  return `
    <div class="playfield" style="--chapter:${visual.glow}; --scene-image:url('${visual.image}'); --scene-fallback:${visual.fallback}">
      <div class="scene-layer"></div>
      ${renderChoiceEcho()}
      <div class="stage-hud">
        <span>${visual.label} · ${chapter.title}</span>
        <span>${index + 1} / ${heartMapScenes.length}</span>
      </div>
      <div class="visual-area">
        ${renderCinematicStage(scene, visual, selected)}
      </div>
      <div class="bottom-ui">
        <div class="heart-actions">
          <button onclick="openHeartScene('${heartMapScenes[Math.max(0, index - 1)].id}')">上一幕</button>
          ${nextScene ? `<button onclick="openHeartScene('${nextScene.id}')">下一幕</button>` : ""}
          <button onclick="finishHeartMap()">结算</button>
        </div>
        <section class="vn-dialog">
          <div class="speaker-tag">${visual.speaker}</div>
          <h2 class="dialog-title">${scene.title}</h2>
          <p class="dialog-text">${scene.prompt}<br><span>${visual.cue}</span></p>
        </section>
        <div class="choices-container">
          ${scene.choices.map((choice) => `
            <button class="choice-card choice-${choice.pole.toLowerCase()} ${selected === choice.id ? "selected" : ""}" onclick="answerHeartScene('${choice.id}')" aria-label="${choice.text}">
              <span>${choice.id.toUpperCase()}</span>
              <strong>${choiceAction(scene, choice)}<em>${choice.text}</em></strong>
              <i class="choice-pole">${choice.pole}</i>
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderHeartResult() {
  const result = gameState.result || calculateHeartMapResult(gameState.answers);
  const letters = result.type.split("");
  return `
    <div class="result-playfield" style="--scene-image:url('${chapterVisuals.rhythm.image}'); --scene-fallback:${chapterVisuals.rhythm.fallback}">
      <div class="result-bg"></div>
      <div class="result-content">
        ${renderResultConstellation(result)}
        <div class="result-hero">
          <div class="result-kicker">SOUL MAP COMPLETE</div>
          <h2 class="result-type">${result.type}</h2>
          <p class="result-title">「${result.profile}」</p>
        </div>
        <div class="trait-grid">
          ${letters.map((letter) => `
            <div>
              <strong>${letter}</strong>
              <span>${poleMeta[letter].name}</span>
            </div>
          `).join("")}
        </div>
        <div class="report-stack">
        ${Object.entries({
          "心境旅程": result.report.journey,
          "情感关系": result.report.love,
          "人际相处": result.report.social,
          "职业工作": result.report.work,
          "情绪成长": result.report.growth
        }).map(([title, body]) => `
          <details class="report-card">
            <summary>${title}</summary>
            <p>${body}</p>
          </details>
        `).join("")}
        </div>
        <div class="heart-actions">
          <button onclick="gameState.screen='play'; renderHeartGame()">回看地图</button>
          <button class="heart-primary" onclick="resetHeartMap()">重新探索</button>
        </div>
      </div>
    </div>
  `;
}

function renderHeartToast() {
  const mount = document.getElementById("heartToast");
  if (!mount) return;
  mount.innerHTML = gameState.toast ? `<div class="heart-toast">${gameState.toast}</div>` : "";
}

renderHeartGame();
