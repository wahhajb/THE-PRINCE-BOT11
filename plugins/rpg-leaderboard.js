const handler = async (m, {conn, args, participants}) => {
  const users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key};
  });
  const sortedExp = users.map(toNumber('exp')).sort(sort('exp'));
  const sortedLim = users.map(toNumber('limit')).sort(sort('limit'));
  const sortedLevel = users.map(toNumber('level')).sort(sort('level'));
  const usersExp = sortedExp.map(enumGetKey);
  const usersLim = sortedLim.map(enumGetKey);
  const usersLevel = sortedLevel.map(enumGetKey);
  const len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length);
 const adventurePhrases = [
  "قد العملية وصقل طريقك نحو القمة.",
  "تحدى المجهول ووصل إلى آفاق جديدة!",
  "شجاعتك ستقودك إلى قمة جدول التصنيف.",
  "في كل خطوة، نحت أسطورتك في هذه المغامرة العظيمة.",
  "استكشف، تنافس، وأظهر عظمتك على هذا الجدول.",
  "كل خطوة تهم في رحلتك نحو قمة التصنيف.",
  "إثارة التنافس تدفعك للأمام.",
  "انطلق واحتل المراكز الأولى بالإصرار.",
];

  const randomAdventurePhrase = adventurePhrases[Math.floor(Math.random() * adventurePhrases.length)];
  const texto = `
*< توب 10 بالبوت حاليا 😭🤍 >*
    
—◉ *توب ${len} خبرات 🌟*

${sortedExp.slice(0, len).map(({jid, exp}, i) => `${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} خبرات*`).join`\n`}

—◉ *توب ${len} الماسات 💎*

${sortedLim.slice(0, len).map(({jid, limit}, i) => `${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} الماسات*`).join`\n`}

—◉ *توب ${len} لفل 🎚️*

${sortedLevel.slice(0, len).map(({jid, level}, i) => `${i + 1}. ${participants.some((p) => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *مرحلة ${level}*`).join`\n`}

*⚔️ ${randomAdventurePhrase} ⚔️*`.trim();
  conn.sendMessage(m.chat, {text: texto, mentions: conn.parseMention(texto)}, {quoted: m})
};
handler.help = ['top'];
handler.tags = ['xp'];
handler.command = ['leaderboard', 'توب'];
handler.fail = null;
export default handler;

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property];
  else return (...args) => args[ascending & 1] - args[!ascending & 1];
}

function toNumber(property, _default = 0) {
  if (property) {
    return (a, i, b) => {
      return {...b[i], [property]: a[property] === undefined ? _default : a[property]};
    };
  } else return (a) => a === undefined ? _default : a;
}

function enumGetKey(a) {
  return a.jid;
}
