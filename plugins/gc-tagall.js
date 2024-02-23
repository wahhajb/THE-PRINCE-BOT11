const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*الرسالة:* ${pesan}`;
  let teks = `*⺀🛡️قائمة المنشن الجماعي🛡️⺀*\n\n❏ ${oi}\n\n❏ *الاعضاء:*\n`;
  for (const mem of participants) {
    teks += ` @${mem.id.split('@')[0]} ▣\n`;
  }
  teks += 
`${gt}`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(منشن)$/i;
handler.admin = true;
handler.group = true;
export default handler;
