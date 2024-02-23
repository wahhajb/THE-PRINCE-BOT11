import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
try {
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
let menu = `*اهلا وسهلا تنورنا في احد فيالق مملكة الشرق🛡️..و اذا فيه رابط مو شغال او شيء تواصل مع المطور او قائد الفيالق جون سنو*
*[ https://wa.me/97474727015 ]*

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
⚽ *فيلق الرياضة*
*https://chat.whatsapp.com/JXWTRxMzjr11ZgiTm3EwE4*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🎨 *فيلق المواهب*
*https://chat.whatsapp.com/EPexfHPLeYs8lJs3IGVra5*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
📙 *فيلق المانجا*
*https://chat.whatsapp.com/KdLmgQfzo9CDpeS66Dd2bF*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🎥 *فيلق الافلام*
*https://chat.whatsapp.com/GOogkrB0s7s8V5wBL7XSjk*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🇯🇵 *فيلق اليابان*
*https://chat.whatsapp.com/KVUO4wmxFfx4gQ2tDmMCul*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🍥 *فيلق الطبخ*
*https://chat.whatsapp.com/KdoXZ2TRwNj08n7yIausQH*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
🏵️ *إعلانات الفيالق*
*https://chat.whatsapp.com/KdoXZ2TRwNj08n7yIausQH*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*【مجلس فيالق《🏵️》‏𝐄𝐀𝐒𝐓】*

${gt}`

const vi = ['https://telegra.ph/file/4d55a0bde8a319f600703.mp4']

try {
await conn.sendMessage(m.chat, { video: { url: vi.getRandom() }, gifPlayback: true, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: { url: gataMenu.getRandom() }, gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try {
await conn.sendMessage(m.chat, { image: gataImg.getRandom(), gifPlayback: false, caption: menu, mentions: [m.sender, global.conn.user.jid] }, { quoted: fkontak }) 
} catch (error) {
try{
await conn.sendFile(m.chat, imagen5, 'menu.jpg', menu, fkontak, false, { mentions: [m.sender, global.conn.user.jid] })
} catch (error) {
return 
}}}} 

} catch (e) {
await m.reply( + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + ` == 'es' ? 'reporte' : 'report'}` + '* ' + `` + usedPrefix + command)
console.log(`❗❗ ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^الفيالق|فيالق/i
handler.limit = 1
export default handler
    
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}