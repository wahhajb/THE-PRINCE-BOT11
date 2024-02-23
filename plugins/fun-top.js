import util from 'util'
import path from 'path'
let user = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata, command, conn, text, usedPrefix}) {
if (!text) throw `غلط يحب نسيت النص مثال:\n.اكبر حمار
او اي شي اكتب وراح يمنشن شخص عشوائي`
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let c = ps.getRandom()
let d = ps.getRandom()
let e = ps.getRandom()
let f = ps.getRandom()
let g = ps.getRandom()
let h = ps.getRandom()
let i = ps.getRandom()
let j = ps.getRandom()
let k = Math.floor(Math.random() * 70);
let x = `${pickRandom(['🤓','😅','😂','😳','😎', '💫', '😱', '🤑', '🙄', '🤍','✨','🤨','🥴','🔥','👇🏻','😔', '👀','🌚'])}`
let l = Math.floor(Math.random() * x.length);
let vn = `${k}`
let top = `▣──────────────────
│
*▣─❧${x} الطلب اكبر ${text} ${x}*
│
*▣─❧هو ${user(a)}*
│
▣──────────────────
${gt}`
m.reply(top, null, { mentions: [a]})
conn.sendFile(m.chat, vn, 'error.mp3', null, m, true, {
type: 'audioMessage',
ptt: true })}
handler.help = handler.command = ['اكبر']
handler.tags = ['fun']
handler.group = true
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
