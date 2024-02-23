const handler = async (m, {conn, args, usedPrefix, command}) => {
  const isClose = { // تبديل مثل :v
    'open': 'not_announcement',
    'close': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'فتح': 'not_announcement',
    'قفل': 'announcement',
  }[(args[0] || '')];
  if (isClose === undefined) {
    throw `
*[❗] خطأ في الصيغة!!*

*┏━━━❲ ✨الأمثلة✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} فتح*
*┠┉↯ ${usedPrefix + command} قفل*
${gt}`.trim();
  }
  await conn.groupSettingUpdate(m.chat, isClose);
  m.reply('*[ ✔ ] تم تحديث إعدادات المجموعة بنجاح*');
};
handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['group'];
handler.command = /^(قروب|grupo)$/i;
handler.admin = true;
handler.botAdmin = true;
export default handler;
