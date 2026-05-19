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
  },
  {
    id: "s17",
    chapter: "energy",
    category: "情感关系",
    tag: "第十七幕",
    img: "./assets/energy-gate.svg",
    fallback: "linear-gradient(to bottom, #451a03, #020617)",
    icon: "🍷",
    speaker: "红发吟游诗人",
    glow: "rgba(251,146,60,0.8)",
    title: "午夜邀舞",
    prompt: "酒馆的乐声忽然停下，吟游诗人把一只银杯推到你面前：“这一曲需要一位见证者，也需要一位回应者。”",
    choices: [
      { id: "a", text: "举杯走到人群中央，让故事从你的第一句话开始燃起来。", pole: "E", note: "你更容易在回应和现场感里进入状态。" },
      { id: "b", text: "把银杯轻轻转向烛火，先听完整首曲子的暗线再开口。", pole: "I", note: "你更愿意先在心里消化，再给出真正的回应。" }
    ]
  },
  {
    id: "s18",
    chapter: "energy",
    category: "人际相处",
    tag: "第十八幕",
    img: "./assets/energy-gate.svg",
    fallback: "linear-gradient(to bottom, #451a03, #020617)",
    icon: "🪶",
    speaker: "旅队书记官",
    glow: "rgba(96,165,250,0.8)",
    title: "陌生盟约",
    prompt: "一支陌生旅队请求与你们并行一夜。书记官递来名单，所有人都在等你决定如何建立信任。",
    choices: [
      { id: "a", text: "邀请他们围坐篝火，先交换名字、笑话和各自带来的消息。", pole: "E", note: "你倾向于用互动加速熟悉感。" },
      { id: "b", text: "安排守夜顺序，安静观察他们如何对待弱者和承诺。", pole: "I", note: "你倾向于用时间和细节判断关系是否可靠。" }
    ]
  },
  {
    id: "s19",
    chapter: "energy",
    category: "职业工作",
    tag: "第十九幕",
    img: "./assets/energy-gate.svg",
    fallback: "linear-gradient(to bottom, #451a03, #020617)",
    icon: "📣",
    speaker: "战场传令官",
    glow: "rgba(192,132,252,0.8)",
    title: "临阵发令",
    prompt: "前线传来混乱消息，三支小队同时望向你。传令官低声说：“大人，现在需要一个能稳住局面的人。”",
    choices: [
      { id: "a", text: "登上石阶，用清楚的声音把目标、风险和下一步讲给所有人听。", pole: "E", note: "你会通过公开表达让团队获得节奏。" },
      { id: "b", text: "先退到地图旁，把关键情报整理成三条命令，再交给可靠的人传达。", pole: "I", note: "你会先压住噪音，把能量集中到最有效的输出。" }
    ]
  },
  {
    id: "s20",
    chapter: "energy",
    category: "情绪成长",
    tag: "第二十幕",
    img: "./assets/energy-gate.svg",
    fallback: "linear-gradient(to bottom, #451a03, #020617)",
    icon: "🫧",
    speaker: "炉边低语",
    glow: "rgba(251,146,60,0.8)",
    title: "疲惫之后",
    prompt: "大战后的夜晚终于安静下来。你意识到自己已经很累，但明天还要继续上路。",
    choices: [
      { id: "a", text: "去找队友聊几句，把今天的惊险讲成笑话，让心跳慢慢落地。", pole: "E", note: "你能从连接和回应中恢复情绪温度。" },
      { id: "b", text: "独自走到门外看雪，把所有声音留在身后，等心里重新有空间。", pole: "I", note: "你能从安静和距离中恢复内在秩序。" }
    ]
  },
  {
    id: "s21",
    chapter: "perception",
    category: "情感关系",
    tag: "第二十一幕",
    img: "./assets/perception-forest.svg",
    fallback: "linear-gradient(to bottom, #064e3b, #020617)",
    icon: "🪞",
    speaker: "湖心镜灵",
    glow: "rgba(52,211,153,0.8)",
    title: "倒影来信",
    prompt: "湖面浮现一封来自旧友的信，但字迹被水纹撕碎。镜灵问：“你最先相信什么？”",
    choices: [
      { id: "a", text: "先辨认纸张、印泥和熟悉的书写习惯，确认这封信是否真实。", pole: "S", note: "你会先把关系里的不安落到可验证线索上。" },
      { id: "b", text: "先感受这些残句透露出的情绪方向，判断旧友真正想避开什么。", pole: "N", note: "你会先捕捉关系背后没有说出口的含义。" }
    ]
  },
  {
    id: "s22",
    chapter: "perception",
    category: "人际相处",
    tag: "第二十二幕",
    img: "./assets/perception-forest.svg",
    fallback: "linear-gradient(to bottom, #064e3b, #020617)",
    icon: "🦉",
    speaker: "夜枭向导",
    glow: "rgba(148,163,184,0.8)",
    title: "无声脚印",
    prompt: "森林里出现两排脚印，一排清晰，一排若隐若现。夜枭向导歪头看你：“哪一排更值得追？”",
    choices: [
      { id: "a", text: "追清晰脚印，先根据深浅、间距和泥土湿度判断人数。", pole: "S", note: "你相信具体证据会一点点拼出答案。" },
      { id: "b", text: "追若隐若现的那排，因为被隐藏的路径往往说明真正的意图。", pole: "N", note: "你会被异常模式和潜在动机吸引。" }
    ]
  },
  {
    id: "s23",
    chapter: "perception",
    category: "职业工作",
    tag: "第二十三幕",
    img: "./assets/perception-forest.svg",
    fallback: "linear-gradient(to bottom, #064e3b, #020617)",
    icon: "🧪",
    speaker: "炼金师",
    glow: "rgba(129,140,248,0.8)",
    title: "两瓶药剂",
    prompt: "炼金师给你两瓶药剂：一瓶标着完整成分，一瓶只写着“让看不见的事显形”。你只能带一瓶上路。",
    choices: [
      { id: "a", text: "带成分清楚的那瓶，效果、剂量和副作用都能预估。", pole: "S", note: "你更安心于清晰、可复查、可执行的信息。" },
      { id: "b", text: "带能显形的那瓶，未知问题需要能打开新视角的工具。", pole: "N", note: "你更看重突破已有框架的可能。" }
    ]
  },
  {
    id: "s24",
    chapter: "perception",
    category: "情绪成长",
    tag: "第二十四幕",
    img: "./assets/perception-forest.svg",
    fallback: "linear-gradient(to bottom, #064e3b, #020617)",
    icon: "🌫️",
    speaker: "雾中自己",
    glow: "rgba(52,211,153,0.8)",
    title: "迷雾自问",
    prompt: "雾气凝成另一个你。它没有攻击，只是问：“当你不确定时，你通常怎样让自己安心？”",
    choices: [
      { id: "a", text: "列出已经发生的事实，让恐惧从想象变成可以处理的清单。", pole: "S", note: "你会用事实感安顿情绪。" },
      { id: "b", text: "寻找这次混乱可能通向的变化，给不安一个更大的解释。", pole: "N", note: "你会用意义感安顿情绪。" }
    ]
  },
  {
    id: "s25",
    chapter: "judgment",
    category: "情感关系",
    tag: "第二十五幕",
    img: "./assets/judgment-scale.svg",
    fallback: "linear-gradient(to bottom, #172554, #020617)",
    icon: "🩹",
    speaker: "旧日搭档",
    glow: "rgba(34,211,238,0.8)",
    title: "迟来的解释",
    prompt: "多年未见的搭档终于承认，当初离开队伍是为了保护某个秘密。所有人都等你回应。",
    choices: [
      { id: "a", text: "先问清事实和后果：秘密是什么，谁受了影响，现在如何补救。", pole: "T", note: "你会先建立判断标准，再决定如何回应关系。" },
      { id: "b", text: "先承认这段沉默带来的痛，再谈是否还能重新信任彼此。", pole: "F", note: "你会先照看关系里的伤口，再进入解决方案。" }
    ]
  },
  {
    id: "s26",
    chapter: "judgment",
    category: "人际相处",
    tag: "第二十六幕",
    img: "./assets/judgment-scale.svg",
    fallback: "linear-gradient(to bottom, #172554, #020617)",
    icon: "🏛️",
    speaker: "城门法官",
    glow: "rgba(251,113,133,0.8)",
    title: "城门争执",
    prompt: "难民队伍和守城士兵在城门前爆发争执。粮食有限，天气正在变坏。",
    choices: [
      { id: "a", text: "立刻按人数、库存和风险分级制定规则，让每一步都可执行。", pole: "T", note: "你会先压住混乱，建立公平且可执行的秩序。" },
      { id: "b", text: "先让最虚弱的人进城避寒，再协调士兵和难民代表一起分担压力。", pole: "F", note: "你会先看见具体的人，再寻找能被接受的安排。" }
    ]
  },
  {
    id: "s27",
    chapter: "judgment",
    category: "职业工作",
    tag: "第二十七幕",
    img: "./assets/judgment-scale.svg",
    fallback: "linear-gradient(to bottom, #172554, #020617)",
    icon: "🗡️",
    speaker: "副队长",
    glow: "rgba(251,191,36,0.8)",
    title: "失败复盘",
    prompt: "一次任务失败了。副队长低声说：“如果现在开会，大家都会很难受。”",
    choices: [
      { id: "a", text: "趁记忆还清楚，马上复盘流程、判断点和责任边界。", pole: "T", note: "你相信清晰分析能减少下一次损失。" },
      { id: "b", text: "先让队伍休整，确认没有人被羞辱或孤立，再一起复盘。", pole: "F", note: "你相信被接住的人更能面对问题。" }
    ]
  },
  {
    id: "s28",
    chapter: "judgment",
    category: "情绪成长",
    tag: "第二十八幕",
    img: "./assets/judgment-scale.svg",
    fallback: "linear-gradient(to bottom, #172554, #020617)",
    icon: "🕯️",
    speaker: "审判厅烛火",
    glow: "rgba(34,211,238,0.8)",
    title: "对自己的判词",
    prompt: "审判厅只剩一盏烛火。墙上浮现你过去一次错误选择，它要求你写下对自己的判词。",
    choices: [
      { id: "a", text: "写下原因、代价和改进规则，不让同样的漏洞再次出现。", pole: "T", note: "你会通过原则和修正来重新站稳。" },
      { id: "b", text: "写下当时的恐惧、愿望和未被照顾的部分，先理解自己。", pole: "F", note: "你会通过理解和接纳来重新站稳。" }
    ]
  },
  {
    id: "s29",
    chapter: "rhythm",
    category: "情感关系",
    tag: "第二十九幕",
    img: "./assets/rhythm-city.svg",
    fallback: "linear-gradient(to bottom, #78350f, #020617)",
    icon: "🧭",
    speaker: "星港领航员",
    glow: "rgba(45,212,191,0.8)",
    title: "重逢约定",
    prompt: "你和重要的人约定在星港重逢，但航线可能随风暴变化。领航员问你要怎么安排。",
    choices: [
      { id: "a", text: "提前定好集合点、备用时间和失联后的行动顺序。", pole: "J", note: "你会用约定和边界保护关系里的安全感。" },
      { id: "b", text: "只定一个大方向，保留改道和临时相见的空间。", pole: "P", note: "你会用弹性和信任保护关系里的生命力。" }
    ]
  },
  {
    id: "s30",
    chapter: "rhythm",
    category: "人际相处",
    tag: "第三十幕",
    img: "./assets/rhythm-city.svg",
    fallback: "linear-gradient(to bottom, #78350f, #020617)",
    icon: "🎭",
    speaker: "节庆主持人",
    glow: "rgba(163,230,53,0.8)",
    title: "临时庆典",
    prompt: "城里突然宣布今晚举办庆典，但你原本答应队伍整理补给。主持人笑着递来面具。",
    choices: [
      { id: "a", text: "先完成补给和交接，确认责任闭环后再决定是否参加。", pole: "J", note: "你更容易在完成承诺后放松。" },
      { id: "b", text: "调整计划，把庆典当作旅途中难得的补给，回来再收尾。", pole: "P", note: "你更容易在变化和体验里恢复活力。" }
    ]
  },
  {
    id: "s31",
    chapter: "rhythm",
    category: "职业工作",
    tag: "第三十一幕",
    img: "./assets/rhythm-city.svg",
    fallback: "linear-gradient(to bottom, #78350f, #020617)",
    icon: "🧩",
    speaker: "钟楼工程师",
    glow: "rgba(251,191,36,0.8)",
    title: "钟楼修复",
    prompt: "钟楼停摆，齿轮散落一地。工程师说：“有两种修法，一种稳，一种快。”",
    choices: [
      { id: "a", text: "按图纸逐层复原，先保证钟楼以后每天都能准点运转。", pole: "J", note: "你重视可持续、可预期、能收束的结果。" },
      { id: "b", text: "先让核心齿轮转起来，在运转中观察哪里还需要调整。", pole: "P", note: "你重视试运行、反馈和边走边修的空间。" }
    ]
  },
  {
    id: "s32",
    chapter: "rhythm",
    category: "情绪成长",
    tag: "终幕",
    img: "./assets/rhythm-city.svg",
    fallback: "linear-gradient(to bottom, #78350f, #020617)",
    icon: "🕰️",
    speaker: "时间之神",
    glow: "rgba(255,255,255,0.9)",
    title: "最后一枚刻度",
    prompt: "时间之神把最后一枚刻度交给你：“当新的旅程开始，你希望自己怎样面对未知？”",
    choices: [
      { id: "a", text: "带着清晰目标出发，把未知拆成可以一步步完成的路。", pole: "J", note: "你会用结构给未知命名。" },
      { id: "b", text: "带着好奇心出发，让路在脚下慢慢显示它真正的方向。", pole: "P", note: "你会用开放给未知留门。" }
    ]
  }
];

var heartMapActions = {
  s01: { a: "入席", b: "独酌" },
  s02: { a: "讲述", b: "聆听" },
  s03: { a: "结交", b: "小聚" },
  s04: { a: "集结", b: "整备" },
  s05: { a: "辨纹", b: "解喻" },
  s06: { a: "寻迹", b: "凭感" },
  s07: { a: "取图", b: "听谶" },
  s08: { a: "查源", b: "解兆" },
  s09: { a: "撤离", b: "营救" },
  s10: { a: "执法", b: "援手" },
  s11: { a: "仲裁", b: "修和" },
  s12: { a: "审讯", b: "问境" },
  s13: { a: "备战", b: "应变" },
  s14: { a: "守路", b: "追光" },
  s15: { a: "铺桥", b: "探路" },
  s16: { a: "立誓", b: "逐星" },
  s17: { a: "举杯", b: "聆听" },
  s18: { a: "围坐", b: "守夜" },
  s19: { a: "发令", b: "整理" },
  s20: { a: "闲谈", b: "看雪" },
  s21: { a: "验信", b: "读心" },
  s22: { a: "追迹", b: "寻意" },
  s23: { a: "稳妥", b: "显形" },
  s24: { a: "列事实", b: "找意义" },
  s25: { a: "问清", b: "接住" },
  s26: { a: "定规", b: "护人" },
  s27: { a: "复盘", b: "休整" },
  s28: { a: "修正", b: "理解" },
  s29: { a: "约定", b: "留白" },
  s30: { a: "闭环", b: "改程" },
  s31: { a: "复原", b: "试转" },
  s32: { a: "定路", b: "开门" }
};

var heartThirdChoiceProfiles = {
  energy: {
    action: "斡旋",
    text: "先回应眼前的人与事，再给自己留出一小段安静判断的余地。",
    note: "你会在连接和自我整理之间寻找可持续的节奏。",
    weights: { E: 0.58, I: 0.42 }
  },
  perception: {
    action: "探问",
    text: "先抓住眼前最可靠的线索，再问这些线索背后正在连成什么故事。",
    note: "你会把细节和意义放在同一张地图上理解。",
    weights: { S: 0.58, N: 0.42 }
  },
  judgment: {
    action: "衡量",
    text: "先问清事实、代价和责任，再确认每个人是否还能承受这个决定。",
    note: "你会同时校准原则和关系里的真实感受。",
    weights: { T: 0.58, F: 0.42 }
  },
  rhythm: {
    action: "留白",
    text: "先定下最低限度的安全安排，再把剩下的空间交给现场变化。",
    note: "你会在计划和弹性之间保留一道可调整的门。",
    weights: { J: 0.58, P: 0.42 }
  }
};

var heartThirdChoiceByCategory = {
  "情感关系": {
    actionSuffix: "微光",
    notePrefix: "在亲密关系里，"
  },
  "人际相处": {
    actionSuffix: "试探",
    notePrefix: "在人群关系里，"
  },
  "职业工作": {
    actionSuffix: "校准",
    notePrefix: "在任务推进里，"
  },
  "情绪成长": {
    actionSuffix: "停顿",
    notePrefix: "在情绪整理里，"
  }
};

function addCinematicThirdChoices() {
  heartMapScenes.forEach((scene, index) => {
    if (scene.choices.some((choice) => choice.id === "c")) return;
    const profile = heartThirdChoiceProfiles[scene.chapter];
    const category = heartThirdChoiceByCategory[scene.category];
    const weights = { ...profile.weights };
    const letters = Object.keys(weights);
    if (index % 2 === 1) {
      weights[letters[0]] = profile.weights[letters[1]];
      weights[letters[1]] = profile.weights[letters[0]];
    }
    scene.choices.push({
      id: "c",
      action: `${profile.action}${category.actionSuffix}`,
      text: profile.text,
      weights,
      note: `${category.notePrefix}${profile.note}`
    });
  });
}

addCinematicThirdChoices();

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
  navigatorOpen: false,
  currentChapterSummary: savedHeartMap.currentChapterSummary || null,
  toast: ""
};

function saveHeartMap() {
  localStorage.setItem("heartMapProgress", JSON.stringify({
    screen: gameState.screen,
    currentScene: gameState.currentScene,
    answers: gameState.answers,
    result: gameState.result,
    currentChapterSummary: gameState.currentChapterSummary
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

function chapterSceneIndex(scene) {
  return heartMapScenes.filter((item) => item.chapter === scene.chapter).findIndex((item) => item.id === scene.id);
}

function buildHeartMapNodes() {
  return heartMapScenes.map((scene) => {
    const index = sceneIndex(scene.id);
    const localIndex = chapterSceneIndex(scene);
    const origin = chapterRouteOrigins[scene.chapter];
    const point = chapterRoutePoints[localIndex];
    return {
      id: scene.id,
      title: scene.title,
      chapter: scene.chapter,
      category: scene.category,
      number: index + 1,
      localNumber: localIndex + 1,
      x: origin.x + point.x,
      y: origin.y + point.y,
      routeClass: origin.className,
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

function choiceAction(scene, choice) {
  if (choice.action) return choice.action;
  return heartMapActions[scene.id]?.[choice.id] || choice.text.replace(/[。！？；;]+$/g, "");
}

function choiceMark(choiceId) {
  return choiceId === "a" ? "Ⅰ" : choiceId === "b" ? "Ⅱ" : "Ⅲ";
}

function compactNote(note) {
  return note.replace(/^你/, "").replace(/[。！？；;]+$/g, "");
}

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
  const selectedPole = selectedChoice ? primaryChoicePole(selectedChoice) : direction.firstPole;
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
  const poleProfile = cinematicPoleProfiles[gameState.lastChoice.pole] || cinematicPoleProfiles[gameState.lastChoice.primaryPole] || cinematicPoleProfiles.E;
  return `
    <div class="choice-echo echo-${poleProfile.tone}">
      <i>${gameState.lastChoice.mark}</i>
      <strong>命运回响</strong>
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

function renderHeartNavigator() {
  if (!gameState.navigatorOpen) return "";
  return `
    <div class="journey-navigator">
      <div class="journey-head">
        <strong>旅程回廊</strong>
        <button onclick="toggleHeartNavigator()" aria-label="关闭旅程回廊">关闭</button>
      </div>
      <div class="journey-scroll">
        ${heartMapChapters.map((chapter) => {
          const scenes = heartMapScenes.filter((scene) => scene.chapter === chapter.id);
          return `
            <section class="journey-chapter" style="--chapter:${chapter.color}">
              <h3><span>${chapterMarks[chapter.id]}</span>${chapter.title}</h3>
              <div class="journey-grid">
                ${scenes.map((scene) => {
                  const index = sceneIndex(scene.id);
                  const done = Boolean(gameState.answers[scene.id]);
                  const active = gameState.currentScene === scene.id;
                  const locked = index > 0 && !gameState.answers[heartMapScenes[index - 1].id];
                  const answer = scene.choices.find((choice) => choice.id === gameState.answers[scene.id]);
                  return `
                    <button class="${done ? "done" : ""} ${active ? "active" : ""} ${locked ? "locked" : ""}" ${locked ? "disabled" : ""} onclick="openHeartScene('${scene.id}')">
                      <i>${index + 1}</i>
                      <strong>${scene.title}</strong>
                      <span>${locked ? "未解锁" : done ? choiceAction(scene, answer) : "当前线索"}</span>
                    </button>
                  `;
                }).join("")}
              </div>
            </section>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function answerHeartScene(choiceId) {
  const scene = currentHeartScene();
  const choice = scene.choices.find((item) => item.id === choiceId);
  gameState.answers[scene.id] = choiceId;
  if (choice) {
    const primaryPole = primaryChoicePole(choice);
    gameState.lastChoice = {
      sceneId: scene.id,
      title: scene.title,
      choiceId: choice.id,
      pole: primaryPole,
      primaryPole,
      mark: chapterMarks[scene.chapter],
      note: choice.note
    };
  }
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
}

function startHeartMap() {
  gameState.screen = "map";
  gameState.currentScene = firstUnfinishedScene(gameState.answers)?.id || "s01";
  gameState.lastChoice = null;
  gameState.navigatorOpen = false;
  gameState.currentChapterSummary = null;
  saveHeartMap();
  renderHeartGame();
}

function openHeartMap() {
  gameState.screen = "map";
  gameState.navigatorOpen = false;
  gameState.lastChoice = null;
  saveHeartMap();
  renderHeartGame();
}

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

function toggleHeartNavigator() {
  gameState.navigatorOpen = !gameState.navigatorOpen;
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
  gameState.navigatorOpen = false;
  localStorage.removeItem("heartMapProgress");
  renderHeartGame();
}

function primaryChoicePole(choice) {
  if (choice.pole) return choice.pole;
  if (!choice.weights) return "E";
  return Object.entries(choice.weights).sort((a, b) => b[1] - a[1])[0][0];
}

function scoreHeartChoice(scores, choice) {
  if (!choice) return;
  if (choice.weights) {
    Object.entries(choice.weights).forEach(([pole, value]) => {
      scores[pole] += value;
    });
    return;
  }
  scores[choice.pole] += 1;
}

function dimensionStrength(primaryScore, secondaryScore) {
  const diff = Math.abs(primaryScore - secondaryScore);
  if (diff >= 4) return "明显";
  if (diff >= 1) return "温和";
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

function calculateHeartMapResult(answers) {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  const notes = [];
  heartMapScenes.forEach((scene) => {
    const choice = scene.choices.find((item) => item.id === answers[scene.id]);
    if (!choice) return;
    scoreHeartChoice(scores, choice);
    notes.push({ scene: scene.title, category: scene.category, pole: primaryChoicePole(choice), note: choice.note });
  });
  const type = [
    scores.E >= scores.I ? "E" : "I",
    scores.S >= scores.N ? "S" : "N",
    scores.T >= scores.F ? "T" : "F",
    scores.J >= scores.P ? "J" : "P"
  ].join("");
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
}

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
            <p>${gameState.screen === "result" ? "心型已生成" : "32 幕长旅"}</p>
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
        ${gameState.screen === "intro" ? renderHeartIntro() : gameState.screen === "map" ? renderHeartMapScreen() : gameState.screen === "chapter" ? renderChapterSummary() : gameState.screen === "result" ? renderHeartResult() : renderHeartPlay()}
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
              class="map-node ${node.routeClass} ${state.done ? "done" : ""} ${state.active ? "active" : ""} ${state.locked ? "locked" : ""}"
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
              <span>${doneCount}/${scenes.length}</span>
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
          用 32 次行动穿过一段完整旅程。
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
      ${renderHeartNavigator()}
      <div class="stage-hud">
        <span>${visual.label} · ${chapter.title}</span>
        <span>${index + 1} / ${heartMapScenes.length}</span>
      </div>
      <div class="visual-area">
        ${renderCinematicStage(scene, visual, selected)}
      </div>
      <div class="bottom-ui">
        <div class="heart-actions">
          <button onclick="openHeartMap()">地图</button>
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
            <button class="choice-card choice-${primaryChoicePole(choice).toLowerCase()} ${selected === choice.id ? "selected" : ""}" onclick="answerHeartScene('${choice.id}')" aria-label="${choice.text}">
              <span>${choiceMark(choice.id)}</span>
              <strong>${choiceAction(scene, choice)}<em>${choice.text}</em></strong>
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
        <div class="report-stack">
        ${Object.entries({
          "心境旅程": result.report.journey,
          "情感关系": result.report.love,
          "人际相处": result.report.social,
          "职业工作": result.report.work,
          "情绪成长": result.report.growth,
          "选择证据": result.report.evidence
        }).map(([title, body]) => `
          <details class="report-card">
            <summary>${title}</summary>
            <p>${body}</p>
          </details>
        `).join("")}
        </div>
        <div class="heart-actions">
          <button onclick="openHeartMap()">回看地图</button>
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
