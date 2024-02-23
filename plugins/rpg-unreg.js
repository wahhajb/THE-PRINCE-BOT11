import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '*[❗خطأ ❗] ادخل رقمك التسلسلي,اذا كنت لا تتذكر استخدم الأمر   .رقمي*';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '*[❗خطأ❗] معلومات الرقم التسلسلي غير صحيحة,  الرجاء كتابته بشكل صحيح !*\n\n*اذا كنت لا تتذكر يمكنك استخدام الأمر  .رقمي*';
  user.registered = false;
  m.reply(`*[ ✔ ] تم إلغاء تسجيلك`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^الغاء-التسجيل(ister)?$/i;
handler.register = true;
export default handler;
