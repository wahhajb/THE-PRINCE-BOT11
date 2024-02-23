import { sticker } from '../lib/sticker.js';
import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';
import { webp2png } from '../lib/webp2mp4.js';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  let stiker = false;
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/webp|image|video/g.test(mime)) {
      const img = await q.download?.();
      if (!img) throw `*[❗] يرجى إعادة الرد على صورة أو فيديو لإنشاء ملصق وإضافة علامة مائية إليها.*`;
      let out;
      try {
        stiker = await sticker(img, false, global.packname, global.author);
      } catch (e) {
        console.error(e);
      } finally {
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img);
          else if (/image/g.test(mime)) out = await uploadImage(img);
          else if (/video/g.test(mime)) out = await uploadFile(img);
          if (typeof out !== 'string') out = await uploadImage(img);
          stiker = await sticker(false, out, global.packname, global.author);
        }
      }
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author);
      else return m.reply('*[❗] يرجى إرسال رابط صورة أو فيديو صالح لإنشاء ملصق وإضافة علامة مائية إليه.*');
    }
  } catch (e) {
    console.error(e);
    if (!stiker) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m);
    else throw '╰⊱❗️⊱ *خطأ* ⊱❗️⊱╮\nرد على صورة او مقطع لتحويله الى ملصق*';
  }
};

handler.help = ['sfull'];
handler.tags = ['ملصق'];
handler.command = /^ملصق|s$/i;
handler.limit = 1;
export default handler;

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zAZ0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'));
};
