let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗] حط اسم النص تبي يسوي لك منها رسم*\n\n*❏ مثال*\n*❏ ${usedPrefix + command} مدري *`
try {
m.reply('*[❗] انتظر لحظة حتى أرسل ما طلبته*')
let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
throw `*[❗] خطأ، حاول مرة أخرى*`
}
}
handler.command = ["رسم"]
handler.level = 1
handler.limit = 2
export default handler
