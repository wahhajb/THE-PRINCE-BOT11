const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*[❗𝐈𝐍𝐅𝐎❗] تم حظر الشات بنجاح*\n\n*—◉ البوت لن يستطيع الرد على أي رسائل من هذه القروب*');
};
handler.help = ['حظرالدردشة'];
handler.tags = ['owner'];
handler.command = /^حظرالدردشة$/i;
handler.rowner = true;
export default handler;
