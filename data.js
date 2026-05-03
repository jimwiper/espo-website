// espo — fictional data. All names invented for this design mock.

window.MEMBERS = [
  { no: '001', name: 'NYX',      jp: 'ニクス',        role: 'fps', color: ['#2b1055','#7597de'], bio: '闇夜を切り裂くエース。反応速度、異常。', stats: { kd: '3.42', hrs: '4.2K' }, imgs: ['images/NYX.jpeg'],
    visual: { hair: 'long straight, midnight blue w/ silver streaks', eyes: 'violet', outfit: 'asymmetric dark tactical coat, cyan glow trim', accessory: 'single star earring, throat mic', motif: 'night sky / constellations', vibe: 'cool, sharp, elegant assassin' }},
  { no: '002', name: 'SHIROI',   jp: 'シロイ',        role: 'fps', color: ['#0a1f3a','#36f0ff'], bio: '冷静沈着なIGL。チームの司令塔。', stats: { kd: '2.10', hrs: '3.8K' }, imgs: ['images/shiroi.jpeg'],
    visual: { hair: 'bob cut, pure white w/ blue inner layer', eyes: 'ice blue', outfit: 'crisp white esports jersey, tactical gloves', accessory: 'headset, command visor', motif: 'ice crystals / chess pieces', vibe: 'composed commander, icy intellect' }},
  { no: '003', name: 'KOMORI',   jp: 'コモリ',        role: 'mmo', color: ['#3a0a2b','#ff3ea5'], bio: 'ヒーラーの女王。回復量いつもカンスト。', stats: { kd: '1.80', hrs: '5.1K' }, imgs: ['images/komori2.jpeg','images/komori3.jpeg'],
    visual: { hair: 'long wavy pink w/ braided strands', eyes: 'rose gold', outfit: 'flowing priestess robe w/ neon pink trim', accessory: 'floating healing orbs, ribbon choker', motif: 'hearts / medical cross / ribbons', vibe: 'warm, nurturing, radiant' }},
  { no: '004', name: 'RIKO',     jp: 'リコ',           role: 'fgt', color: ['#2b1a0a','#f8d34a'], bio: '格ゲー歴12年。絶対に負けない女。', stats: { kd: '7.11', hrs: '6.0K' }, imgs: ['images/riko.jpeg'],
    visual: { hair: 'short spiky amber/gold, undercut', eyes: 'burning amber', outfit: 'varsity jacket over sports bra, fingerless gloves', accessory: 'championship belt, bandaged knuckles', motif: 'lightning bolts / fists', vibe: 'scrappy, cocky, champion energy' }},
  { no: '005', name: 'AZURE',    jp: 'アジュール',    role: 'fps', color: ['#0a3a3a','#36f0ff'], bio: 'スナイパー特化。キルログ独占常連。', stats: { kd: '4.08', hrs: '3.3K' }, imgs: ['images/azure.jpeg','images/azure1.jpeg'],
    visual: { hair: 'long ponytail, deep teal gradient', eyes: 'aquamarine', outfit: 'military cape, sniper scope harness', accessory: 'eyepatch w/ targeting crosshair, choker', motif: 'crosshairs / water droplets', vibe: 'calm, deadly, sniper precision' }},
  { no: '006', name: 'PIPPA',    jp: 'ピッパ',        role: 'mmo', color: ['#3a2b0a','#ff8e3c'], bio: '元気担当。配信時間ぶっちぎり1位。', stats: { kd: '1.55', hrs: '7.4K' }, imgs: ['images/pippa.jpeg','images/pippa2.jpeg','images/pippa3.jpeg'],
    visual: { hair: 'twin short pigtails, bright orange w/ yellow tips', eyes: 'sunset orange', outfit: 'oversized hoodie w/ fox ear hood, short skirt', accessory: 'fox tail, bell collar', motif: 'fire sparks / foxes', vibe: 'bouncy, hyper, chaotic good' }},
  { no: '007', name: 'YUME',     jp: 'ユメ',          role: 'fps', color: ['#0a2b3a','#36f0ff'], bio: '天才。しかし天然。ギャップで沼らせる。', stats: { kd: '2.88', hrs: '2.9K' }, imgs: ['images/yume.jpeg','images/yume2.jpeg','images/yume3.jpeg'],
    visual: { hair: 'long wavy cerulean, side-swept bangs', eyes: 'sleepy pale blue', outfit: 'dreamy oversized cardigan, pajama shorts, thigh-highs', accessory: 'star hair clip, floating zzz', motif: 'clouds / stars / dreams', vibe: 'airy, spacey genius' }},
  { no: '008', name: 'NOKO',     jp: 'ノコ',           role: 'fgt', color: ['#3a1a0a','#ff6a3c'], bio: 'コンボ職人。画面の中で舞う。', stats: { kd: '5.62', hrs: '4.6K' }, imgs: ['images/noko.jpeg','images/noko2.jpeg','images/noko3.jpeg'],
    visual: { hair: 'long straight crimson red w/ hime cut', eyes: 'sharp ruby', outfit: 'modern kimono crop + pleated skirt, split hakama', accessory: 'tasseled hair ornament, fan', motif: 'cherry blossom / fans / combo arrows', vibe: 'graceful warrior, fluid combo' }},
  { no: '009', name: 'HIRU',     jp: 'ヒル',           role: 'mmo', color: ['#1a0a3a','#8e3cff'], bio: 'タンク。盾を構えたら誰も倒せない。', stats: { kd: '1.24', hrs: '5.8K' }, imgs: ['images/hiru.jpeg'],
    visual: { hair: 'medium tousled lavender purple', eyes: 'deep amethyst', outfit: 'heavy armored bodice over sports layer, pauldrons', accessory: 'tower shield back-piece, rune gauntlets', motif: 'shields / geometric runes', vibe: 'sturdy, reliable, quietly strong' }},
  { no: '010', name: 'CARNELIAN', jp: 'カーネリアン',  role: 'fps', color: ['#3a0a1a','#ff3ea5'], bio: '新人。でもプロ級。ルーキー・オブ・ザ・イヤー候補。', stats: { kd: '3.01', hrs: '1.2K' }, imgs: ['images/carnelian-e823f54c.jpeg'],
    visual: { hair: 'medium bob, gradient magenta→red', eyes: 'bright carmine', outfit: 'zip-up bomber w/ rookie patch, combat skirt', accessory: 'rookie armband, twin sidearms', motif: 'gemstone facets / pink flame', vibe: 'fiery rookie, proving herself' }},
  { no: '011', name: 'SORA',     jp: 'ソラ',           role: 'fps', color: ['#0a1a3a','#36f0ff'], bio: 'スカウト。情報戦で勝つタイプ。', stats: { kd: '2.44', hrs: '3.5K' }, imgs: ['images/sora.jpeg','images/sora2.jpeg'],
    visual: { hair: 'short layered sky blue', eyes: 'pale sky', outfit: 'scout vest over tee, cargo shorts, tech gauntlets', accessory: 'drone floating by shoulder, binoculars', motif: 'radar pings / birds / sky', vibe: 'quick, observant, breezy' }},
  { no: '012', name: 'USAGI',    jp: 'ウサギ',        role: 'mmo', color: ['#3a0a2b','#ff3ea5'], bio: 'サポート最強。パーティ全員が守られる。', stats: { kd: '1.40', hrs: '4.9K' }, imgs: ['images/usagi.jpeg','images/usagi2.jpeg'],
    visual: { hair: 'long pastel pink, twin space buns w/ ribbons', eyes: 'candy pink', outfit: 'frilly idol dress w/ armored accents', accessory: 'bunny ear headband, magical staff', motif: 'bunnies / hearts / stars', vibe: 'sweet idol healer' }},
  { no: '013', name: 'GINKO',    jp: 'ギンコ',        role: 'fgt', color: ['#2b2b2b','#c0c0c0'], bio: '銀髪の剣士。一撃必殺のスタイル。', stats: { kd: '6.22', hrs: '5.3K' }, imgs: ['images/ginko.jpeg','images/ginko2.jpeg','images/ginko3.jpeg'],
    visual: { hair: 'long silver ponytail, straight bangs', eyes: 'steel gray', outfit: 'modern samurai gi, black hakama, sash', accessory: 'katana at hip, wrist wraps', motif: 'katana / silver moon', vibe: 'stoic swordswoman, deadly quiet' }},
  { no: '014', name: 'MOMO',     jp: 'モモ',           role: 'fps', color: ['#3a1a2b','#ff8ec0'], bio: '突撃型。先陣を切るダイナマイト。', stats: { kd: '3.77', hrs: '4.0K' }, imgs: ['images/momo2.jpeg','images/momo-36759689.jpeg'],
    visual: { hair: 'short choppy peach pink w/ red tips', eyes: 'hot pink', outfit: 'sleeveless combat top, tactical shorts, knee pads', accessory: 'explosive charges belt, bandana', motif: 'peach / bombs / dynamite', vibe: 'reckless, loud, gung-ho' }},
  { no: '015', name: 'RAIKA',    jp: 'ライカ',        role: 'fps', color: ['#1a3a0a','#8eff3c'], bio: '雷電の如きエイム。試合を決める一撃。', stats: { kd: '3.90', hrs: '3.7K' }, imgs: ['images/raika.jpeg','images/raika2.jpeg','images/raika-6d7175eb.jpeg'],
    visual: { hair: 'medium choppy lime green w/ black streak', eyes: 'electric yellow-green', outfit: 'cropped biker jacket, compression shorts', accessory: 'lightning earring, fingerless gloves', motif: 'lightning bolts / circuit lines', vibe: 'electric, explosive, edgy' }},
  { no: '016', name: 'KUROI',    jp: 'クロイ',        role: 'mmo', color: ['#0a0a1a','#6a3cff'], bio: '影に潜む暗殺者ロール愛好家。', stats: { kd: '2.15', hrs: '4.4K' }, imgs: ['images/kuroi2.jpeg','images/kuroi-f2dfba08.jpeg'],
    visual: { hair: 'long black w/ purple tips', eyes: 'glowing violet', outfit: 'ninja hooded cloak, split-front skirt', accessory: 'mask pulled down at neck, throwing daggers', motif: 'shadows / daggers / smoke', vibe: 'mysterious shadow assassin' }},
  { no: '017', name: 'HANABI',   jp: 'ハナビ',        role: 'fgt', color: ['#3a1a0a','#ff6a3c'], bio: '派手で熱い。観客を魅了する炎のプレイヤー。', stats: { kd: '5.11', hrs: '4.8K' }, imgs: ['images/hanabi.jpeg','images/hanabi2.jpeg'],
    visual: { hair: 'long flowing orange-to-red gradient, high ponytail', eyes: 'fire gold', outfit: 'festival yukata crop + bike shorts', accessory: 'fireworks hair sticks, ignition glove', motif: 'fireworks / chrysanthemum', vibe: 'showy, passionate, stage-owner' }},
  { no: '018', name: 'MINT',     jp: 'ミント',        role: 'fps', color: ['#0a3a2b','#3cffbe'], bio: 'クール。でも試合後の雑談は長い。', stats: { kd: '2.65', hrs: '3.1K' }, imgs: ['images/mint.jpeg'],
    visual: { hair: 'medium straight mint green, twin loose braids', eyes: 'pale teal', outfit: 'button-up tucked into slacks, tactical belt', accessory: 'round glasses, book-shaped holster', motif: 'mint leaves / geometric patterns', vibe: 'cool nerd, low-key charming' }},
  { no: '019', name: 'TSUKI',    jp: 'ツキ',           role: 'mmo', color: ['#1a1a3a','#6a6aff'], bio: '月光のメイジ。遠距離から全てを支配する。', stats: { kd: '2.02', hrs: '5.5K' }, imgs: ['images/tsuki.jpeg','images/tsuki-cf9b5ef2.jpeg'],
    visual: { hair: 'very long indigo w/ starlight highlights', eyes: 'deep navy', outfit: 'celestial robe w/ gold embroidery', accessory: 'crescent moon staff, veil headpiece', motif: 'moon phases / constellations', vibe: 'regal, mystical, celestial' }},
  { no: '020', name: 'ZEFIR',    jp: 'ゼフィール',    role: 'fps', color: ['#2b0a3a','#b33cff'], bio: '風の如き機動力。捕まえられない幽霊。', stats: { kd: '3.54', hrs: '3.9K' }, imgs: ['images/zefir.jpeg','images/zefir2-0b088b5e.jpeg','images/zefir3-feb1aa3c.jpeg','images/zefir4.jpeg'],
    visual: { hair: 'short pixie violet w/ wind-swept strands', eyes: 'pale lilac', outfit: 'aerodynamic bodysuit w/ cape, jet boots', accessory: 'floating data visor, wind-swept scarf', motif: 'wind swirls / wings / speed lines', vibe: 'fast, ethereal, untouchable' }},
];

window.LIVE_NOW = [
  { talent: 'NYX', jp: 'ニクス', title: '【VALORITE】ランク帯押し上げ配信', game: 'VALORITE', viewers: 12480, progress: 0.38, color: ['#2b1055','#7597de'] },
  { talent: 'RIKO', jp: 'リコ', title: '格ゲー新作100試合耐久', game: 'FGT WORLD', viewers: 4821, progress: 0.72, color: ['#2b1a0a','#f8d34a'] },
  { talent: 'PIPPA', jp: 'ピッパ', title: 'MMO 新イベントぶっ飛ばす', game: 'LOREWEAVE', viewers: 3204, progress: 0.15, color: ['#3a2b0a','#ff8e3c'] },
  { talent: 'ZEFIR', jp: 'ゼフィール', title: 'ソロでデュオに挑む', game: 'VALORITE', viewers: 2719, progress: 0.55, color: ['#2b0a3a','#b33cff'] },
];

window.TROPHIES = [
  { rank: '1ST', event: 'NEO LEAGUE SEASON 5', date: '2025.12.20', team: ['NYX','SHIROI','AZURE','YUME'], featured: true },
  { rank: '1ST', event: 'FGT WORLD CUP', date: '2025.11.02', team: ['RIKO'] },
  { rank: '2ND', event: 'LOREWEAVE CHAMPIONSHIP', date: '2025.10.15', team: ['KOMORI','PIPPA','HIRU'] },
  { rank: '1ST', event: 'VALORITE INVITATIONAL', date: '2025.09.08', team: ['NYX','CARNELIAN','MOMO','RAIKA'] },
  { rank: '3RD', event: 'MOBA NATION', date: '2025.08.22', team: ['TSUKI','KUROI','HIRU'] },
];

window.MEDIA = [
  { label: 'MV', title: 'FOR THE CROWN — Official MV', date: '2026.03.14', color: ['#2b1055','#ff3ea5'] },
  { label: 'ANIME', title: 'espo PROJECT — EP.01「覚醒」', date: '2026.02.28', color: ['#0a1f3a','#36f0ff'] },
  { label: 'PV', title: 'グローバル・オーディション PV', date: '2026.02.10', color: ['#3a0a2b','#ff3ea5'] },
];

window.GOODS = [
  { name: 'TEAM JERSEY 2026', price: 12800, tag: 'APPAREL', color: ['#0a1f3a','#36f0ff'] },
  { name: 'ACRYLIC STAND / NYX', price: 2400, tag: 'FIGURE', color: ['#2b1055','#7597de'] },
  { name: 'LOGO HOODIE — BLACK', price: 8800, tag: 'APPAREL', color: ['#0a0a1a','#ff3ea5'] },
  { name: 'STICKER SET VOL.3', price: 980, tag: 'PAPER', color: ['#3a2b0a','#ff8e3c'] },
];

window.NEWS_TICKER = [
  'NEO LEAGUE SEASON 5 優勝 🏆',
  'GLOBAL AUDITION 開催中 — 2026.05.31まで',
  '新メンバー CARNELIAN デビュー',
  'MERCH STORE GA 2026 SS コレクション販売開始',
  'espo ANIME PROJECT 制作決定',
  'TEAM JERSEY 2026 予約受付中',
];

window.GOODS_DATA = [
  {
    "id": "jersey-2026",
    "name": "TEAM JERSEY 2026",
    "price": 12800,
    "tag": "APPAREL",
    "colors": [
      "#0a1f3a",
      "#36f0ff"
    ],
    "img": "goods/jersey.png",
    "badge": "NEW"
  },
  {
    "id": "uniform-2026",
    "name": "TEAM UNIFORM 2026",
    "price": 14800,
    "tag": "APPAREL",
    "colors": [
      "#0a3a3a",
      "#36f0ff"
    ],
    "img": "goods/uniform.png",
    "badge": "NEW"
  },
  {
    "id": "acrylic-nyx",
    "name": "ACRYLIC STAND / NYX",
    "price": 2400,
    "tag": "FIGURE",
    "colors": [
      "#2b1055",
      "#7597de"
    ],
    "img": "goods/acrylic-nyx.png",
    "badge": "LIMITED"
  },
  {
    "id": "logo-hoodie",
    "name": "LOGO HOODIE — BLACK",
    "price": 8800,
    "tag": "APPAREL",
    "colors": [
      "#0a0a1a",
      "#ff3ea5"
    ],
    "img": "goods/logo-hoodie.png",
    "badge": null
  },
  {
    "id": "sticker-vol3",
    "name": "STICKER SET VOL.3",
    "price": 980,
    "tag": "PAPER",
    "colors": [
      "#3a2b0a",
      "#ff8e3c"
    ],
    "img": null,
    "badge": "NEW"
  },
  {
    "id": "mug-logo",
    "name": "MUG CUP / espo LOGO",
    "price": 2800,
    "tag": "GOODS",
    "colors": [
      "#0a1f3a",
      "#36f0ff"
    ],
    "img": null,
    "badge": null
  },
  {
    "id": "tote-ss26",
    "name": "TOTE BAG SS26",
    "price": 3200,
    "tag": "APPAREL",
    "colors": [
      "#1a1a2e",
      "#ff3ea5"
    ],
    "img": null,
    "badge": "NEW"
  },
  {
    "id": "mousepad-xl",
    "name": "MOUSE PAD XL / GINKO",
    "price": 4500,
    "tag": "GOODS",
    "colors": [
      "#0a0a1a",
      "#36f0ff"
    ],
    "img": "goods/mousepad-ginko.png",
    "badge": null
  },
  {
    "id": "keychain-set",
    "name": "ACRYLIC KEYCHAIN SET",
    "price": 3600,
    "tag": "FIGURE",
    "colors": [
      "#2b1a0a",
      "#f8d34a"
    ],
    "img": null,
    "badge": "LIMITED"
  },
  {
    "id": "rubber-strap",
    "name": "RUBBER STRAP — メンバー選択",
    "price": 1800,
    "tag": "FIGURE",
    "colors": [
      "#1a0a3a",
      "#b33cff"
    ],
    "img": null,
    "badge": "NEW"
  },
  {
    "id": "member-jacket",
    "name": "MEMBER TRACK JACKET",
    "price": 14800,
    "tag": "APPAREL",
    "colors": [
      "#0a1f3a",
      "#36f0ff"
    ],
    "img": null,
    "badge": "NEW"
  },
  {
    "id": "mousepad-sq",
    "name": "SQUARE MOUSE PAD / ZEFIR",
    "price": 3800,
    "tag": "GOODS",
    "colors": [
      "#2b0a3a",
      "#b33cff"
    ],
    "img": "goods/mousepad-sq-zefir.png",
    "badge": "NEW"
  },
  {
    "id": "member-tee",
    "name": "MEMBER CHARACTER TEE",
    "price": 7800,
    "tag": "APPAREL",
    "colors": [
      "#0a0a14",
      "#36f0ff"
    ],
    "img": null,
    "badge": "NEW"
  },
  {
    "id": "member-dogtag",
    "name": "MEMBER DOG TAG SET",
    "price": 3200,
    "tag": "ACCESSORIES",
    "colors": [
      "#1a1a1a",
      "#c0c0c0"
    ],
    "img": null,
    "badge": "NEW"
  }
];
