import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `[❗التسجيل❗]انت بالفعل مسجل \n\  هل تريد التسجيل مره اخرى\n\n 📌استخدم هذا الأمر للحذف\n*${usedPrefix}الغاء-التسجيل* <الرقم التسلسلي>`;
  if (!Reg.test(text)) throw `*[❗خطأ❗] *\n\n*—◉ لا يمكن تنسيق المعلومات: ${usedPrefix + command} الاسم.العمر*\n*—◉ مثال : ${usedPrefix + command} نايف.100*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*[❗خطأ❗] يجب عليك وضع اسم*';
  if (!age) throw '*[❗خطأ❗] لا يمكن أن يكون العمر فارغًا';
  if (name.length >= 30) throw '[❗خطأ❗]  الاسم طويل';
  age = parseInt(age);
  if (age > 100) throw '*[❗] اذا عمرك فوق 100 ارمي الهاتف واعمل لحياتك كيف ما زلت على قيد الحياة؟ 👴🏻*';
  if (age < 8) throw '*[❗] ,  كيف لطفل ان يستخدم واتساب اعد الهاتف لي ماما اقبل ان اتصل بي شرطة الأطفال 😲*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 الملف التعريفي🛡️ 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *الاسم:* ${name}
┃ *العمر:* ${age} سنة 
┃ *الرقم السري:* 
┃ ${sn}
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ ¡سيكون رقمك التسلسلي مفيدًا
┃في حال كنت تريد الحذف 
┃تسجيلك في البوت !
┗┅ ━━━━━━━━━━━━ ┅ ━`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(تسجيل)$/i;
export default handler;
