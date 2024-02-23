import { addExif } from '../lib/sticker.js';

const handler = async (m, { conn, text }) => {
  if (!m.quoted) throw '*[❗] يرجى الرد على الملصق الذي ترغب في حقوقك عليه قول .سرقة وحقوق الي تبي.*';
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) throw '*[❗] يرجى الرد على ملصق لإعادة نشره وإزالة العلامة المائية.*';
    const img = await m.quoted.download();
    if (!img) throw '*[❗] لا يمكن تحميل الملصق، يرجى المحاولة مرة أخرى.*';
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, { asSticker: true });
    else throw '*[❗] عذرًا، لم يتم العثور على ملصق صالح لإعادة نشره وإزالة العلامة المائية.*';
  }
};

handler.help = ['wm <اسم الحزمة>|<المؤلف>'];
handler.tags = ['ملصق'];
handler.command = /^سرقه|سرقة|حقوقي$/i;
handler.limit = 1;
export default handler;
