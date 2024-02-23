const handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*[❗خطأ❗]*
  
  *منشن احد @ او اكتب لقب او اسم شخص تبي يطلع لك نسبه حقه*

 *✅ واذا تبي نسبة حقك قول اسمك او لقبك وراح يجيبه*
 
${gt}`;
  const percentages = (100).getRandom();
  let emoji = '';
  let description = '';
  switch (command) {
    case 'حنكة':
      emoji = '💢';
      if (percentages < 40) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% محنك. ${emoji}*\n│\n*—◉ ماش قليل...انه ليس محنك نهائيا ! 🤣*`;
      } else if (percentages < 80) {
        description = `*النتيجة ل ${text.toUpperCase()} هو ${percentages}% محنك. ${emoji}*\n│\n*—◉ انه اقوى محنك..بالفعل ! 😯*`;
      } else {
        description = `*النتيجة ل  ${text.toUpperCase()} هو ${percentages}% محنك. ${emoji}*\n│\n*—◉ لك، لك انه حقا محنك. ☠*`;
      }
      break;
    case 'جمال':
      emoji = '😘';
      if (percentages < 40) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% جميل. ${emoji}*\n│\n*—◉ ماش قليل...انه ليس جميل بل قبيح ! 🤣*`;
      } else if (percentages < 80) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% جميل. ${emoji}*\n│\n*—◉ انه بالفعل جميل..ياحلو/ه ! 😯*`;
      } else {
        description = `*النتيجة ل  ${text.toUpperCase()} انه ${percentages}% جميل. ${emoji}*\n│\n*—◉ لك، لك بالفعل قمر. 🌚*`;
      }
      break;
    case 'انوثه':
    case 'انوثة':
      emoji = '🙎🏼‍♀️';
       if (percentages < 40) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% انوثته. ${emoji}*\n│\n*—◉ ماش قليل...انه ليس بنت بل رجال ! 🤣*`;
      } else if (percentages < 80) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% انوثته. ${emoji}*\n│\n*—◉ انه بالفعل بنوته ! 😯*`;
      } else {
        description = `*النتيجة ل  ${text.toUpperCase()} انه ${percentages}% انوثته. ${emoji}*\n│\n*—◉ لك، لك بالفعل بنت. 😭*`;
      }
      break;
    case 'رجوله':
    case 'رجولة':
      emoji = '🙍🏽‍♂️';
       if (percentages < 40) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% رجولته. ${emoji}*\n│\n*—◉ ماش قليل...انه ليس رجال بل بنوته ! 🤣*`;
      } else if (percentages < 80) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% رجولته. ${emoji}*\n│\n*—◉ انه بالفعل رجال ! 😯*`;
      } else {
        description = `*النتيجة ل  ${text.toUpperCase()} انه ${percentages}% رجولته. ${emoji}*\n│\n*—◉ لك، لك بالفعل رجال. 😭*`;
      }
      break;
    case 'ذكاء':
      emoji = '🧠';
     if (percentages < 40) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% ذكائه. ${emoji}*\n│\n*—◉ ماش قليل...انه ليس ذكي بل غبي ! 🤣*`;
      } else if (percentages < 80) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% ذكائه. ${emoji}*\n│\n*—◉ انه بالفعل ذكي ! 😯*`;
      } else {
        description = `*النتيجة ل  ${text.toUpperCase()} انه ${percentages}% ذكائه. ${emoji}*\n│\n*—◉ لك، لك بالفعل ذكي. 😭*`;
      }
      break;
    case 'كذب':
      emoji = '🤥';
      if (percentages < 40) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% كذبه. ${emoji}*\n│\n*—◉ ماش قليل...انه ليس شخص كذوب ! 🤣*`;
      } else if (percentages < 80) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% كذبه. ${emoji}*\n│\n*—◉ انه بالفعل شخص كذوب ! 🔪*`;
      } else {
        description = `*النتيجة ل  ${text.toUpperCase()} انه ${percentages}% كذبه. ${emoji}*\n│\n*—◉ لك، لك بالفعل اكبر اوسوب. 😭*`;
      }
      break;
    case 'الحب':
      emoji = '💖';
       if (percentages < 40) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% حبه. ${emoji}*\n│\n*—◉ ماش قليل...انه ليس الحب  ! 🤣*`;
      } else if (percentages < 80) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% حبه. ${emoji}*\n│\n*—◉ انه بالفعل الحب حقك ! 😘*`;
      } else {
        description = `*النتيجة ل  ${text.toUpperCase()} انه ${percentages}% حبه. ${emoji}*\n│\n*—◉ لك، لك بالفعل اكبر الحب لك. 😭*`;
      }
      break;
    case 'دراسة':
      emoji = '📚';
       if (percentages < 40) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% دراسته. ${emoji}*\n│\n*—◉ ماش قليل...انه شخص غبي  ! 🤣*`;
      } else if (percentages < 80) {
        description = `*النتيجة ل ${text.toUpperCase()} انه ${percentages}% دراسته. ${emoji}*\n│\n*—◉ انه بالفعل يحب الدراسة ! 😘*`;
      } else {
        description = `*النتيجة ل  ${text.toUpperCase()} انه ${percentages}% دراسته. ${emoji}*\n│\n*—◉ لك، لك بالفعل اكبر محب لدراسة. 😭*`;
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
handler.help = ['حنكة', 'جمال', 'انوثه', 'انوثة', 'ذكاء', 'كذب', 'الحب', 'دراسة'].map((v) => v + ' @tag | nombre');
handler.tags = ['calculator'];
handler.command = /^(حنكة|جمال|انوثه|انوثة|ذكاء|كذب|الحب|دراسة|رجوله|رجولة)$/i;
export default handler;
