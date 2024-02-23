let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`▣──────────────────
│
▣─❧ ${toM(a)} 💍 ${toM(b)}
* 💞😂 احمم احمم, لايقين على بعض*
│
▣──────────────────
${gt}`, null, {
mentions: [a, b]
  
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['الزواج','حبايب']
handler.group = true
export default handler
