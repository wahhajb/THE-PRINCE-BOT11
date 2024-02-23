const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*[❗خطأ❗]*
  
  *منشن احد @ او اكتب لقب او اسم شخص تبي يطلع لك نسبه حقه*

 *✅ واذا تبي نسبة حقك قول اسمك او لقبك وراح يجيبه*
 
${gt}`;
  const percentages = (100).getRandom();
  let emoji = '';
  let description = '';
  switch (command) {
    case 'نسبة':
      emoji = '🌚';
      if (percentages < 40) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% نسبة ${emoji}*\n│\n*—◉ ماش قليل ...  ! 🤣*`;
      } else if (percentages < 80) {
        description = `*النتيجة ل ${text.toUpperCase()} هو ${percentages}% نسبة ${emoji}*\n│\n*—◉ ول ول ول ! 😯*`;
      } else {
        description = `*النتيجة ل  ${text.toUpperCase()} هو ${percentages}% نسبة ${emoji}*\n│\n*—◉ ياساتر ياساتر ☠*`;
      }
      break;
      default:
      throw `*[❗] أمر خاطئ.*`;
  }
 const responses = [
  "تحدث الكون.",
  "يؤكد العلماء ذلك.",
  "مفاجأة! 🎉"
];
  const response = responses[Math.floor(Math.random() * responses.length)];
  const cal = `▣──────────────────
│
—◉ ${description}
│
▣──────────────────
${gt}`.trim()  
  async function loading() {
var hawemod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ███████▒▒▒▒▒》50%",
"《 ████████████》100%"
]
   let { key } = await conn.sendMessage(m.chat, {text: `*🔄جاري التحميل🔄*`, mentions: conn.parseMention(cal)}, {quoted: m})
 for (let i = 0; i < hawemod.length; i++) {
   await new Promise(resolve => setTimeout(resolve, 1000)); 
   await conn.sendMessage(m.chat, {text: hawemod[i], edit: key, mentions: conn.parseMention(cal)}, {quoted: m}); 
  }
  await conn.sendMessage(m.chat, {text: cal, edit: key, mentions: conn.parseMention(cal)}, {quoted: m});         
 }
loading()    
};
handler.help = [ 'نسبة'].map((v) => v + ' @tag | nombre');
handler.tags = ['calculator2'];
handler.command = /^(نسبة)$/i;
export default handler;