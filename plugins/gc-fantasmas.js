const handler = async (m, {conn, text, participants}) => {
  const member = participants.map((u) => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  let total = 0;
  const sider = [];
  for (let i = 0; i < sum; i++) {
    const users = m.isGroup ? participants.find((u) => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  if (total == 0) return conn.reply(m.chat, `*[❗] لا يوجد أعضاء غير نشطين وما منهم فايده في المجموعة :D*`, m);
  m.reply(`*[ ⚠ قائمة الأعضاء المدفونين ⚠ ]*\n\n*المجموعة:* ${await conn.getName(m.chat)}\n*عدد الأعضاء المحددين:* ${sum}\n\n*[ 👻 قائمة الأعضاء الغير نشطين 👻 ]*\n${sider.map((v) => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*ملاحظة: تم إعادة العضوية بنسبة 100% بنجاح, البوت ينشط الأعضاء بشكل تلقائي بعد فترة*`, null, {mentions: sider});
};
handler.command = /^(الميتين|fantasmas|sider)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
