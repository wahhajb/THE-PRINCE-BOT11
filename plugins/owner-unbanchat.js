const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*[❗] تم إلغاء حظر المجموعة بنجاح*');
};
handler.help = ['إلغاءحظرالمجموعة'];
handler.tags = ['owner'];
handler.command = /^إلغاء-حظر-المجموعة$/i;
handler.rowner = true;
export default handler;
