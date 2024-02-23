import fs from 'fs'
let timeout = 50000
let poin = 500
let dia = 1
let handler = async (m, { conn, usedPrefix }) => {
conn.tekateki = conn.tekateki ? conn.tekateki : {}
let id = m.chat
if (id in conn.tekateki) {
conn.reply(m.chat, '*يجب الرد على سؤال قبل الاسئلة الاخرى*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝙹𝙾𝙽 𝚂𝙽𝙾𝚆 𝙱𝙾𝚃', conn.tekateki[id][0])
throw false
}
let tekateki = JSON.parse(fs.readFileSync(`./src/game/worlds.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `🌏【 تخمين العلم الصحيح 】🌏
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
العلم『 *${json.question} * 』 ❓

المدة『  *${(timeout / 1000).toFixed(2)} ثانية* 』
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
${gt}`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m), json, 
poin,
setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*انتهى الوقت اسم العلم هو*
*※【﻿${json.response} 】※*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
${gt}`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)]}
handler.help = ['worlds']
handler.tags = ['game']
handler.command = /^(علم)$/i
export default handler