let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`▣──────────────────
│
* شريك حياتك  🫢 *
▣─❧ هو ${toM(a)} 
│
▣──────────────────
${gt}`, null, {
  
mentions: [a]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['شريك']
handler.group = true
export default handler