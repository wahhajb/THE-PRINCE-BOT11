global.math = global.math ? global.math : {}
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "Halo"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;FN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  }
  
  let id = m.chat
  if (id in global.math) return conn.reply(m.chat, `*هناك سؤال لم يتم الرد عليه حتى الان!!*`, global.math[id][0])

  let math = genMath()
  global.math[id] = [
    await conn.reply(m.chat, `سؤال هو *${math.str} = ?*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
الوقت
🧭 *${(math.time / 1000).toFixed(0)} ثانية*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
الجائزة 
🏆 *${math.bonus} خبرة*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
${gt}`, m),
    math, 4,

    await conn.reply(m.chat, `⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️⬆️

اذا عندك اجابة رد عليه وجاوب حتى يحسب لك الاجابة\n${wm}`, fkontak, m), math, 4,

    setTimeout(() => {
      if (global.math[id]) conn.reply(m.chat, `*الوقت انتهى!!*\n*الجواب هي ${math.result}*`, global.math[id][0])
      delete global.math[id]
    }, math.time)
  ]
}
handler.help = ['math']
handler.tags = ['game']
handler.command = /^math|رياضيات|معادلة/i


export default handler

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath() {
  let a = randomInt(-100, 100)
  let b = randomInt(-100, 100)
  let op = pickRandom(['+', '-', '*', '/'])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
    str: `${a} ${operators[op]} ${b}`,
    time: 30000, 
    bonus: 300, 
    result
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

async function handleMathError(m, usedPrefix, command, e) {
  console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
  console.log(e)
}            