import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, { conn, text }) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*[❗خطأ❗]* \nيجب توجيه هذا الأمر لشخص معين بواسطة @مستخدم';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '*[❗خطأ❗]* \nيجب إدخال الخبرة الكامنة (XP) التي ترغب في منحها';
  if (isNaN(txt)) throw '*[❗خطأ❗]*\n يجب إدخال رقم صحيح، الأحرف غير مسموح بها!*';
  const xp = parseInt(txt);
  let exp = xp;
  const pjk = Math.ceil(xp * pajak);
  exp += pjk;
  if (exp < 1) throw '*[❗خطأ❗]*\n الخبرة الكامنة (XP) يجب أن تكون على الأقل 1';
  const users = global.db.data.users;
  users[who].exp += xp;
  m.reply(`≡ *خبرة أُضيفت بنجاح*
┌──────────────
▢ *المبلغ:* ${xp}
└──────────────`);
};
handler.command = ['الخبرة'];
handler.rowner = true;
export default handler;
