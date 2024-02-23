import fs from 'fs'
let timeout = 60000
let poin = 500
let dia = 1
let handler = async (m, { conn, usedPrefix }) => {
conn.tekateki = conn.tekateki ? conn.tekateki : {}
let id = m.chat
if (id in conn.tekateki) {
conn.reply(m.chat, '*يجب الرد على سؤال قبل الاسئلة الاخرى*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n𝙹𝙾𝙽 𝚂𝙽𝙾𝚆 𝙱𝙾𝚃', conn.tekateki[id][0])
throw false
}
let tekateki = JSON.parse(fs.readFileSync(`./src/game/football.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `ⷮ ◉* سـؤال رياضي عشوائي*◉

*⎔ ⋅ ──━ •﹝⚽﹞• ━── ⋅ ⎔*

*السؤال ﹝${json.question}﹞*

*الجوائز﹝+${poin} خبرة و ${dia} الماسه💎﹞*

*المدة ﹝${(timeout / 1000).toFixed(2)} ثانية﹞*

*⎔ ⋅ ──━ •﹝⚽﹞• ━── ⋅ ⎔*
${gt}`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m), json, 
poin,
setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `❃ انتهى الوقت الجواب هو ❌ ❃

*${json.response}*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
${gt}`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)]}
handler.help = ['football']
handler.tags = ['game']
handler.command = /^(رياضة)$/i
export default handler