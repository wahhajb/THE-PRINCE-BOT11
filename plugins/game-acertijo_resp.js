import similarity from 'similarity';

const threshold = 0.72;

let handler = m => m;

handler.before = async function (m) {
  let id = m.chat;
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0;

  this.tekateki = this.tekateki ? this.tekateki : {};

  if (!(id in this.tekateki)) return m.reply('*لقد انتهى السؤال!*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝙹𝙾𝙽 𝚂𝙽𝙾𝚆 𝙱𝙾𝚃');

  if (m.quoted.id == this.tekateki[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tekateki[id][1]));

    if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.tekateki[id][2];
      global.db.data.users[m.sender].limit += 1; // Agregar 2 diamantes al usuario

      m.reply(`❃ احسنت الجواب صحيح ✅ ❃

*لقد ربحت*\n+${this.tekateki[id][2]} Exp\n+1 💎
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
${gt}`); // Mostrar los diamantes ganados

      clearTimeout(this.tekateki[id][3]);
      delete this.tekateki[id];
    } else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) {
      m.reply(`*قريب من الاجابه حاول تكتبه بشكل جيد !*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
${gt}`);
    } else {
      m.reply('*❌جواب خطأ !*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝙹𝙾𝙽 𝚂𝙽𝙾𝚆 𝙱𝙾𝚃');
    }
  }

  return !0;
};

handler.exp = 0;

export default handler;
