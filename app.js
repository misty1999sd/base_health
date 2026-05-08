const STORAGE_KEY = "100-led-kpi-save";
const ENDING_KEY = "100-led-kpi-endings";

const initialState = () => ({
  battery: 100,
  kpi: 0,
  family: 50,
  awareness: 0,
  debt: 10,
});

const sceneMeta = {
  cover: {
    className: "scene-office",
    image: "assets/scenes/title-screen.png",
    title: "胸口的绿灯",
    quote: "基础生命值被激活的那一刻，人生也开始被公司计量。",
    heroState: "满格，刺眼，像春天刚冒头的草叶子被拧到最高亮度。",
  },
  orientation: {
    className: "scene-office",
    image: "assets/scenes/orientation-briefing.png",
    title: "入职规则",
    quote: "规则总是会比真相先一步抵达，而且会被包装得比真相更柔和。",
    heroState: "你还没来得及紧张，就已经开始学习如何把自己调成这家公司喜欢的样子。",
  },
  probation: {
    className: "scene-office",
    image: "assets/scenes/office-barrage.png",
    title: "试用期工位",
    quote: "这里最熟练的人，不一定业务最好，但一定最会消耗自己。",
    heroState: "手指发热，肩颈绷紧，胸口那团绿光一直在催你往前冲。",
  },
  metrics: {
    className: "scene-office",
    image: "assets/scenes/metrics-drop.png",
    title: "电量曲线",
    quote: "系统不靠剧痛驯服人，它靠轻微到足以被忽略的代价让人慢慢习惯。",
    heroState: "你第一次看见 KPI 和电量同时跳动，像看见自己被拆成了两张表。",
  },
  bonus: {
    className: "scene-home",
    image: "assets/scenes/home-upgrade.png",
    title: "奖励日",
    quote: "第一次把工资换成自己的椅子、沙发和灯，生活会短暂地像是被你亲手点亮。",
    heroState: "一个人的出租屋终于不像临时落脚处，你也第一次尝到向上爬带来的甜头。",
  },
  moving: {
    className: "scene-home",
    image: "assets/scenes/moving-day.png",
    title: "换房日",
    quote: "空间变大以后，成本不会站在门外，它只会装进每一个还空着的位置里。",
    heroState: "你一个人把箱子往屋里搬，像是在把更体面的生活和更高的月供一起搬上楼。",
  },
  shared: {
    className: "scene-home",
    image: "assets/scenes/shared-life.png",
    title: "一个人的好日子",
    quote: "真正危险的不是欲望本身，而是你开始觉得现在这套成本已经算正常。",
    heroState: "房子大了，夜里安静了，你却发现安静也要靠更多钱和更多工时维持。",
  },
  loan: {
    className: "scene-home",
    image: "assets/scenes/loan-showroom.png",
    title: "样板间",
    quote: "理想生活被摆在聚光灯下，代价则被拆散成了月供和温柔话术。",
    heroState: "你知道自己在借未来，可仍然忍不住想把未来签下来。",
  },
  meet: {
    className: "scene-home",
    image: "assets/scenes/outdoor-meet.png",
    title: "周末的山路",
    quote: "有些相遇并不是奇迹，它只是提醒你，电量原来也可以花在没有KPI的时刻里。",
    heroState: "你本来只是想喘口气，却在同好活动的人群里第一次看见了另一种生活速度。",
  },
  wedding: {
    className: "scene-home",
    image: "assets/scenes/wedding-night.png",
    title: "婚后夜晚",
    quote: "真正让人继续往前走的，常常不是野心，而是有人开始与你共担未来。",
    heroState: "胸口那盏灯久违地变暖了一会儿，像被人从里面托住。",
  },
  winter: {
    className: "scene-home",
    image: "assets/scenes/quiet-winter.png",
    title: "灯下的普通日子",
    quote: "每个人都以为压力是从天而降的，其实它常常是从细软普通的好日子里慢慢长出来。",
    heroState: "你以为这是幸福正在稳定成形，没有立刻发现它也在同步变贵。",
  },
  nursery: {
    className: "scene-home",
    image: "assets/scenes/nursery-plan.png",
    title: "未来预算",
    quote: "孩子还没出生，就已经被纳入了一条可消费、可规划、可被继续压榨的流水线。",
    heroState: "希望和恐惧第一次一起被摊在一张桌上，而且都很具体。",
  },
  overtime: {
    className: "scene-office",
    image: "assets/scenes/overtime-grid.png",
    title: "加班季",
    quote: "去年的优秀到了今年只够当作起跑线，系统总能找到新的上调理由。",
    heroState: "你不是在拼，而是在被持续地磨薄，只是还没磨穿。",
  },
  weekend: {
    className: "scene-office",
    image: "assets/scenes/weekend-office.png",
    title: "失去的周末",
    quote: "最贵的不是加班费，而是那些再也不会回来的普通日子。",
    heroState: "整层楼只剩你一个人时，你才发现孤独也会耗电。",
  },
  clinic: {
    className: "scene-office",
    image: "assets/scenes/clinic-warning.png",
    title: "医务室",
    quote: "所有人都知道你正在坏，只是没人把坏这件事当成停下传送带的理由。",
    heroState: "疼痛终于有了固定时段，像一个预约好的提醒。",
  },
  childcare: {
    className: "scene-night",
    image: "assets/scenes/night-breakdown.png",
    title: "回家之后",
    quote: "心理疲惫同样计入消耗，系统从不放过任何一个出口。",
    heroState: "嗓子发紧，太阳穴突突直跳，连温和都要额外耗电。",
  },
  ledger: {
    className: "scene-night",
    image: "assets/scenes/kitchen-ledger.png",
    title: "她的那本账不只记钱",
    quote: "有时候一个家最后的温柔，就是有人不再帮你把事情说短。",
    heroState: "你第一次意识到，她不是突然变得冷，而是已经先经历了很多你没看见的喜欢和让步。",
  },
  salary: {
    className: "scene-night",
    image: "assets/scenes/salary-table.png",
    title: "账单桌",
    quote: "当数字开始对着你叫的时候，人会很难再把生活想得温柔。",
    heroState: "你知道自己不是怕算账，你是怕这些账永远都算不完。",
  },
  rumor: {
    className: "scene-blue",
    image: "assets/scenes/blue-door.png",
    title: "蓝门传闻",
    quote: "每个人都把它叫晋升通道，因为没有人回来纠正这个说法。",
    heroState: "你开始主动往那扇门看去，像盯着一个迟早要轮到自己的答案。",
  },
  blue: {
    className: "scene-blue",
    image: "assets/scenes/blue-door.png",
    title: "蓝光椅子与胡桃木门",
    quote: "深海蓝色的光总会比真相更早抵达你的眼睛。",
    heroState: "门还没打开，身体已经先知道那里不对劲了。",
  },
  deadline: {
    className: "scene-office",
    image: "assets/scenes/deadline-desk.png",
    title: "三天冲线",
    quote: "你知道自己不是在工作，而是在拿身体补一个不断后撤的缺口。",
    heroState: "冷咖啡、抖动的手和无法停下来的回车键，开始像同一种东西。",
  },
  corridor: {
    className: "scene-blue",
    image: "assets/scenes/corridor-watch.png",
    title: "走廊尽头",
    quote: "有些地方还没进去，就已经先把人的背脊吹凉了。",
    heroState: "你在忍着不转身，也在忍着不立刻冲过去。",
  },
  janitor: {
    className: "scene-blue",
    image: "assets/scenes/janitor-tip.png",
    title: "低声的人",
    quote: "最知道秘密形状的人，往往是负责擦掉痕迹的人。",
    heroState: "你听见的不只是警告，更像一个底层人给你的最后一点善意。",
  },
  secret: {
    className: "scene-blue",
    image: "assets/scenes/secret-corridor.png",
    title: "前室",
    quote: "仪式感只是工业流程的外壳，真正运转的部分藏在更冷的地方。",
    heroState: "那些排好的空椅子让你第一次看见了流程，而不是传闻。",
  },
  threshold: {
    className: "scene-blue",
    image: "assets/scenes/threshold-23.png",
    title: "23% 门槛",
    quote: "系统会在你还活着、但已经无力反抗的时候，把你处理得最干净。",
    heroState: "你几乎已经站不住，却忽然比任何时候都更想知道门后是什么。",
  },
  factory: {
    className: "scene-factory",
    image: "assets/scenes/factory-truth.png",
    title: "门后世界",
    quote: "资产会在还活着的时候被处理，因为那样更高效，也更便宜。",
    heroState: "胃里翻涌，呼吸发浅，理智却第一次前所未有地清醒。",
  },
  dawn: {
    className: "scene-dawn",
    image: "assets/scenes/dawn-aftermath.png",
    title: "城市边缘的风",
    quote: "不是所有离开都叫胜利，但总比被压成方块更像活着。",
    heroState: "心跳慢了一些，伤口还在，但终于不再只有任务提示音。",
  },
};

const endingCatalog = [
  { code: "A", title: "结局 A / 废品回收", desc: "被蓝椅子送进胡桃木门，最后成为银灰色压缩方块。" },
  { code: "B", title: "结局 B / 进化谎言", desc: "你选择相信晋升叙事，让自己更安静地被系统处理。" },
  { code: "C", title: "结局 C / 沉默掌声", desc: "所有人都看着你被送走，却没有一个人愿意站起来。" },
  { code: "D", title: "结局 D / 证据消失", desc: "你看见了真相，却没能让更多人真的看见。" },
  { code: "E", title: "结局 E / 带着家离开", desc: "你从传送带上跳下来，带家人离开这座吃人的城市。" },
  { code: "F", title: "结局 F / 太晚的逃离", desc: "人逃出来了，家却已经先一步散掉。" },
  { code: "G", title: "结局 G / 人还在家里", desc: "你没赢过系统，但保住了还能回家的自己。" },
  { code: "H", title: "结局 H / 降档生存", desc: "你没有彻底自由，只是终于先不死机。" },
  { code: "I", title: "结局 I / 真相外泄", desc: "门后的世界第一次被更多人看见。" },
  { code: "J", title: "结局 J / 警报时刻", desc: "你没能完整离开，却亲手撞裂了那套流程。" },
];

const endingSettlements = {
  A: {
    verdict: "你把一生最亮的那几年都押给了效率，最后只被按重量计价。",
    epitaph: "有些系统不会在你失败时吃掉你，而是在你最拼命证明自己有价值时完成回收。",
  },
  B: {
    verdict: "你选择相信奖励神话，于是连最后的恐惧也被包装成了幸运。",
    epitaph: "谎言最有力的时候，往往不是它更真，而是人已经太累了，累到更愿意被安慰。",
  },
  C: {
    verdict: "你回头求救，却只看见一整片为了活下去而练习沉默的人群。",
    epitaph: "沉默不是某一个人的罪，它是一套结构把每个人都训练成了自己的见证人。",
  },
  D: {
    verdict: "你看见了真相，却没能把它完整送出去。",
    epitaph: "并不是所有证据都能立刻改变世界，但它会先改变那些亲眼见过它的人。",
  },
  E: {
    verdict: "你带着家从传送带上跳了下来，虽然狼狈，但终于还像活人。",
    epitaph: "离开未必体面，可至少从这一刻起，你们的日子不再由那扇门替你们命名。",
  },
  F: {
    verdict: "你逃了出来，可家已经先一步被长期消耗撕出了口子。",
    epitaph: "有些代价不是在某一次崩溃里爆发的，而是在很多次来不及回家里完成的。",
  },
  G: {
    verdict: "你没有赢过系统，但你把自己从系统的定义里拽出来了一部分。",
    epitaph: "生活重新变小之后，呼吸声、锅里的水和孩子的笑，终于又能算作生活本身。",
  },
  H: {
    verdict: "你没有彻底自由，只是先把死亡式上升换成了能够喘气的生存。",
    epitaph: "有时候成年人最艰难的胜利，不是飞得更高，而是终于肯先不继续往下掉。",
  },
  I: {
    verdict: "你把门后的白灯打到了更多人脸上，真相第一次不再只属于传闻。",
    epitaph: "系统不会因为一次曝光立刻倒下，但它一旦被叫出名字，就再也不可能完全无声。",
  },
  J: {
    verdict: "你没能完整离开，却亲手把那套安静运转的流程撞出了一道裂缝。",
    epitaph: "警报响起的那一刻，至少有人重新抬头，看见了机器而不是神话。",
  },
};

const nodes = {
  start: {
    chapter: "序章 / 启动",
    scene: "cover",
    title: "第一天，100%",
    type: "引导",
    text: [
      "他坐到工位上的时候，胸口的灯是绿色的。100%，满格。人事部说这是基础生命值，人人都有，只是入职之后才会被激活显示。她说话的口气平静得像在解释食堂的打卡规则，仿佛人的一生被量化从来都不是一件值得惊讶的事。",
      "电脑上方的 LED 屏跳着红字: 个人 KPI 进度，0%。旁边的同事已经开始敲键盘了，声音密得像暴雨。你还没有登录任何系统，却已经闻到一种奇怪的气味，那不是咖啡，也不是空调风，而是某种新塑料和热金属混起来的味道，像工厂，只是被伪装成了办公室。",
      "你知道自己需要这份工作。你出身普通，简历普通，工资却要承担不普通的城市生活。从这一刻起，你的人生被接入一套会精确结算代价的系统。",
    ],
    choices: [
      { label: "坐下，输入工号", hint: "先活下去，再研究这家公司到底想要什么。", next: "orientation", actionType: "start" },
    ],
  },
  orientation: {
    chapter: "第一章 / 入职",
    scene: "orientation",
    title: "规则总是先于真相出现",
    type: "适应",
    text: [
      "第一堂培训课在八点十分开始。投影幕布上列着公司价值观，字体很大，颜色柔和，像为睡眠不足的人特意调低了伤害。讲师说，这里不鼓励内耗，只鼓励高效协作；不提倡加班文化，只提倡目标承诺。她每说一句，台下都会有人点头，像一群已经被驯熟的装置在响应固定指令。",
      "培训资料里有一页专门讲胸口的灯。绿色代表可用，黄色代表注意，红色代表风险。她没有解释风险之后是什么，只说系统会自动介入。你抬头问了一句，自动介入是什么意思。她的笑停了一下，随即又恢复回来，说那是为了保护员工和企业共同资产安全。",
      "共同资产这个词让你有点不舒服。可你还是把那份不舒服压了下去。第一天就显得太敏感，不会有任何好处。",
    ],
    choices: [
      {
        label: "把问题咽回去，先记住流程",
        hint: "沉默能帮你更快融进人群。",
        effect: { kpi: 4, awareness: 0, battery: -2 },
        next: "probation",
        actionType: "blend",
      },
      {
        label: "继续追问系统如何判定“风险”",
        hint: "你会留下印象，也会更早察觉异样。",
        effect: { awareness: 2, battery: -3, kpi: 1 },
        next: "probation",
        actionType: "probe",
      },
      {
        label: "记住培训讲师说的每一个词",
        hint: "有时官方语言本身就是证据。",
        effect: { awareness: 1, kpi: 3, battery: -2 },
        next: "probation",
        actionType: "log",
      },
    ],
  },
  probation: {
    chapter: "第二章 / 试用期",
    scene: "probation",
    title: "人会在一周内学会替系统说话",
    type: "磨合",
    text: [
      "试用期的第一周，你很快发现每个人都习惯用数字描述自己。不是说今天忙不忙，而是说自己的完成率、转化率、交付率。茶水间里有人聊起前任和婚姻，也会顺带提一句那段关系的投入产出比。你原本觉得这种说法冷，可听得久了，竟然也慢慢开始觉得方便。",
      "带你的老员工姓周，三十二岁，眼下总有青黑。他教你最重要的一件事不是业务，而是如何在系统里看起来稳定。他说，不要让灯掉得太快，快得像亏损报表；也不要太慢，慢得像没在拼。最好是那种老板一眼看上去就会点头的下降曲线，说明你在燃烧，但燃烧得很识大体。",
      "你听懂了。这不是单纯的工作技巧，而是一整套姿态管理。你需要把自己耗用得足够有价值。",
    ],
    choices: [
      {
        label: "学周哥那一套，把自己调成标准下降曲线",
        hint: "你会更像这里的人。",
        effect: { kpi: 8, battery: -6, awareness: 0 },
        next: "metrics",
        actionType: "sync",
      },
      {
        label: "白天跟着做，晚上悄悄记每次掉电节点",
        hint: "你在适应，也在观察。",
        effect: { kpi: 5, battery: -5, awareness: 2 },
        next: "metrics",
        actionType: "track",
      },
      {
        label: "拼命冲进度，先把转正拿到手",
        hint: "短期最稳，长期最伤。",
        effect: { kpi: 12, battery: -9, debt: -2 },
        next: "metrics",
        actionType: "rush",
      },
    ],
  },
  metrics: {
    chapter: "第三章 / 数据感",
    scene: "metrics",
    title: "第一次看见电量和绩效同时变化",
    type: "认知",
    text: [
      "一个月后，你终于对那块胸灯有了实感。KPI 从 0 跳到 5%，电量从 100 掉到 98。再到 10%，电量掉到 95。身体的疲惫感并不明显，至少没明显到能让你站起来抗议。它更像一张椅子在极慢地往下沉，慢到你怀疑那并不是下降，而只是自己产生了幻觉。",
      "最危险的地方恰恰在这里。系统并不靠痛感驯服你，它靠轻微到足以被忽略的代价让你习惯。等你终于意识到自己在失去什么，那些失去已经被包装成了薪资、绩效、团队荣誉和职业成长。",
      "周哥告诉你，转正答辩最重要的是情绪稳定。你要显得可靠，像一块怎么压都不会响的海绵。可你知道，海绵挤到最后也会干。",
    ],
    choices: [
      {
        label: "留下来做转正答辩材料，今晚不回头看时间",
        hint: "你会更快转正，也会更快接受规则。",
        effect: { battery: -8, kpi: 10, awareness: 0 },
        next: "bonus_day",
        actionType: "extend",
      },
      {
        label: "按时下班，测试灯会不会自己回升",
        hint: "你开始想知道系统回补的逻辑。",
        effect: { battery: 4, awareness: 2, kpi: 4 },
        next: "bonus_day",
        actionType: "test",
      },
      {
        label: "去茶水间套周哥的话，问他见过红灯吗",
        hint: "你会得到一个含糊却危险的答案。",
        effect: { awareness: 2, battery: -2, kpi: 5 },
        next: "bonus_day",
        actionType: "ask",
      },
    ],
  },
  bonus_day: {
    chapter: "第四章 / 奖金",
    scene: "bonus",
    title: "系统教你把生活也理解成奖励",
    type: "诱导",
    text: [
      "转正那天，公司给你发了第一笔像样的奖金。数字躺在工资条上的样子很漂亮，像是一种正式承认，承认你配得上在这座城市继续活下去。与此同时，内网首页给你推送了生活服务专区，房屋租赁、消费贷、家装分期、婚庆合作、早教折扣，一整排模块闪着柔和的橙光，像一个体贴到过分的商城。",
      "你第一次理解为什么这家公司让人难以离开。它不只是给你工资，它还提前设计好了工资会流去哪里。你赚得越多，能接触到的“理想生活”模板就越完整；而模板越完整，你就越难停下来。因为一旦停下，就像从已经点亮的橱窗前退回黑暗。",
      "那天晚上，你坐在出租屋里，把购物车里犹豫很久的沙发、电视和落地灯一件件点下付款。房间终于不再只有床、折叠桌和一把嘎吱作响的椅子。你第一次觉得，努力不是抽象的，它能换来一块更软的坐垫、一盏不那么刺眼的灯和一个不像临时中转站的夜晚。",
      "也正因为这一切太具体了，你几乎没有注意到另一件事：从你开始舍不得回到以前那种日子起，公司就已经多握住了你一点。",
    ],
    choices: [
      {
        label: "买一套像样的沙发和电视",
        hint: "一个人的房间会先亮起来，成本也会一起长出来。",
        effect: { battery: 6, family: 3, debt: 10, kpi: 4 },
        next: "moving_day",
        actionType: "reward",
      },
      {
        label: "先存钱，不让自己被新的欲望牵着跑",
        hint: "你会轻一点，也会让生活继续显得很将就。",
        effect: { battery: 4, family: 1, debt: -6, awareness: 1 },
        next: "moving_day",
        actionType: "save",
      },
      {
        label: "继续把奖金投回工作，报课、买设备、冲得更快",
        hint: "你会越来越像高潜员工。",
        effect: { battery: -5, kpi: 12, debt: -4, awareness: 1 },
        next: "moving_day",
        actionType: "invest",
      },
    ],
  },
  moving_day: {
    chapter: "第五章 / 换房",
    scene: "moving",
    title: "你一个人把生活抬高了一层",
    type: "过渡",
    text: [
      "一年后，你换进了一个更大的房子。不是买的，只是租金更高、地段更体面、通勤更像“配得上现在的你”的那种房子。搬家那天没有人和你一起收拾，只有叫来的搬运师傅、成堆纸箱和你自己。屋子很空，但空得很漂亮，漂亮到让人很愿意相信这就是向上的证据。",
      "你站在客厅中央，第一次感觉到一个人也能过出某种像样的版本。电视柜、鞋柜、厨房里成套的餐具、衣柜里终于能挂平的衬衫，这些东西让你看起来更稳定、更像公司愿意下注的人。就连胸口的灯都像很配合似的，在新房的玻璃反光里显得更亮一些。",
      "可换房之后，压力也开始长出新的形状。房租提高了，通勤成本提高了，衣服、社交、日用品、连周末想喘口气的消费都在同步抬升。你不是被某一笔巨额账单打倒的，而是被“既然已经住到了这里，就不能活得太寒酸”这种细密的标准慢慢围住。",
      "公司没有逼你签任何附加协议，它只是让你自己越来越不愿意掉回去。",
    ],
    choices: [
      {
        label: "继续把房子布置得更完整一点",
        hint: "体面感会更实，日常成本也会更难缩回去。",
        effect: { family: 3, debt: 8, battery: 2 },
        next: "shared_life",
        actionType: "settle",
      },
      {
        label: "先停下消费，把剩余的钱攒成缓冲",
        hint: "你会更谨慎，也更容易觉得自己像没跟上同龄人。",
        effect: { debt: -4, awareness: 1, family: 1 },
        next: "shared_life",
        actionType: "reserve",
      },
      {
        label: "草草收尾，明天一早继续回公司冲",
        hint: "你把安顿自己这件事，又一次让给了工位和指标。",
        effect: { kpi: 6, battery: -5, family: -2 },
        next: "shared_life",
        actionType: "defer",
      },
    ],
  },
  shared_life: {
    chapter: "第六章 / 单人生活",
    scene: "shared",
    title: "一个人的生活也会被慢慢抬价",
    type: "生活",
    text: [
      "住进去后的头几个月，你第一次体会到什么叫普通人的好日子。下班回家，玄关有自己的拖鞋，冰箱里有买得起却又不至于太奢侈的食物，洗好的床单会晒出一点太阳味。你终于不用每周都怀疑自己是不是随时会从这座城市滑出去。",
      "也是从这时候起，成本开始变得不像成本，而像空气。会员、停车、物业、换季家电、跑步鞋、健身房、偶尔请同事吃饭、为了显得体面而默认续费的一切。每一笔都不大，大到不足以让人立刻害怕，小到正好能被一句“这就是现在的生活标准”吞下去。",
      "你开始有了周末。或者说，你开始逼自己在周末留一点不属于公司的时间。跑步、徒步、骑行、城市边缘的短途活动，这些事情起初只是为了让胸口的灯别一直往下掉。你并不真相信爱好能改变什么，你只是发现如果连周末都完全交给系统，人会很快连自己还喜欢什么都忘掉。",
      "公司仍在往前推。KPI 每个季度都在上调，工资也确实在涨，可涨幅总像故意比生活成本慢半拍。你在单人生活里第一次学会了一个残忍事实：向上改善不是终点，它常常只是更高成本区间的入场券。",
    ],
    choices: [
      {
        label: "继续守住周末，至少给自己留一点不被考核的时间",
        hint: "这会让你没那么高产，却更像还活着。",
        effect: { battery: 4, awareness: 1, kpi: -2, family: 2 },
        next: "loan_offer",
        actionType: "breathe",
      },
      {
        label: "把预算继续写细，不让生活标准膨胀得太快",
        hint: "更清醒，也更容易显得不合群。",
        effect: { awareness: 1, debt: -3, family: 1 },
        next: "loan_offer",
        actionType: "budget",
      },
      {
        label: "把所有喘息都让给工作，赌下一轮绩效会把一切拉平",
        hint: "短期最省事，长期最像套索。",
        effect: { kpi: 7, battery: -5, family: -2 },
        next: "loan_offer",
        actionType: "grind",
      },
    ],
  },
  loan_offer: {
    chapter: "第七章 / 相识",
    scene: "meet",
    title: "你在公司之外认识了她",
    type: "相遇",
    text: [
      "那是一次城郊徒步活动，路线不难，报名的人大多和你一样，是把周末当成临时避难所的城市白领。你原本只是想让自己离工位和提示音远一点，没想到在山路转弯处认识了林澜。她背着相机，走得不快，和人说话时会先认真听完，再笑着接话，像和这座永远在赶时间的城市天然有一点时差。",
      "你们第一次聊天并不戏剧化。她问你胸前挂着的运动心率带是不是很不舒服，你下意识摸了摸衣服下面那块真正发热的地方，含糊地说还好。后来你才知道，她做设计，也加班，也被客户和节点追着跑，所以才会逼自己周末出来爬山。你们不是在彼此身上看见传奇，而是在彼此身上看见一种熟悉的疲惫，一种仍然想把生活过得像生活的 stubborn。",
      "接下来的几个月，你们约着去徒步、看展、逛二手市集，或者只是在不需要打卡的下午坐着喝咖啡。林澜让你第一次意识到，原来公司之外真的还有另一套时间：它不会按季度结算，不会用完成率评价一个人，只会问你今天是不是还想来、是不是还能笑出来。",
      "可系统并没有因此松手。你常常临时改约、在山脚回消息、在她说话时分神去看工作群。关系刚开始的时候，甜和压力总是并排生长。你知道自己是在靠近她，也知道公司一定会把这份靠近变成下一轮更难的取舍。",
    ],
    choices: [
      {
        label: "主动靠近她，尽量把周末真的从公司手里拿回来",
        hint: "感情会长得更快，绩效会开始嫌你分心。",
        effect: { battery: 4, family: 10, kpi: -2, awareness: 1 },
        next: "wedding",
        actionType: "approach",
      },
      {
        label: "慢一点推进关系，先确认自己不是把她当成回血道具",
        hint: "更克制，也更真实。",
        effect: { battery: 2, family: 8, awareness: 2 },
        next: "wedding",
        actionType: "steady",
      },
      {
        label: "把关系往后拖，想等自己更稳一点再认真开始",
        hint: "公司会很满意，代价是她会先习惯没有你。",
        effect: { battery: -4, kpi: 10, family: -5 },
        next: "wedding",
        actionType: "postpone",
      },
    ],
  },
  wedding: {
    chapter: "第八章 / 成家",
    scene: "wedding",
    title: "日子开始有了更多需要被保护的部分",
    type: "关系",
    text: [
      "你和林澜谈了几年恋爱，或者更准确一点说，是在项目周期、周末活动、加班取消和重新约见之间，硬生生把几年拼了出来。后来你们结婚了，或者说，被这座城市允许结婚了。酒席不算铺张，却已经足够让一张信用卡在未来半年里持续发烫。婚礼结束那晚，你们回到新房，窗外是密密匝匝的高楼灯光，像另一个版本的办公区，区别只是这里没有键盘声，只有冰箱轻微的嗡鸣。",
      "她把高跟鞋脱在玄关，脚跟磨出了红印。你帮她擦药的时候，胸口的灯从 65 跳到了 72。那一瞬间你真心觉得，系统也许并不是完全残忍的。至少它承认爱、家和陪伴能让人回电。你甚至有些感激这套设计，感激它没有把人彻底简化成产能机器。",
      "可好设计从来不等于善意。它也可能只是更高级的黏合剂，好让你更愿意继续为那些会发光的东西工作。",
    ],
    choices: [
      {
        label: "答应她，下一步一起把家经营得更完整",
        hint: "你会更投入家庭，也更容易被家庭成本绑住。",
        effect: { family: 12, debt: 10, battery: 2 },
        next: "quiet_winter",
        actionType: "promise",
      },
      {
        label: "暂时压住扩张欲，先稳住现金流",
        hint: "理性一点，但浪漫会淡一些。",
        effect: { family: 6, debt: -4, awareness: 1, battery: 2 },
        next: "quiet_winter",
        actionType: "steady",
      },
      {
        label: "告诉她你得先冲到更高职级，才能给未来兜底",
        hint: "她会理解你，但理解并不等于不受伤。",
        effect: { kpi: 10, battery: -6, family: -6, debt: -2 },
        next: "quiet_winter",
        actionType: "prioritize",
      },
    ],
  },
  quiet_winter: {
    chapter: "第九章 / 灯下",
    scene: "winter",
    title: "幸福最像普通晚饭的时候",
    type: "关系",
    text: [
      "结婚后的最初一段时间，生活甚至称得上温柔。林澜会在你回家之前把厨房灯留一盏，小锅里热着汤，冰箱上用磁贴压着你们下个月想做的事。你们并没有突然过上什么了不起的人生，只是开始拥有一连串安稳的小习惯，而这些习惯恰恰最容易让人误以为，自己终于已经穿过了最难的那一段。",
      "林澜也还在为自己留位置。她会在周末翻招聘，看有没有更适合长期生活的工作，会把想学的课程页面收藏起来，会说等这阵过去了，她想把原来中断的计划重新接上。可每次你临时加班、每次家里多一笔支出、每次需要有人先让一步的时候，往后挪的总是她那一栏。",
      "你们买了更好的床垫、空气净化器和一张能让客厅显得更像样的地毯。生活质量确实在提高，可所有提升都有后续版本: 更贵的清洁、更高的维护、更难退回去的标准。好日子最大的隐蔽性就在这里，它不是靠一次性的大额付款拖住人，而是靠'既然已经过到了这里'来让人不舍得往回走。",
      "可那时的你们都把这些当成暂时的紧绷。你负责往上冲，林澜负责把日子兜住，你们都相信只要再撑一撑，再过一轮，未来就会反过来感谢眼前的忍耐。",
    ],
    choices: [
      {
        label: "答应她，把更完整的家和更稳的未来都一起往前推",
        hint: "感情会更浓，绑定也会更深。",
        effect: { family: 8, debt: 8, battery: 2 },
        next: "nursery",
        actionType: "promise",
      },
      {
        label: "先守住节奏，提醒彼此别把所有愿望都提前兑现",
        hint: "没那么浪漫，却能留一点转身空间。",
        effect: { awareness: 1, debt: -3, family: 4 },
        next: "nursery",
        actionType: "hold-line",
      },
      {
        label: "把林澜那句“等这阵过去”也押到你的下一次晋升上",
        hint: "她会继续等你，可等也会消耗她。",
        effect: { kpi: 8, battery: -5, family: -4 },
        next: "nursery",
        actionType: "延期",
      },
    ],
  },
  nursery: {
    chapter: "第十章 / 未来",
    scene: "nursery",
    title: "连孩子都被写进预算表",
    type: "规划",
    text: [
      "一年后，她告诉你自己怀孕了。那一刻你几乎是本能地笑了，笑完之后却立刻想到育儿成本、产检、月嫂、奶粉、托育、学区和所有还没真正发生、却已经开始排队等你付款的未来。你讨厌自己第一反应是数字，可你知道这不是冷血，而是被这套系统训练得太久了。",
      "公司为高绩效员工提供所谓家庭成长礼包，包含合作医院、月子中心和早教机构折扣。你越看越觉得诡异，仿佛孩子还没出生，就已经被这台机器纳入了一条可预测、可消费、可继续压榨父母的流水线。",
      "她把B超单小心地夹进抽屉，说无论怎样都想把孩子留下。你点头。你知道自己也想。于是你又往前迈了一步，虽然脚下的地板其实一直在往后滑。",
    ],
    choices: [
      {
        label: "给孩子留最好的起点，再紧也先咬牙顶上",
        hint: "家庭值会上升，债务和压力也会一起涨。",
        effect: { family: 14, debt: 14, battery: -3 },
        next: "overtime_season",
        actionType: "build",
      },
      {
        label: "从现在开始做减法，给未来留一点缓冲",
        hint: "你会更早承认生活不是用来展示的。",
        effect: { family: 8, debt: -4, awareness: 1, battery: 2 },
        next: "overtime_season",
        actionType: "trim",
      },
      {
        label: "把希望寄托在下一轮大幅加薪上",
        hint: "你会更坚定地把自己推向公司深处。",
        effect: { kpi: 12, battery: -8, family: 2, debt: 4 },
        next: "overtime_season",
        actionType: "gamble",
      },
    ],
  },
  overtime_season: {
    chapter: "第十一章 / 指标抬升",
    scene: "overtime",
    title: "去年的满分，只够今年的及格",
    type: "加压",
    text: [
      "孩子出生后不久，公司新财年开始。目标表重新下发，去年算优秀的数字如今只够填进“基础达成”那一栏。新经理站在过道中央讲话，说市场环境在变，组织效率必须同步进化；我们不是在压榨大家，而是在帮助大家匹配更大的未来。",
      "你听到这句话时，忽然觉得耳朵发痒。不是因为它新鲜，而是因为它已经太熟了。每一轮加码都被包装成机会，每一次额外索取都被称作成长。你知道那块石头不会停在山顶，它永远都在往下滚，而你唯一能做的只有继续推，直到腿软、手抖、心里没声。",
      "回工位的路上，你看见两个新人在比较电量下降曲线，像在比较健身数据。你想提醒他们，可张开嘴后才发现，自己好像也早就学会了用这种方式看人。",
    ],
    choices: [
      {
        label: "加入冲锋小组，拿最硬的目标换更多奖金",
        hint: "产出会更漂亮，身体会更快折旧。",
        effect: { kpi: 18, battery: -14, debt: -6 },
        next: "weekend_lost",
        actionType: "sprint",
      },
      {
        label: "维持主线产出，尽量保住回家时间",
        hint: "你会更喘得过气，但也更难往上挪。",
        effect: { kpi: 9, battery: -7, family: 4, awareness: 1 },
        next: "weekend_lost",
        actionType: "hold",
      },
      {
        label: "表面配合，暗中记录那些不合常理的耗电点",
        hint: "你开始把自己当成实验样本。",
        effect: { kpi: 7, battery: -8, awareness: 2 },
        next: "weekend_lost",
        actionType: "audit",
      },
    ],
  },
  weekend_lost: {
    chapter: "第十二章 / 周末",
    scene: "weekend",
    title: "你把一个完整的周末留在了公司",
    type: "空耗",
    text: [
      "真正让你起疑的不是某次通宵，而是某个周六下午。整层楼几乎空了，城市在窗外发白发亮，别人可能正带孩子逛超市、在公园遛弯、睡一个补不回来的午觉，而你坐在冷掉的办公室里对着一张永远填不满的表。那种失真感来得很慢，却比疼更深，因为它让你第一次清楚看见自己究竟把什么留在了这里。",
      "周末的办公室没有平日的暴雨键盘声，只有空调和远处电梯偶尔启动的回响。安静反而更残忍，因为它把你和一切被错过的东西都并排摆出来。你想起孩子最近学会拍手，想起伴侣前一天问你明天能不能陪着去打一针疫苗，而你那时说项目临时加码，尽量。",
      "你知道尽量这两个字在现实里是什么意思。它通常意味着做不到，只是比直接拒绝听上去更像好人。",
    ],
    choices: [
      {
        label: "继续坐回工位，把亏掉的周末当成正常成本",
        hint: "你会更习惯失去，也更难回头。",
        effect: { kpi: 8, battery: -8, awareness: 1 },
        next: "health_warning",
        actionType: "normalize",
      },
      {
        label: "提前离开，哪怕回家也已经来不及补完整一天",
        hint: "你至少承认了自己的时间正在被偷走。",
        effect: { family: 6, battery: 3, kpi: -2 },
        next: "health_warning",
        actionType: "leave",
      },
      {
        label: "站在窗边记住这一幕，告诉自己以后别再假装这是值得的",
        hint: "某些清醒并不立刻救命，但会留下痕迹。",
        effect: { awareness: 2, battery: -2 },
        next: "health_warning",
        actionType: "mark",
      },
    ],
  },
  health_warning: {
    chapter: "第十三章 / 身体",
    scene: "clinic",
    title: "疼痛开始有了固定时段",
    type: "损耗",
    text: [
      "最先出问题的是手腕，然后是后颈，再然后是凌晨两点醒来时那种仿佛心脏没跟上呼吸节拍的空拍感。疼痛并不总是剧烈，反而常常稳定到像一个预约好的闹钟，在固定时间提醒你这具身体正在被使用。",
      "公司医务室给你开了肌肉松弛药和一张拉伸示意图，语气很温和，像在帮你修一件高频使用的小家电。医生说，休息当然最好，但你这个阶段应该也很忙吧。他说这话时甚至有点同情，可那种同情没有任何实际效用，它只是让你更明白所有人都知道发生了什么，只是没有人会为了它停下传送带。",
      "你看着药盒，心里第一次生出一个念头：也许这套系统从来就不打算让人完整地活很久，它只需要你在关键的那些年里维持可用。",
    ],
    choices: [
      {
        label: "吃药顶着，把身体当消耗品继续用",
        hint: "最符合环境预期，也最危险。",
        effect: { battery: -10, kpi: 10, awareness: 1 },
        next: "childcare",
        actionType: "push",
      },
      {
        label: "偷时间去做理疗，至少别让自己坏得太快",
        hint: "恢复一点点，就会晚一点坏掉。",
        effect: { battery: 5, kpi: -2, debt: 4, awareness: 1 },
        next: "childcare",
        actionType: "repair",
      },
      {
        label: "把医务室记录拍下来存着",
        hint: "也许总有一天，这些会成为拼图的一部分。",
        effect: { battery: -3, awareness: 2, kpi: 2 },
        next: "childcare",
        actionType: "collect",
      },
    ],
  },
  childcare: {
    chapter: "第十四章 / 家里",
    scene: "childcare",
    title: "回家也不再意味着退出战场",
    type: "冲突",
    text: [
      "孩子一岁半的时候，家里最常出现的声音是尖叫、玩具砸地和你手机不断震动的提示音。你回到家时，地上全是积木、塑料恐龙和那台会发声的电子琴。孩子把积木垒起来，又推倒，再重新垒，再推倒。你站在门口，明明知道自己应该蹲下来，却像被门框钉住一样动不了。",
      "妻子从厨房出来，围裙上有水渍，眼下同样很重。她看你的眼神里第一次出现了陌生，不是愤怒，也不是委屈，而是那种突然意识到身边的人正在变成另一个物种的怔住。你想解释工作、房贷、项目和不敢停下来的原因，可那些词在喉咙里堆成一团硬块。",
      "这时孩子把一块积木砸到了你鞋边。那声音非常轻，却像一根细针扎进了你紧绷了一整年的神经。",
    ],
    choices: [
      {
        label: "忍着头痛蹲下去，陪孩子把积木重新搭好",
        hint: "这一刻会更累，但家可能还接得住你。",
        effect: { battery: -6, family: 16, kpi: -4 },
        next: "wife_shift",
        actionType: "guard",
      },
      {
        label: "先回工作消息，想着过会儿再说",
        hint: "你把最烫的火先捧回了工作。",
        effect: { battery: -5, family: -10, kpi: 7 },
        next: "wife_shift",
        actionType: "deflect",
      },
      {
        label: "压不住火气，冲着孩子和伴侣吼出来",
        hint: "这一吼会把很多隐忍瞬间撕开。",
        effect: { battery: -10, family: -22, awareness: 1 },
        next: "wife_shift",
        actionType: "burst",
      },
    ],
  },
  wife_shift: {
    chapter: "第十五章 / 她的那一页",
    scene: "ledger",
    title: "她也有一条一直在后退的线",
    type: "对视",
    text: [
      "那场争吵并没有立刻结束。孩子哭累后睡着了，客厅却没有恢复平静，只有被踢倒的积木、没关的辅食机和桌上一层已经冷掉的饭菜。林澜坐回餐桌边，把电脑重新打开，屏幕上不是工作的聊天窗口，而是一张她自己一点点记出来的生活表。",
      "那张表里记的不只是房贷、车贷和信用卡。还有她推掉的面试、改到下个月的课程、因为没人接手而放弃的出差机会、产后一直没去复查的预约、为了省时间改成外卖的晚饭、为了让你少分神而没说出口的很多次害怕。你第一次意识到，原来她也有一条一直在掉电的线，只是她胸口没有灯，所以你一直假装没看见。",
      "林澜没有提高声音。她只是很慢地说，自己不是要和你比谁更累，她只是不能再一个人替这个家把所有裂缝都悄悄抹平。她曾经比你更相信“生活会越来越好”这句话，因为她是真的在用一顿顿饭、一笔笔预算和一次次让步把它做出来。现在她终于开始怀疑，如果所有提升都只靠一个人继续燃烧，那它到底算不算好。",
      "你看着她说这些的时候，忽然明白她的人物弧光并不是从温柔走向尖刻，而是从愿意独自消化一切，走到终于不肯再替这个系统做免费缓冲。她不是站到你的对立面了，她只是终于站回了自己那边。",
    ],
    choices: [
      {
        label: "坐下来把她那张表看完，先承认这些年她失去的部分",
        hint: "这会很疼，但能让你们重新站到同一边。",
        effect: { family: 12, awareness: 1, battery: -2 },
        next: "salary_gap",
        actionType: "listen",
      },
      {
        label: "避开她的目光，先回工作消息，假装今晚还没到非谈不可",
        hint: "短暂躲开冲突，也会把冲突养得更大。",
        effect: { kpi: 6, family: -10, battery: -4 },
        next: "salary_gap",
        actionType: "avoid",
      },
      {
        label: "把问题全归到钱不够上，继续相信只要涨薪就能补回一切",
        hint: "最省事的解释，往往最伤人。",
        effect: { debt: -2, awareness: -1, family: -14, battery: -5 },
        next: "salary_gap",
        actionType: "甩锅",
      },
    ],
  },
  salary_gap: {
    chapter: "第十六章 / 账单",
    scene: "salary",
    title: "数字开始对着你叫",
    type: "压力",
    text: [
      "吵架发生得并不戏剧化。没有摔门，也没有谁真的想离开。只是房贷、车贷、信用卡、孩子早教班、尿不湿和体检单一张张摆上桌之后，你们都很难再维持体面。她说你永远在加班，回到家只剩下沉默和火气；你想说自己也是被推着走，可话一出口却像推责。",
      "最糟糕的不是账单本身，而是你终于发现再怎么努力，它们也不会像清单一样被一项项划掉。它们会升级、叠加、衍生出新的需求。就像 KPI 一样，它们不是终点，而是持续性的收割结构。你们越努力维持生活完整，系统就越能确认你们有更多可压榨的部分。",
      "那天夜里你坐在床边，看着胸口的灯从黄绿色跳到更深一点的暗色。没有人在碰你，没有任何任务在结算，可它还是自己往下掉。你明白了，情绪崩溃本身也算消耗。",
    ],
    choices: [
      {
        label: "咬牙告诉自己，只要再熬过这一季就会好",
        hint: "这是系统最喜欢你说的话。",
        effect: { battery: -8, kpi: 9, awareness: 0 },
        next: "rumor_thread",
        actionType: "endure",
      },
      {
        label: "把家里的账和公司的账放在一起重新算",
        hint: "你开始意识到两者其实是一张表。",
        effect: { awareness: 2, family: 6, battery: -3 },
        next: "rumor_thread",
        actionType: "reframe",
      },
      {
        label: "把最后希望押给那扇总有人进去的门",
        hint: "你开始主动看向蓝光，而不是回避它。",
        effect: { awareness: 1, kpi: 12, battery: -9, debt: -4 },
        next: "rumor_thread",
        actionType: "fixate",
      },
    ],
  },
  rumor_thread: {
    chapter: "第十七章 / 传闻",
    scene: "rumor",
    title: "没有人回来过，但大家都在谈它",
    type: "暗流",
    text: [
      "办公区尽头那扇胡桃木门开始频繁出现在你的视线里。你看到有人椅子发蓝，被平稳地送过去；你听见周围的人压低声音，说那是高阶进化室，是公司给顶级完成者的奖励，说进去之后电量上限会提高，说回来的人会被调去更核心的层级，所以才见不到。",
      "这些解释彼此并不严密，可所有人都愿意相信。因为只要相信门后是奖励，那眼前的痛苦就还能被包装成投资。你留意到说这话的人总是带着饥饿一样的眼神，那不是羡慕，而是某种被长期饥饿训练出来的条件反射，仿佛只要盯得够久，自己也有资格分到一点什么。",
      "周哥有一次喝咖啡时轻声说过一句，最危险的不是门，是大家都希望门真的是他们想的那样。他说完立刻闭嘴，像被自己吓了一跳。",
    ],
    choices: [
      {
        label: "追问周哥，到底有没有人真的回来过",
        hint: "你会听见一个含糊但足够可怕的答案。",
        effect: { awareness: 2, battery: -2 },
        next: "deadline",
        actionType: "press",
      },
      {
        label: "把传闻先放下，眼前只有结算日更要命",
        hint: "你暂时不追真相，先追奖金。",
        effect: { kpi: 8, battery: -6 },
        next: "deadline",
        actionType: "ignore",
      },
      {
        label: "去找清洁工和后勤，听听底层版本的故事",
        hint: "知道脏活路径的人，往往不是高层。",
        effect: { awareness: 2, battery: -3 },
        next: "janitor_tip",
        actionType: "listen",
      },
    ],
  },
  deadline: {
    chapter: "第十八章 / 冲线",
    scene: "deadline",
    title: "还差 17%",
    type: "临界",
    text: (state) => [
      `你回到工位时，屏幕上的 KPI 已经爬到 ${state.kpi}% 。结算只剩三天，房贷、车贷、信用卡和孩子的下个月费用在脑子里一张张贴满墙。每一个数字都在冲你叫，像有人把账单贴在墙上，再一张张朝你脸上掷石头。`,
      `胸口电量现在是 ${state.battery}% 。如果它继续往下掉，你可能先于账单停机。可如果 KPI 冲不上去，那些账单就会提前来追你。你知道自己其实已经没有哪种选择是真的轻松了，只是有些选择会让坠落发生得更慢一点。`,
      "而走廊尽头，那扇胡桃木门还静静立着。偶尔有椅子亮起深海蓝，把人送进去，再也没有回来。",
    ],
    choices: [
      {
        label: "灌下冷咖啡，再拼三天把 KPI 冲满",
        hint: "最快的路，也最像陷阱。",
        effect: (state) => {
          state.battery -= 18;
          state.kpi = 100;
        },
        next: (state) => (state.battery <= 21 ? "blue_door" : "promotion_hold"),
        actionType: "overdrive",
      },
      {
        label: "请一天假，回家睡一觉，把话和家里说开",
        hint: "KPI 会掉，但你也许能抢回一点完整的人。",
        effect: { battery: 12, family: 10, kpi: -8, debt: 5 },
        next: "rest_path",
        actionType: "retreat",
      },
      {
        label: "顺着那些蓝光，先去调查那扇门",
        hint: "这不安全，但它最接近真相。",
        effect: { battery: -8, awareness: 2 },
        next: "investigate",
        actionType: "infiltrate",
      },
    ],
  },
  investigate: {
    chapter: "第十九章 / 走廊",
    scene: "corridor",
    title: "门缝里的机油味",
    type: "侦察",
    text: [
      "你借着送文件和倒咖啡的空档，在走廊尽头来回徘徊。门缝里偶尔会钻出一股很淡的机油味，和办公区的速溶咖啡气味完全不是一个世界。你站得越久，越觉得这扇门像是在呼吸，里面有什么庞大的东西在稳定运转，而办公室只不过是它的外壳。",
      "这时一把刚亮蓝光的椅子从你身边经过。椅子上的男人比你年长几岁，领口汗湿了，眼神却空得像一张被水泡烂的纸。他明明还活着，脸上却已经没有任何抵抗的表情。那不是认命，更像是一种被提前抽空的顺从。",
      "门把手转动时，你听见里面有低频的轰鸣。不是空调，不是电梯，也不是办公室应该有的任何声音。",
    ],
    choices: [
      {
        label: "尾随那把椅子，在门开时挤进去",
        hint: "你会看到真相，也可能在那一刻就被吞掉。",
        effect: { battery: -6, awareness: 1 },
        next: "secret_corridor",
        actionType: "shadow",
      },
      {
        label: "退回来，先找懂门路的人确认",
        hint: "有些真相需要别人先给你拼上轮廓。",
        effect: { battery: -2, awareness: 1 },
        next: "janitor_tip",
        actionType: "regroup",
      },
      {
        label: "先拍下门和蓝椅子，再回工位伪装正常",
        hint: "你想带着证据活得更久一点。",
        effect: { awareness: 2, kpi: 4, battery: -3 },
        next: "secret_corridor",
        actionType: "document",
      },
    ],
  },
  janitor_tip: {
    chapter: "第十九章 / 线索",
    scene: "janitor",
    title: "知道的人只会低声说话",
    type: "暗线",
    text: [
      "清洁工没有正面回答你。他只是看了一眼你胸口的灯，说别等它掉到 21%。这句话说完后，他把拖把往门口一横，像是不经意挡了监控半秒，又像是在替你争取一点微不足道的喘息时间。",
      "他继续拖地，声音压得很低，说想留证据，就别一个人逞英雄；想活着离开，就先想清楚家里还有没有人在等你。你问他门后是什么，他停顿了一下，只回了一句，不是办公室，也不是升职，剩下的你最好自己判断要不要知道。",
      "那一瞬间你忽然明白，真正可怕的从来不只是秘密本身，而是连底层维护秘密的人都已经默认了它的存在。",
    ],
    choices: [
      {
        label: "趁这点空档去看门后的世界",
        hint: "你会离真相更近，也离报废更近。",
        effect: { awareness: 1, battery: -4 },
        next: "secret_corridor",
        actionType: "dash",
      },
      {
        label: "先回家，把不对劲的一切告诉伴侣",
        hint: "也许最先该卷进决策的人，本来就不是公司。",
        effect: { family: 12, battery: 4, awareness: 1 },
        next: "rest_path",
        actionType: "confide",
      },
    ],
  },
  secret_corridor: {
    chapter: "第二十章 / 门后前室",
    scene: "secret",
    title: "仪式感只是工业流程的外壳",
    type: "逼近",
    text: [
      "你在门后看见的不是高管办公层，而是一段过长的维护走廊。地面铺着廉价但厚实的灰色地毯，墙内却有持续不断的低频震动传上来。那震动很像重型机器在隔层后运转，只是被办公室的装潢刻意消过音，削成了一个不该引起警觉、却仍让人脊背发麻的频率。",
      "走廊的尽头还有一道内门，门缝更宽，机油味更重。墙边整齐放着几辆空椅子，金属底盘擦得发亮，像等待上菜前排好的餐盘。你忽然想到公司内网那些说法，说这是进化、是升级、是更高权限，可站在这里时，任何一个词都不像奖励，它们只像包装纸。",
      "你胸口的灯在这时突然闪了一下。不是下降，而是某种接近警示的短促脉冲。系统像是在提醒你，自己已经走到了不该靠近的地方。",
    ],
    choices: [
      {
        label: "推开内门，看清里面到底在运行什么",
        hint: "不知道一定会被吃掉，知道未必能活。",
        effect: { battery: -5, awareness: 1 },
        next: "factory_peek",
        actionType: "breach",
      },
      {
        label: "先退回去，和家里把去留说死",
        hint: "你开始把真相和活路放在一起衡量。",
        effect: { battery: 2, family: 8 },
        next: "rest_path",
        actionType: "retreat",
      },
      {
        label: "偷记门禁和路线，准备带证据再来一次",
        hint: "你想活得久一点，再把刀捅得深一点。",
        effect: { awareness: 2, battery: -2 },
        next: "factory_peek",
        actionType: "map",
      },
    ],
  },
  rest_path: {
    chapter: "第二十章 / 回家",
    scene: "dawn",
    title: "把话摊开，比把账摊开更难",
    type: "修复",
    text: (state) => [
      `你终于睡了一个整觉，或者说，睡得像是从水底浮上来。现在的电量回到 ${state.battery}% ，不算高，但终于不是一直往下掉。醒来之后你发现家里并没有立刻变好，碗还是要洗，奶粉还是要买，房贷还是会按时来敲门，只是人终于能坐下来把自己说清楚了。`,
      "你和伴侣第一次把数字、委屈、恐惧和羞耻都放在桌上。你说自己不是不想回家，而是不敢停；她说她最害怕的不是穷，而是你正在一点点变成一个只剩下工作姿态的人。你们都沉默了很久，因为这句话太准了，准得像把灯光直接照进了灰尘里。",
      "你还把那扇门、蓝椅子、机油味和清洁工的话都说了出来。她起初以为你是太累了，后来又觉得你不像是在胡说，因为一个真在胡说的人，通常不会描述得这么冷静。",
    ],
    choices: [
      {
        label: "决定做减法，把生活缩回能呼吸的尺寸",
        hint: "会失去很多体面，也可能重新拿回人的轮廓。",
        next: "marriage_talk",
        actionType: "shrink",
      },
      {
        label: "回公司谈降薪换时间，先别让家散掉",
        hint: "不自由，但先保命。",
        next: "marriage_talk",
        actionType: "negotiate",
      },
      {
        label: "带着家里的共识，再回去把真相查清楚",
        hint: "如果还要待在系统里，至少别继续闭着眼。",
        condition: (state) => state.awareness >= 2,
        next: "marriage_talk",
        actionType: "return",
      },
    ],
  },
  marriage_talk: {
    chapter: "第二十一章 / 去留",
    scene: "dawn",
    title: "你们第一次把“离开”当成真选项",
    type: "决断",
    text: [
      "你们坐在天快亮的客厅里，把所有可能性一条条列出来。卖车、换房、把孩子送去更便宜的托育、你换工作、她晚一点恢复职业计划，甚至搬离这座城市。每一种方案都很难看，都不像曾经想象里的成年生活，可它们至少真实。真实这件事突然变得很珍贵，因为公司给出的那套上升剧本虽然体面，却越来越像一张彩印的假门票。",
      "她问你最怕什么。你本来想说怕穷，怕掉下去，怕别人看不起，最后却发现自己真正怕的是有一天站在孩子面前时，连吼叫都不是出于情绪，而只是某种程序性反应。你怕自己彻底变成公司训练成功的那种人，连回家都像在打卡。",
      "于是你们终于把决定从面子拉回到了命上。不是哪条路更好看，而是哪条路还像人走的。",
    ],
    choices: [
      {
        label: "带着家收缩生活，先保住人还在家里",
        hint: "你未必赢，但至少不会继续自动下沉。",
        next: (state) => (state.family >= 60 ? "ending_home" : "ending_tradeoff"),
        actionType: "choose-home",
      },
      {
        label: "连夜准备离开这座城市，不再给系统第二次机会",
        hint: "你未必救得了别人，但能决定自己别被压成方块。",
        next: (state) => (state.family >= 55 ? "ending_escape" : "ending_late_escape"),
        actionType: "flee",
      },
      {
        label: "决定赌最后一把，把门后的世界公之于众",
        hint: "要么把真相打出去，要么一起被按回沉默里。",
        condition: (state) => state.awareness >= 3,
        next: "factory_peek",
        actionType: "expose",
      },
    ],
  },
  promotion_hold: {
    chapter: "第十八章 / 选中",
    scene: "rumor",
    title: "差一点就要被抬走",
    type: "蓝光",
    text: (state) => [
      `KPI 被你硬生生撞到 100% ，胸口电量还剩 ${state.battery}% 。没有闪红，但你的手已经开始不听使唤。你想端起杯子，咖啡却在里面晃，像小范围地震，而震源就是你自己。`,
      "工位下方亮起你见过无数次的深海蓝。椅子自己动起来，缓慢、稳定、带着让人误以为自己被奖励的仪式感。办公区所有人都在看你，那些目光里有羡慕、有畏惧、有饥饿，还有一种更深的东西：庆幸今天被推走的不是自己。",
      "你突然意识到，所谓成功者展示，本质上也是一次安抚。系统需要大家看着某个人被送走，并相信那是奖赏，这样其他人才能继续甘愿坐下。",
    ],
    choices: [
      {
        label: "坐稳，接受这场“晋升”",
        hint: "你选择相信公司给出的那套叙事。",
        next: "ending_scrap",
        actionType: "submit",
      },
      {
        label: "在门前跳下椅子，赌自己的腿还能动",
        hint: "只有觉醒够高的人，才会在这一刻反应过来。",
        condition: (state) => state.awareness >= 3,
        effect: { battery: -6, awareness: 1 },
        next: "factory_peek",
        actionType: "break",
      },
      {
        label: "回头向同事求救",
        hint: "他们都见过这把蓝椅子，也都知道沉默最安全。",
        next: "ending_applause",
        actionType: "call",
      },
    ],
  },
  blue_door: {
    chapter: "第十八章 / 门槛",
    scene: "threshold",
    title: "23% 的门槛",
    type: "临界",
    text: (state) => [
      `礼花在屏幕里炸开时，你胸口只剩 ${Math.max(state.battery, 0)}% 。黄绿色的灯不再闪，但它离那条红线只差一步。你的身体像被拧干了水的毛巾，连害怕都只剩薄薄一层。`,
      "蓝椅子还是来了。系统并不等你跌到 20% 才行动，它会在你还有最后一点呼吸和顺从的时候，把你处理得最干净。胡桃木门在你面前缓缓打开，像一个布置得极其讲究的谎言，连木头反光都带着一种像教堂一样的仪式感。",
      "你忽然觉得好笑。原来一个人把一辈子的电量换成房贷、账单和家庭稳定之后，最后收到的奖励竟然真的是被更体面地送去报废。",
    ],
    choices: [
      {
        label: "让椅子把我送进去",
        hint: "你太累了，连恐惧都剩不下多少。",
        next: "ending_scrap",
        actionType: "collapse",
      },
      {
        label: "抓住门框，爬也要看一眼里面是什么",
        hint: "知道真相未必能活，不知道一定会被吃掉。",
        condition: (state) => state.awareness >= 2,
        effect: { battery: -4, awareness: 1 },
        next: "factory_peek",
        actionType: "peek",
      },
      {
        label: "闭上眼，告诉自己至少还能保住房贷",
        hint: "自我安慰是系统最便宜的麻醉剂。",
        next: "ending_upgrade_lie",
        actionType: "numb",
      },
    ],
  },
  factory_peek: {
    chapter: "第二十二章 / 真相",
    scene: "factory",
    title: "厂房里没有高管办公室",
    type: "暴露",
    text: [
      "门后不是香槟，也不是升职。是一个巨大的厂房，日光灯白得没有一丝阴影，空气里全是机油、铁锈和某种腐烂发甜的味道。你的脚下是人的身体堆成的斜坡，胸口的灯大多停在 21% 左右，像一群被钉在工业流程里的萤火虫。",
      "直到这一刻你才真正把所有碎片接起来：系统不会等人掉到 20% 才行动，因为那时人已经动不了了，回收成本更高。它会在 21% 左右提前处理，在你还活着、但已经无力反抗的时候把你剥离出去。多干净的名词，多高效的流程，多适合写进年报的一句资产优化。",
      "墙上贴着一张被油污浸透的纸，上面只有一句话: 废品回收，100 元/吨。你突然想起自己买过的表、孩子的早教班、那套转角沙发、岛台厨房、每一次咬牙签下的分期和承诺。原来它们并不是你努力生活的证明，而是系统确认你会继续忍下去的凭据。",
    ],
    choices: [
      {
        label: "拍下证据，立刻发到公共频道和外网",
        hint: "把真相扔出去，也把自己暴露出去。",
        next: (state) => (state.awareness >= 4 ? "ending_expose" : "ending_silenced"),
        actionType: "broadcast",
      },
      {
        label: "先逃，带着家人离开这座城市",
        hint: "也许救不了所有人，但能决定自己别被压成方块。",
        next: (state) => (state.family >= 55 ? "ending_escape" : "ending_late_escape"),
        actionType: "escape",
      },
      {
        label: "去拉警报，哪怕代价是把自己留在这里",
        hint: "不稳妥，却可能是最亮的那一次发光。",
        next: (state) => (state.battery >= 22 ? "ending_spark" : "ending_scrap"),
        actionType: "alarm",
      },
    ],
  },
  ending_scrap: {
    chapter: "结局 / A",
    scene: "factory",
    title: "银灰色方块",
    ending: "结局 A / 废品回收",
    endingCode: "A",
    type: "终局",
    text: [
      "椅子把你送进胡桃木门。厂房、肉山、液压墙、A4 纸上的价目表，一样都没有因为你完成了 KPI 而缺席。你曾经以为自己是在用生命换更好的生活，直到最后才知道，系统从头到尾只是把你当成一块更值钱的原料。",
      "它会在你还剩 21% 时提前处理资产，因为那样回收成本更低。你的表还在走，秒针一格一格地跳，可胸口的光已经先熄了。所谓高阶进化、升维通道、核心权限，不过是给流水线贴上的丝绒标签，好让下一批人继续心甘情愿坐下。",
      "卡车把一百二十个银灰色方块拉上公路。风吹过铁牌，上面写着: 废品回收，100 元/吨。",
    ],
    choices: [{ label: "重新开始", hint: "换一种活法，再试一次。", next: "start", actionType: "restart" }],
  },
  ending_upgrade_lie: {
    chapter: "结局 / B",
    scene: "blue",
    title: "奖励叙事",
    ending: "结局 B / 进化谎言",
    endingCode: "B",
    type: "终局",
    text: [
      "你闭上眼，把那扇门想象成奖金、晋升和电量上限。这个想象帮你撑过了最后几秒，也帮系统省下了最后一丁点反抗成本。你并不是愚蠢，只是太累了，累到更愿意相信一个漂亮结论，也不愿再承受一次真相的重量。",
      "真相不会因为你不去看就变得更温和。它只是会在你看不见的时候，把你更高效地处理掉。门外的人会继续谈起你，说你运气真好，说你被选中了，说也许再熬一熬下一个就轮到自己。",
      "没有人回来纠正他们。于是谎言得以继续工作，像另一种形式的企业文化。",
    ],
    choices: [{ label: "回到起点", hint: "下一次，也许你会先怀疑那句“幸运”。", next: "start", actionType: "restart" }],
  },
  ending_applause: {
    chapter: "结局 / C",
    scene: "blue",
    title: "所有人都看着你",
    ending: "结局 C / 沉默掌声",
    endingCode: "C",
    type: "终局",
    text: [
      "你回头求救，可办公区里只有低头、躲闪和假装忙碌的键盘声。没有人站起来，因为每个人都在把自己的 21% 往后拖。最残忍的并不是门，而是大家都知道门后有问题，却仍然需要有人被送进去，好证明自己今天还没轮到。",
      "你忽然明白，这家公司真正擅长的从来不只是压榨，而是把压榨分摊成所有人的沉默。每一个幸存到今天的人，都在无意中帮着流程继续转。不是因为他们坏，而是因为他们也被绑着，也在怕，也在算，也在想只要今天别轮到自己就好。",
      "你不是被某一个人放弃的，而是被一整套运转良好的沉默放弃的。",
    ],
    choices: [{ label: "重启故事", hint: "也许下一次，先救自己的喉咙。", next: "start", actionType: "restart" }],
  },
  ending_silenced: {
    chapter: "结局 / D",
    scene: "factory",
    title: "没能发出去的照片",
    ending: "结局 D / 证据消失",
    endingCode: "D",
    type: "终局",
    text: [
      "你拍下了厂房，也按下了发送。可权限、监控、保安和系统反制比你的手指更快。消息只在极少数人的屏幕上闪了一秒，就像火柴刚亮就被踩灭。你原本以为真相只要被看见就会自动生效，后来才发现，真相也需要传播通道、需要信任成本、需要人们有余力去承受它。",
      "公司内部很快发出一条故障公告，解释那些画面只是培训测试素材。更多人选择相信公告，因为相信更便宜。便宜到不用改变任何生活，不用重新解释自己的努力，也不用承认自己可能已经在传送带上站了太久。",
      "你没有活着走出门后世界，真相却在少数人的脑子里扎下了一根钉子。它暂时还撬不开这套系统，但至少开始让人不那么容易睡着。",
    ],
    choices: [{ label: "从头再来", hint: "也许下次不该一个人发。", next: "start", actionType: "restart" }],
  },
  ending_escape: {
    chapter: "结局 / E",
    scene: "dawn",
    title: "小一点的生活",
    ending: "结局 E / 带着家离开",
    endingCode: "E",
    type: "终局",
    text: [
      "你没有回工位，而是回家。你们连夜收拾行李，退掉更体面的计划，搬去更小、更远、但窗子真能照进日光的地方。你第一次把“降级”看成了褒义词，因为它至少意味着你还在主动做决定，而不是继续等系统替你决定什么时候该被处理。",
      "账单还是难看，生活也没有突然温柔。可胸口的灯第一次不再被公司定义用途。它只是慢慢亮着，亮给晚饭、亮给孩子的笑、亮给那些没有 KPI 的下午，也亮给一个不需要胡桃木门的明天。",
      "你没救下所有人，但你确实从传送带上跳了下来。",
    ],
    choices: [{ label: "回到序章", hint: "这一回你活了下来。", next: "start", actionType: "restart" }],
  },
  ending_late_escape: {
    chapter: "结局 / F",
    scene: "dawn",
    title: "门外还是风",
    ending: "结局 F / 太晚的逃离",
    endingCode: "F",
    type: "终局",
    text: [
      "你拼命逃出了那扇门，可回到家时，家已经先一步散掉了。伴侣带着孩子离开，只留下桌上的账单和一句你早该停下来的留言。你终于摆脱了那套系统，却没能保住它在你身上提前撕开的裂口。",
      "你活着，可活得像一块刚从压缩机里滚出来又没压实的废料。还带着人的形状，也带着所有没来得及补的缝。安静第一次真正降临到你身边，但它不是奖赏，而是一种迟到的宽恕。",
      "风吹进空房子，你终于听不见提示音了。可某些回声还会留很久。",
    ],
    choices: [{ label: "重新开局", hint: "有些门，要在关系碎掉前先关上。", next: "start", actionType: "restart" }],
  },
  ending_home: {
    chapter: "结局 / G",
    scene: "dawn",
    title: "不再上涨的曲线",
    ending: "结局 G / 人还在家里",
    endingCode: "G",
    type: "终局",
    text: [
      "你辞掉了那份总在上涨指标的工作，也放弃了很多看起来很值钱的东西。房子缩小了，车没了，岛台厨房只剩照片里的样子。你们的生活不再像任何广告，也不像公司推送的理想模板，但它开始重新像生活，而不是一组等待支付的升级包。",
      "你开始能在孩子把积木推倒时蹲下来，也能在伴侣看向你时，还是她认识的那个人。胸口的灯不再满格，却终于不只是被消耗。你甚至会在某些很普通的时刻觉得平静，比如周末晾衣服时，听见楼下有人买菜、听见锅里水开、听见孩子在客厅自己笑。",
      "你没有赢过系统，但你把自己从系统的定义里拽出来了一部分。这已经很难，也已经很真。",
    ],
    choices: [{ label: "再玩一遍", hint: "换一种选择，看另一条命运。", next: "start", actionType: "restart" }],
  },
  ending_tradeoff: {
    chapter: "结局 / H",
    scene: "dawn",
    title: "先不死机",
    ending: "结局 H / 降档生存",
    endingCode: "H",
    type: "终局",
    text: [
      "你没有彻底离开系统，只是把档位往下拨了一格。奖金少了，晋升没了，别人眼里你像是在主动掉队。可你终于能按时回家，偶尔能睡满六小时，也终于看见自己胸口的光不是只在任务完成时才有意义。",
      "你当然还会焦虑，还会算账，还会在某些夜里怀疑自己是不是错过了更大的机会。但这一次，那些怀疑不再是系统单方面灌进来的声音，而是你自己在权衡。能自己权衡，本身就是一种恢复。",
      "这不是童话式胜利，但它是一个成年人艰难做出的保命决定。",
    ],
    choices: [{ label: "回到起点", hint: "下一次，也许你会更早做这个决定。", next: "start", actionType: "restart" }],
  },
  ending_expose: {
    chapter: "结局 / I",
    scene: "factory",
    title: "把光打出去",
    ending: "结局 I / 真相外泄",
    endingCode: "I",
    type: "终局",
    text: [
      "这一次，照片发出去了。公共频道炸开，公司外网也有人截到了那张写着“废品回收，100 元/吨”的纸。有人删除，有人辟谣，也有人开始集体离席。最重要的是，第一次有人把那扇门从神话改写成了证据，把奖励叙事从企业故事拉回了工业现实。",
      "你未必全身而退，但门后世界第一次被更多人看见。那种惨白灯光终于照到了办公区，照到了所有人假装没看见的脸上。有人仍然选择沉默，因为沉默更稳；也有人第一次意识到，自己一直以为的上升通道，原来只是回收流程里的高级包装。",
      "系统不会因为一次曝光立刻崩塌，可有些门一旦被说出，就再也关不回完全无声。",
    ],
    choices: [{ label: "重开周目", hint: "你已经让真相长出了一次声音。", next: "start", actionType: "restart" }],
  },
  ending_spark: {
    chapter: "结局 / J",
    scene: "factory",
    title: "最后一次发亮",
    ending: "结局 J / 警报时刻",
    endingCode: "J",
    type: "终局",
    text: [
      "你扑向警报阀门，剩下那点电量像被一次性掰开。厂房里第一次响起不是机器轰鸣的声音，而是足以穿透办公区的警报。那警报粗暴、刺耳、毫无美感，却比公司所有关于未来和成长的语言都更接近真实。",
      "有人跑了，有人摔下蓝椅子，有人终于在胡桃木门外停住脚步。你自己没能完整离开，可你把那套安静运转的流程撞出了一道裂口。流程最怕的不是愤怒，而是被打断，因为只要被打断，人就有机会重新抬头看一眼它到底在做什么。",
      "胸口的灯灭前，你第一次觉得它不是被系统抽走，而是被你亲手用掉了。",
    ],
    choices: [{ label: "再次开始", hint: "裂缝已经存在，下一次也许会更大。", next: "start", actionType: "restart" }],
  },
};

const titleScreenEl = document.getElementById("title-screen");
const gameShellEl = document.getElementById("game-shell");
const continueButtonEl = document.getElementById("continue-button");
const newGameButtonEl = document.getElementById("new-game-button");
const galleryButtonEl = document.getElementById("gallery-button");
const galleryTopButtonEl = document.getElementById("gallery-top-button");
const menuButtonEl = document.getElementById("menu-button");
const helpButtonEl = document.getElementById("help-button");
const restartButtonEl = document.getElementById("restart-button");
const continueHintEl = document.getElementById("continue-hint");
const viewportFrameEl = document.getElementById("viewport-frame");
const sceneImageEl = document.getElementById("scene-image");
const chapterLabelEl = document.getElementById("chapter-label");
const sceneTitleEl = document.getElementById("scene-title");
const sceneQuoteEl = document.getElementById("scene-quote");
const batteryAlertEl = document.getElementById("battery-alert");
const storyTextEl = document.getElementById("story-text");
const choiceListEl = document.getElementById("choice-list");
const choiceOverlayEl = document.querySelector(".choice-overlay");
const endingOverlayEl = document.getElementById("ending-overlay");
const endingCodeEl = document.getElementById("ending-code");
const endingTitleCardEl = document.getElementById("ending-title-card");
const endingVerdictEl = document.getElementById("ending-verdict");
const endingStatsEl = document.getElementById("ending-stats");
const endingEpitaphEl = document.getElementById("ending-epitaph");
const galleryModalEl = document.getElementById("gallery-modal");
const galleryListEl = document.getElementById("gallery-list");
const closeGalleryButtonEl = document.getElementById("close-gallery-button");
const helpModalEl = document.getElementById("help-modal");
const closeHelpButtonEl = document.getElementById("close-help-button");
const heroStateEl = document.getElementById("hero-state");
const endingRestartButtonEl = document.getElementById("ending-restart-button");
const endingMenuButtonEl = document.getElementById("ending-menu-button");
const endingGalleryButtonEl = document.getElementById("ending-gallery-button");

const stateEls = {
  batteryValue: document.getElementById("battery-value"),
  kpiValue: document.getElementById("kpi-value"),
  familyValue: document.getElementById("family-value"),
  awarenessValue: document.getElementById("awareness-value"),
  debtValue: document.getElementById("debt-value"),
  batteryBar: document.getElementById("battery-bar"),
  kpiBar: document.getElementById("kpi-bar"),
  familyBar: document.getElementById("family-bar"),
  awarenessBar: document.getElementById("awareness-bar"),
  debtBar: document.getElementById("debt-bar"),
};

let gameState = initialState();
let currentNodeId = "start";
let unlockedEndings = loadEndings();
let lastRenderedChoices = [];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function normalizeState() {
  gameState.battery = clamp(gameState.battery, 0, 100);
  gameState.kpi = clamp(gameState.kpi, 0, 100);
  gameState.family = clamp(gameState.family, 0, 100);
  gameState.awareness = clamp(gameState.awareness, 0, 5);
  gameState.debt = clamp(gameState.debt, 0, 100);
}

function getNode(nodeId) {
  return nodes[nodeId];
}

function getText(node) {
  return typeof node.text === "function" ? node.text(gameState) : node.text;
}

function getChoices(node) {
  return node.choices.filter((choice) => {
    if (!choice.condition) {
      return true;
    }
    return choice.condition(gameState);
  });
}

function getNext(choice) {
  return typeof choice.next === "function" ? choice.next(gameState) : choice.next;
}

function applyEffect(effect) {
  if (!effect) {
    return;
  }

  if (typeof effect === "function") {
    effect(gameState);
    normalizeState();
    return;
  }

  Object.entries(effect).forEach(([key, delta]) => {
    if (typeof gameState[key] === "number") {
      gameState[key] += delta;
    }
  });
  normalizeState();
}

function simulateEffect(effect) {
  const snapshot = { ...gameState };
  effect(snapshot);
  return {
    battery: clamp(snapshot.battery - gameState.battery, -100, 100),
    kpi: clamp(snapshot.kpi - gameState.kpi, -100, 100),
    family: clamp(snapshot.family - gameState.family, -100, 100),
    awareness: clamp(snapshot.awareness - gameState.awareness, -5, 5),
    debt: clamp(snapshot.debt - gameState.debt, -100, 100),
  };
}

function deltaPreview(effect) {
  if (!effect) {
    return [];
  }

  const previewTarget = typeof effect === "function" ? simulateEffect(effect) : effect;
  const labels = {
    battery: "电量",
    kpi: "KPI",
    family: "家庭",
    awareness: "觉醒",
    debt: "债务",
  };

  return Object.entries(previewTarget)
    .filter(([, delta]) => delta !== 0)
    .map(([key, delta]) => `${labels[key]} ${delta > 0 ? "+" : ""}${delta}`);
}

function saveGame() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      currentNodeId,
      gameState,
      savedAt: new Date().toISOString(),
    }),
  );
}

function loadGame() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return false;
    }
    const parsed = JSON.parse(raw);
    if (!parsed || !nodes[parsed.currentNodeId]) {
      return false;
    }
    currentNodeId = parsed.currentNodeId;
    gameState = { ...initialState(), ...parsed.gameState };
    normalizeState();
    return true;
  } catch (error) {
    return false;
  }
}

function loadEndings() {
  try {
    const raw = localStorage.getItem(ENDING_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    return [];
  }
}

function saveEndings() {
  localStorage.setItem(ENDING_KEY, JSON.stringify(unlockedEndings));
}

function unlockEnding(node) {
  if (!node.endingCode || unlockedEndings.includes(node.endingCode)) {
    return;
  }
  unlockedEndings = [...unlockedEndings, node.endingCode];
  saveEndings();
}

function setScreen(mode) {
  const showGame = mode === "game";
  titleScreenEl.classList.toggle("hidden", showGame);
  gameShellEl.classList.toggle("hidden", !showGame);
  renderContinueHint();
}

function renderContinueHint() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    continueButtonEl.disabled = true;
    continueHintEl.textContent = "还没有存档，直接开始新周目吧。";
    return;
  }

  continueButtonEl.disabled = false;

  try {
    const parsed = JSON.parse(raw);
    const node = getNode(parsed.currentNodeId);
    continueHintEl.textContent = node
      ? `检测到存档：${node.chapter}《${node.title}》`
      : "检测到上次存档，可继续推进剧情。";
  } catch (error) {
    continueHintEl.textContent = "检测到上次存档，可继续推进剧情。";
  }
}

function renderMeters() {
  stateEls.batteryValue.textContent = `${gameState.battery}%`;
  stateEls.kpiValue.textContent = `${gameState.kpi}%`;
  stateEls.familyValue.textContent = `${gameState.family}`;
  stateEls.awarenessValue.textContent = `${gameState.awareness}`;
  stateEls.debtValue.textContent = `${gameState.debt}`;

  stateEls.batteryBar.style.width = `${gameState.battery}%`;
  stateEls.kpiBar.style.width = `${gameState.kpi}%`;
  stateEls.familyBar.style.width = `${gameState.family}%`;
  stateEls.awarenessBar.style.width = `${gameState.awareness * 20}%`;
  stateEls.debtBar.style.width = `${gameState.debt}%`;

  viewportFrameEl.classList.toggle("low-battery", gameState.battery <= 30);
  batteryAlertEl.textContent = gameState.battery <= 20 ? "停机临界警报" : "低电量警报";
}

function renderScene(node) {
  const meta = sceneMeta[node.scene];
  viewportFrameEl.className = `viewport-frame ${meta.className}`;
  sceneImageEl.src = meta.image;
  sceneImageEl.alt = `${meta.title} 场景`;
  chapterLabelEl.textContent = node.chapter;
  sceneTitleEl.textContent = node.title;
  sceneQuoteEl.textContent = meta.quote;
  heroStateEl.textContent = meta.heroState;

  viewportFrameEl.classList.remove("scene-flash");
  void viewportFrameEl.offsetWidth;
  viewportFrameEl.classList.add("scene-flash");
}

function renderStory(node) {
  storyTextEl.innerHTML = "";

  const kicker = document.createElement("p");
  kicker.className = "codex-kicker";
  kicker.textContent = `${node.type} / 当前节点`;
  storyTextEl.appendChild(kicker);

  if (node.ending) {
    const endingBanner = document.createElement("div");
    endingBanner.className = "ending-banner";
    endingBanner.textContent = node.ending;
    storyTextEl.appendChild(endingBanner);
  }

  const title = document.createElement("h3");
  title.textContent = node.title;
  storyTextEl.appendChild(title);

  getText(node).forEach((paragraphText) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;
    storyTextEl.appendChild(paragraph);
  });

  storyTextEl.parentElement.scrollTop = 0;
}

function renderEndingOverlay(node) {
  const isEnding = Boolean(node.ending);

  endingOverlayEl.classList.toggle("hidden", !isEnding);
  choiceOverlayEl.classList.toggle("hidden", isEnding);

  if (!isEnding) {
    endingStatsEl.innerHTML = "";
    return;
  }

  const settlement = endingSettlements[node.endingCode] || {};
  const stats = [
    { label: "电量", value: `${gameState.battery}%` },
    { label: "KPI", value: `${gameState.kpi}%` },
    { label: "家庭", value: `${gameState.family}` },
    { label: "觉醒", value: `${gameState.awareness}` },
    { label: "债务", value: `${gameState.debt}` },
  ];

  endingCodeEl.textContent = node.ending || node.chapter;
  endingTitleCardEl.textContent = node.title;
  endingVerdictEl.textContent = settlement.verdict || "";
  endingEpitaphEl.textContent = settlement.epitaph || "";
  endingStatsEl.innerHTML = stats
    .map(
      (stat) => `
        <div class="ending-stat">
          <span>${stat.label}</span>
          <strong>${stat.value}</strong>
        </div>
      `,
    )
    .join("");
}

function renderChoices(node) {
  choiceListEl.innerHTML = "";
  if (node.ending) {
    lastRenderedChoices = [];
    return;
  }
  lastRenderedChoices = getChoices(node);

  lastRenderedChoices.forEach((choice, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "choice-card";

    const deltas = deltaPreview(choice.effect);
    const actionType = choice.actionType ? choice.actionType.toUpperCase() : "ACTION";
    const deltaHtml = deltas.length
      ? `<div class="choice-delta">${deltas
          .map((item) => `<span class="delta-chip">${item}</span>`)
          .join("")}</div>`
      : "";

    card.innerHTML = `
      <span class="choice-index">${index + 1}</span>
      <p class="choice-type">${actionType}</p>
      <strong>${choice.label}</strong>
      <p>${choice.hint}</p>
      ${deltaHtml}
    `;

    card.addEventListener("click", () => {
      applyEffect(choice.effect);
      currentNodeId = getNext(choice);
      renderGame();
    });

    choiceListEl.appendChild(card);
  });
}

function renderGallery() {
  galleryListEl.innerHTML = "";

  endingCatalog.forEach((ending) => {
    const unlocked = unlockedEndings.includes(ending.code);
    const item = document.createElement("div");
    item.className = `gallery-item ${unlocked ? "" : "locked"}`.trim();
    item.innerHTML = unlocked
      ? `<strong>${ending.title}</strong><span>${ending.desc}</span>`
      : `<strong>未解锁结局 ${ending.code}</strong><span>继续游玩，找到通向这条命运的路径。</span>`;
    galleryListEl.appendChild(item);
  });
}

function renderGame() {
  normalizeState();
  const node = getNode(currentNodeId) || getNode("start");

  if (node.ending) {
    unlockEnding(node);
  }

  renderScene(node);
  renderMeters();
  renderStory(node);
  renderEndingOverlay(node);
  renderChoices(node);
  saveGame();
  setScreen("game");
}

function startNewGame() {
  gameState = initialState();
  currentNodeId = "start";
  saveGame();
  renderGame();
}

function showMenu() {
  setScreen("menu");
}

function openGallery() {
  renderGallery();
  galleryModalEl.showModal();
}

function closeGallery() {
  galleryModalEl.close();
}

function openHelp() {
  helpModalEl.showModal();
}

function closeHelp() {
  helpModalEl.close();
}

continueButtonEl.addEventListener("click", () => {
  if (loadGame()) {
    renderGame();
  }
});

newGameButtonEl.addEventListener("click", startNewGame);
galleryButtonEl.addEventListener("click", openGallery);
galleryTopButtonEl.addEventListener("click", openGallery);
menuButtonEl.addEventListener("click", showMenu);
helpButtonEl.addEventListener("click", openHelp);
restartButtonEl.addEventListener("click", startNewGame);
endingRestartButtonEl.addEventListener("click", startNewGame);
endingMenuButtonEl.addEventListener("click", showMenu);
endingGalleryButtonEl.addEventListener("click", openGallery);
closeGalleryButtonEl.addEventListener("click", closeGallery);
closeHelpButtonEl.addEventListener("click", closeHelp);

window.addEventListener("keydown", (event) => {
  if (!titleScreenEl.classList.contains("hidden")) {
    return;
  }

  if (!["1", "2", "3"].includes(event.key)) {
    return;
  }

  const choice = lastRenderedChoices[Number(event.key) - 1];
  if (!choice) {
    return;
  }

  applyEffect(choice.effect);
  currentNodeId = getNext(choice);
  renderGame();
});

sceneImageEl.addEventListener("error", () => {
  sceneImageEl.removeAttribute("src");
});

renderContinueHint();
setScreen("menu");
