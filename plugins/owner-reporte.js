const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*[❗] يجب توفير البلاغ*\n\n*مثال:*\n*${usedPrefix + command} الأمر ${usedPrefix}اغنية لا يعمل*`;
  if (text.length < 10) throw `*[❗] البلاغ يجب أن يحتوي على ما لا يقل عن 10 أحرف!*`;
  if (text.length > 1000) throw `*[❗] البلاغ يجب أن يحتوي على أقل من 1000 حرف!*`;
  const teks = `*❒═════[ابلاغ]═════❒*\n*┬*\n*├❧ رقمه:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ البلاغ:* ${text}\n*┴*`;
  conn.reply('966547169636@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] } });
  conn.reply('97474727015@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] } });
  m.reply(`*[ ✔️ ] تم إرسال التقرير بنجاح إلى الإدارة. سيتم مراجعة الامر والعمل على حل المشكلة إن وجدت.*`);
};
handler.help = ['تقرير', 'طلب'].map((v) => v + ' <النص>');
handler.tags = ['info'];
handler.command = /^(تقرير|طلب|ابلاغ|تقارير)$/i;
export default handler;
