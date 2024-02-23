import MessageType from '@whiskeysockets/baileys';
const pajak = 0;
const handler = async (m, { conn, text }) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0];
  else who = m.chat;
  if (!who) throw '*[❗خطأ❗]*\nيجب توجيه هذا الأمر لشخص معين بواسطة @مستخدم';
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  if (!txt) throw '*[❗خطأ❗]*\n يجب إدخال عدد الألماس الذي ترغب في إضافته';
  if (isNaN(txt)) throw '*[❗خطأ❗]*\n يجب إدخال رقم صحيح، الأحرف غير مسموح بها!';
  const dmt = parseInt(txt);
  let limit = dmt;
  const pjk = Math.ceil(dmt * pajak);
  limit += pjk;
  if (limit < 1) throw '*[❗خطأ❗] *العدد النهائي للماس يجب أن يكون على الأقل 1';
  const users = global.db.data.users;
  users[who].limit += dmt;
  m.reply(`≡ *💎 تمت إضافة الماس*
┌──────────────
▢ *العدد:* ${dmt}
└──────────────`);
};
handler.command = ['الماس'];
handler.rowner = true;
export default handler;
