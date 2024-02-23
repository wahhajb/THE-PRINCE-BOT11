const handler = async (m, {conn, participants, groupMetadata}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const {antiToxic, antiTraba, antidelete, antiviewonce, isBanned, welcome, detect, detect2, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, modoadmin, audios, delete: del} = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const text = `*「 معلومات النقابة الحلوه 」*\n

*اسم المجموعة:* 
${groupMetadata.subject}

*وصف المجموعة:* 
${groupMetadata.desc?.toString() || 'بدون وصف'}

*عدد الأعضاء:* 
${participants.length} أعضاء

*مالك المجموعة:* 
@${owner.split('@')[0]}

*المشرفين:*
${listAdmin}

${gt}`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['معلومات المجموعة'];
handler.tags = ['مجموعة'];
handler.command = /^(اينفوقروب?)$/i;
handler.limit = 1;
handler.group = true;
export default handler;
