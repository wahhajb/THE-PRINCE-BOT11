const handler = async (m, {conn, args}) => {
  await conn.groupUpdateDescription(m.chat, `${args.join(' ')}`);
  m.reply('*تم تعديل وصف المجموعة بنجاح ✅*');
};
handler.help = ['Setdesc <text>'];
handler.tags = ['group'];
handler.command = /^الوصف|setdesc$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
export default handler;
