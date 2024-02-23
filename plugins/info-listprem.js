const handler = async (m, {conn, args, isPrems}) => {
  const usuario = global.db.data.users[m.sender].premiumTime;
  const user = Object.entries(global.db.data.users).filter((user) => user[1].premiumTime).map(([key, value]) => {
    return {...value, jid: key};
  });
  const premTime = global.db.data.users[m.sender].premiumTime;
  const prem = global.db.data.users[m.sender].premium;
  const userr = await '@' + m.sender.split`@`[0];
  const waktu = clockString(`${premTime - new Date() * 1} `);
  const sortedP = user.map(toNumber('premiumTime')).sort(sort('premiumTime'));
  const len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length);
  let infoprem = `
*「 معلومات المستخدم 」*

—◉ المستخدم: ${userr}
${prem ? `*◉ الوقت المتبقي:*\n${clockString(usuario - new Date() * 1)}` : (isPrems ? `*◉ الوقت المتبقي:*\n- أنت مستخدم مميز بدون تاريخ انتهاء` : '- هذا مستخدم عادي ❌')}

*「 مستخدمين مميزين 」*${sortedP.slice(0, len).map(({jid, name, premiumTime, prem, registered}, i) => `

—◉ المستخدم: ${'@' + jid.split`@`[0]}
${premiumTime > 0 ? `*◉ الوقت المتبقي:*\n${clockString(premiumTime - new Date() * 1)}` : '- هذا مستخدم عادي ❌'}`).join('')}`.trim();

  if (sortedP.filter((user) => user.premiumTime).length === 0) {
    infoprem = `*「 معلومات المستخدم 」*\n\n—◉ المستخدم: ${userr}\n${prem ? `*◉ الوقت المتبقي:*\n${clockString(usuario - new Date() * 1)}` : '- أنت لست مستخدم مميز ❌'}\n\n*「 مستخدمين مميزين 」*\n\n- لا يوجد مستخدمين مميزين ❌`.trim();
  }

  m.reply(infoprem, null, {mentions: conn.parseMention(infoprem)});
};
handler.help = ['premlist [العدد]'];
handler.tags = ['info'];
handler.command = /^(قائمة-بريميم|قائمه-بريميم|listavip|viplista)$/i;
export default handler;

function clockString(ms) {
  const seconds = Math.floor(ms / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);
  return `- سنة(سنوات): ${years}\n- شهر(أشهر): ${months}\n- أسبوع(أسابيع): ${weeks}\n- يوم(أيام): ${days}\n- ساعة(ساعات): ${hours % 24}\n- دقيقة(دقائق): ${minutes % 60}\n- ثانية(ثواني): ${seconds % 60}`;
}

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
