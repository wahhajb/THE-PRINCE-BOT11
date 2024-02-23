const handler = async (m, {conn, participants, command, usedPrefix}) => {
  if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] يتطلب تمكين التقييد (enable restrict / disable restrict) البوت لاستخدام هذا الأمر*';
  const kicktext = `*[❗] لاستخدام أمر الطرد ارسل:*\n*${usedPrefix + command} @${global.suittag}*`;
  if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, {mentions: conn.parseMention(kicktext)});
  if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('*[❗] يجب الرد على العضو الذي ترغب في طرده أو منشنه ليتم طرده*');
  if (m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== '') {
    const mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant;
    if (conn.user.jid.includes(mentioned)) return m.reply('*[❗] لا يمكنني طرد نفسي، للأسف*');
    const responseb = await conn.groupParticipantsUpdate(m.chat, [mentioned], 'remove');
    const success1 = `*@${mentioned.split('@')[0]} تم طرده بنجاح من المجموعة*`;
    const error1 = `*@${mentioned.split('@')[0]} هو مالك المجموعة ولا يمكن طرده*`;
    const error2 = `*@${mentioned.split('@')[0]} تم طرده أو مغادرة المجموعة مسبقاً*`;
    if (responseb[0].status === '200') m.reply(success1, m.chat, {mentions: conn.parseMention(success1)});
    else if (responseb[0].status === '406') m.reply(error1, m.chat, {mentions: conn.parseMention(error1)});
    else if (responseb[0].status === '404') m.reply(error2, m.chat, {mentions: conn.parseMention(error2)});
    else conn.sendMessage(m.chat, {text: `*[❗] حدث خطأ في عملية الطرد*`, mentions: [m.sender], contextInfo: {forwardingScore: 999, isForwarded: true}}, {quoted: m});
  } else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
    return;
  }
};
handler.help = ['طرد'];
handler.tags = ['مجموعة'];
handler.command = /^(طرد)$/i;
handler.admin = handler.group = handler.botAdmin = true;
export default handler;
