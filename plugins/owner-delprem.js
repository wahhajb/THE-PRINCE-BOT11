const handler = async (m, { conn, text, usedPrefix, command }) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
  else who = m.chat;
  const user = global.db.data.users[who];
  if (!who) throw `*[❗خطأ❗] *\nيجب توجيه هذا الأمر لشخص معين بواسطة @مستخدم`;
  if (!user) throw `*[❗خطأ❗]*\n المستخدم غير موجود في قاعدة البيانات`;
  if (user.premiumTime === 0) throw '*المستخدم ليس لديه عضوية بريميوم*';

  user.premiumTime = 0;
  user.premium = false;

  const textdelprem = `*[❗] @${who.split`@`[0]} تم إزالة عضويته المميزة ولا يمتلك أيام البريميوم الآن*`;
  m.reply(textdelprem, null, { mentions: conn.parseMention(textdelprem) });
};
handler.help = ['حذفبريميوم <@مستخدم>'];
handler.tags = ['owner'];
handler.command = /^(حذف|-|del)بريميم$/i;
handler.group = true;
handler.rowner = true;
export default handler;
