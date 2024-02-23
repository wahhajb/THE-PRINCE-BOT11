const handler = async (m, {conn, usedPrefix, text}) => {
  if (isNaN(text) && !text.match(/@/g)) {

  } else if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }

  if (!text && !m.quoted) return conn.reply(m.chat, `*[❗] استخدام صحيح*\n\n*┯┷*\n*┠≽ ${usedPrefix}ترقية @tag*\n*┠≽ ${usedPrefix}ترقية -> الرد على رسالة*\n*┷┯*
  ${gt}`, m);
  if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*[ ⚠️ ] الرقم المُدخل غير صحيح، يرجى إدخال رقم صحيح*`, m);

  try {
    if (text) {
      var user = number + '@s.whatsapp.net';
    } else if (m.quoted.sender) {
      var user = m.quoted.sender;
    } else if (m.mentionedJid) {
      var user = number + '@s.whatsapp.net';
    }
  } catch (e) {
  } finally {
    conn.groupParticipantsUpdate(m.chat, [user], 'promote');
    conn.reply(m.chat, `*[ ✅ ] تم تنفيذ الأمر*`, m);
  }
};
handler.help = ['*593xxx*', '*@مستخدم*', '*الرد على الدردشة*'].map((v) => 'promote ' + v);
handler.tags = ['group'];
handler.command = /^(ترقية|daradmin|darpoder)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
handler.fail = null;
export default handler;
