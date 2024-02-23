const handler = async (m, { conn, text, usedPrefix, command }) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : (m.quoted ? m.quoted.sender : null);
  else who = m.chat;

  if (!who) {
    return m.reply('*[❗خطأ❗]\n\nيرجى منشن شخص ما مع عدد ساعات منشن*');
  }

  const textpremERROR = `*[❗خطأ❗] المستخدم @${who.split`@`[0]} غير موجود في قاعدة البيانات* \n\n *—◉ مثال:*\n *◉ ${usedPrefix + command} @${m.sender.split`@`[0]} 1*\n *◉ ${usedPrefix + command} 1 <الرسالة للمرسل>*`;

  const user = global.db.data.users[who];
  const txt = text.replace('@' + who.split`@`[0], '').trim();
  const name = await '@' + who.split`@`[0];

  const ERROR = `*[❗] المستخدم ${'@' + who.split`@`[0]} غير موجود في قاعدة البيانات*`;

  if (!user) return m.reply(ERROR, null, { mentions: conn.parseMention(ERROR) });

  const hora1 = 60 * 60 * 1000 * txt; // 1 ساعة
  const now = Date.now();

  if (command == 'بريميم' || command == 'userpremium') {
    if (now < user.premiumTime) user.premiumTime += hora1;
    else user.premiumTime = now + hora1;
    user.premium = true;
    const timeLeft = (user.premiumTime - now) / 1000; // الوقت المتبقي بالثواني
    const textprem1 = `*🎟️ تم تفعيل الاشتراك المميز بنجاح!!!*\n\n *✨ المستخدم: ${name}*\n *🕐 مدة الاشتراك: ${txt} ساعة/ساعات* \n *📉 الوقت المتبقي: ${timeLeft} ثانية*`;
    m.reply(textprem1, null, { mentions: conn.parseMention(textprem1) });
  }
};
handler.help = ['بريميم [@user] <الساعات>'];
handler.tags = ['owner'];
handler.command = ['addprem', 'userpremium'];
handler.group = true;
handler.rowner = true;
export default handler;
