const handler = async (m, { conn, participants, usedPrefix, command }) => {
  const BANtext = `[❗] تم طلب حظر عضو من المنسق أو المشرف. من فضلك لا تقم بحظر أي شخص بدون سبب مبرر. قم باستخدام:\n\n*—◉ مثال:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext) });
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;
  else who = m.chat;
  const users = global.db.data.users;
  users[who].banned = true;
  m.reply('*[❗𝐈𝐍𝐅𝐎❗] تم حظر المستخدم بنجاح*\n*—◉ المستخدم الآن ممنوع من إرسال أي رسائل إلى هذه الدردشة*');
};
handler.command = /^بان$/i;
handler.rowner = true;
export default handler;
