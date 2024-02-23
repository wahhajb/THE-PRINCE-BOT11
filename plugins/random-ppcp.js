import fetch from 'node-fetch';
const handler = async (m, {
  conn,
  command,
}) => {
  const res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkeysapi}`);
  if (res.status != 200) throw await res.text();
  const json = await res.json();
  if (!json.status) throw json;
  conn.sendFile(m.chat, json.result.female, 'error.jpg', `بنت💖`, m);
  conn.sendFile(m.chat, json.result.male, 'error.jpg', `ولد🗿`, m);
  // conn.sendButton(m.chat, '𝙲𝙷𝙸𝙲𝙰 𝙲𝚄𝚃𝙴', wm, json.result.female, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
  // conn.sendButton(m.chat, '𝙲𝙷𝙸𝙲𝙾 𝙲𝚄𝚃𝙴', wm, json.result.male, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m)
};
handler.help = ['ppcouple'];
handler.tags = ['internet'];
handler.command = /^(طقم|تطقيم)$/i;
handler.limit = 2;
export default handler;
