const handler = async (m, {conn, text, isROwner, isOwner}) => {
  if (text) {
    global.db.data.chats[m.chat].sWelcome = text;
    m.reply('*[❗] تم تحديث نص الترحيب بنجاح*');
  } else throw `*[❗] يرجى تقديم نص الترحيب الجديد الذي ترغب في تعيينه، استخدم:\n*- @user (المستخدم)*\n*- @group (اسم المجموعة)*\n*- @desc (وصف المجموعة)*`;
};

handler.help = ['setwelcome <text>'];
handler.tags = ['تغيير_ترحيب'];
handler.command = ['تغيير-ترحيب'];
handler.admin = true;

export default handler;
