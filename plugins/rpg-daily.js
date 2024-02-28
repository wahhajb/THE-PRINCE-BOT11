import fetch from 'node-fetch';
const handler = async (m, {isPrems, conn}) => {
  const fkontak = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net',
  };
  const mystic = './Menu2.jpg';
  const dos = [md];
  const user = global.db.data.users[m.sender];
  const premium = user.premium;

 let exp = `${pickRandom([500, 600, 700, 800, 900, 999, 1000, 1300, 1500, 1800])}` * 1
let exppremium = `${pickRandom([1000, 1500, 1800, 2100, 2500, 2900, 3300, 3600, 4000, 4500])}` * 1
	
let money = `${pickRandom([300, 500, 700, 900, 500, 800, 900, 1100, 1350, 1500])}` * 1
let limit = `${pickRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}` * 1

  // let gata = Math.floor(Math.random() * 2000)

 const recompensas = {	
  exp: premium ? exppremium : exp,
  money: premium ? moneypremium : money,
  limit: premium ? limitpremium : limit,
};

let time = user.lastclaim + 7200000 //2 Horas 7200000
if (new Date - user.lastclaim < 7200000) return await conn.reply(m.chat, `\nلقد بالفعل اخذت هديتك  🎁\nتعال بعد *${msToTime(time - new Date())}*لاخذ الهداية منجديد`, fkontak,  m);
  // await conn.sendButton(m.chat, `𝙔𝘼 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙎𝙏𝙀 𝙏𝙐 𝙍𝙀𝙂𝘼𝙇𝙊 🎁\n𝙑𝙐𝙀𝙇𝙑𝙀 𝙀𝙉 *${msToTime(time - new Date())}* 𝙋𝘼𝙍𝘼 𝙑𝙊𝙇𝙑𝙀𝙍 𝘼 𝙍𝙀𝘾𝙇𝘼𝙈𝘼𝙍`, wm, null, [['𝗠 𝗘 𝗡 𝗨 ☘️', '/menu']], fkontak, m)
  let texto = '';
  for (const reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue;
    user[reward] += recompensas[reward];
    texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n┃ `;
  }
  const text = `╭━━🎁━🎁━🎁━━⬣
 
 ✨ خذ هديتك !! 
 ${texto}
╰━━🎁━🎁━🎁━━⬣
${gt}`;
  const img = 'https://telegra.ph/file/30c1cd55e66d7c39eea3a.jpg';
  await conn.sendFile(m.chat, img, 'east.jpg', text, fkontak);
  // await conn.sendButton(m.chat, text, texto + `\n\n🎟️ 𝗣 𝗥 𝗘 𝗠 𝗜 𝗨 𝗠 ⇢ ${premium ? '✅' : '❌'}\n${wm}`, img, [['⛰️ 𝘼𝘽𝙍𝙄𝙍 𝘾𝙊𝙁𝙍𝙀 | 𝘾𝙊𝙁𝙁𝙀𝙍 ⛰️', '/cofre'], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], m, dos.getRandom())
  user.lastclaim = new Date * 1;
};
handler.help = ['daily'];
handler.tags = ['xp'];
handler.command = ['هديتي'];
export default handler;

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return hours + ' ساعة ' + minutes + ' دقيقة';
}