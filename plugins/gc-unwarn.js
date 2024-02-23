const handler = async (m, { conn, text, command, usedPrefix }) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text;
  else who = m.chat;

  const user = global.db.data.users[who];
  const warntext = `*[❗] طلب إلغاء تحذير لعضو معين أو إلغاء التحذيرات التي تم منحها في المجموعة*`;

  if (!who) {
    throw m.reply(warntext, m.chat, { mentions: conn.parseMention(warntext) });
  }

  if (m.mentionedJid.includes(conn.user.jid)) return;
  if (user.warn == 0) throw '*[❗] عذرًا، لا يوجد تحذيرات لإلغائها*';

  user.warn -= 1;

  await m.reply(
    `${
      user.warn == 1 ? `*@${who.split`@`[0]}*` : `♻️ *@${who.split`@`[0]}*`
    } تم إلغاء تحذير واحد من العضو\n*عدد التحذيرات المتبقية ${user.warn}/3*`,
    null,
    { mentions: [who] }
  );
};

handler.command = /^(unwarn|الغاء-تحذير|deladvertir|deladvertencia|delwarning)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
