const xpperlimit = 350;
const handler = async (m, {conn, command, args}) => {
  let count = command.replace(/^buy/i, '');
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1;
  count = Math.max(1, count);
  if (global.db.data.users[m.sender].exp >= xpperlimit * count) {
    global.db.data.users[m.sender].exp -= xpperlimit * count;
    global.db.data.users[m.sender].limit += count;
    conn.reply(m.chat, `
┌─「 *إيصال الدفع* 」
‣ *الشراء* : + ${count}💎 
‣ *تم الدفع* : -${xpperlimit * count} نقطة خبرة
└──────────────`, m);
  } else conn.reply(m.chat, `❎ آسف، ليس لديك ما يكفي من *نقاط الخبرة* لشراء *${count}* نقاط خبرة💎`, m);
};
handler.help = ['شراء', 'شراءالكل'];
handler.tags = ['xp'];
handler.command = ['شراءالكل'];

handler.disabled = false;

export default handler;
