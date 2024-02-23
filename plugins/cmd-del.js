const handler = async (m, { conn, usedPrefix, text, command }) => {
  let hash = text;
  if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex');
  if (!hash) throw `*[❗] تحتاج إلى تحديد توقيع الأمان (SHA256) للأوامر أو الصور الثابتة التي تريد حذفها. استخدم ${usedPrefix}listcmd*`;
  const sticker = global.db.data.sticker;
  if (sticker[hash] && sticker[hash].locked) throw '*[❗] لا يمكن حذف الأوامر أو الصور الثابتة التي تم تأمينها*';
  delete sticker[hash];
  m.reply(`*[ ✔ ] تم حذف الأمر أو الصورة الثابتة بنجاح*`);
};
handler.command = ['delcmتتتتررتتتd'];
handler.rowner = true;
export default handler;
