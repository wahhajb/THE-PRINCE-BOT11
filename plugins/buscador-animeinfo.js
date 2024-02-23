import translate from '@vitalets/google-translate-api';
import { Anime } from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`*[❗خطأ❗] الرجاء إدخال اسم أنمي للبحث عنه*`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'ar', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'ar', autoCorrect: true});
    const AnimeInfo = `
🎀 • *العنوان:* ${result.title}

🎋 • *الصيغة:* ${result.type}

📈 • *الحالة:* ${result.status.toUpperCase().replace(/\_/g, ' ')}

🍥 • *إجمالي الحلقات:* ${result.episodes}

🏅 • *التصنيف العام:* ${result.rank}

♦ • *الفيديو الترويجي:* ${result.trailer.url}

🌐 • *الرابط:* ${result.url}

🎆 • *الخلفية:* ${resultes.text}

❄ • *الملخص:* ${resultes2.text}
${gt}`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*[❗] خطأ، يرجى المحاولة مرة أخرى*`;
  }
};
handler.command = /^(انمي|animeinfo)$/i;
export default handler;
