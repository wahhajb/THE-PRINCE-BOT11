const items = [
        'limit', 'exp',
    ]
    let confirmation = {}
    async function handler(m, { conn, args, usedPrefix, command }) {
        if (confirmation[m.sender]) return m.reply('انت تقوم بالتحويل')
        let user = global.db.data.users[m.sender]
        const item = items.filter(v => v in user && typeof user[v] == 'number')
        let lol = `✳️ استخدام الأمر
    *${usedPrefix + command}*  [tipo] [المبلغ] [@المستخدم]
    📌 مثال : ${usedPrefix + command} exp 65 @منشن

    📍 العناصر القابلة للتحويل
    ┌──────────────
    ▢ *limit* = الماس
    ▢ *exp* = الخبرة
    └──────────────
    `.trim()
        const type = (args[0] || '').toLowerCase()
        if (!item.includes(type)) return m.reply(lol)
        const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
        let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
        if (!who) return m.reply('✳️ علامة المستخدم')
        if (!(who in global.db.data.users)) return m.reply(`✳️ المستخدم ${who} ليس موجودا في قاعده البيانات`)
        if (user[type] * 1 < count) return m.reply(`✳️  *${type}* غير كافٍ للنقل رح جمع يا مطفر فشلتنا 🤦‍♂️`)
        let confirm = `
    هل انت متأكد من التحويل*${count}* ${type} إلى  *@${(who || '').replace(/@s\.whatsapp\.net/g, '')}* ? 

    لديك  *60* ثانيةلديك *60* ثانية 

اكتب : (نعم) لإكمال التحويل 
اكتب : (لا) لإلغاء التحويل `.trim()
        let c = '𝙹𝙾𝙽 𝚂𝙽𝙾𝚆 𝙱𝙾𝚃'
        await conn.reply(m.chat, confirm, m, { mentions: [who] })
        confirmation[m.sender] = {
            sender: m.sender,
            to: who,
            message: m,
            type,
            count,
            timeout: setTimeout(() => (m.reply('انتهى الوقت'), delete confirmation[m.sender]), 60 * 1000)
        }
    }

    handler.before = async m => {
        if (m.isBaileys) return
        if (!(m.sender in confirmation)) return
        if (!m.text) return
        let { timeout, sender, message, to, type, count } = confirmation[m.sender]
        if (m.id === message.id) return
        let user = global.db.data.users[sender]
        let _user = global.db.data.users[to]
        if (/^نعم|نعم$/i.test(m.text) ) { 
            clearTimeout(timeout)
            delete confirmation[sender]
            let previous = user[type] * 1
            let _previous = _user[type] * 1
            user[type] -= count * 1
            _user[type] += count * 1
            if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`✅ تم التحويل\n\n*${count}* *${type}* إلى @${(to || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [to] })
            else {
                user[type] = previous
                _user[type] = _previous
                m.reply(`خطأ في نقل *${count}* ${type} إلى *@${(to || '').replace(/@s\.whatsapp\.net/g, '')}*`, null, { mentions: [to] })
            }
        }
        if (/^لا|لا$/i.test(m.text) ) { 
            clearTimeout(timeout)
            delete confirmation[sender]
            return m.reply('تم الإلغاء')
        }
    }

    handler.help = ['transfer'].map(v => v + ' [النوع] [الكمية] [@وسم]')
    handler.tags = ['xp']
    handler.command = ['تحويل'] 

    handler.disabled = false

    export default handler

    function special(type) {
        let b = type.toLowerCase()
        let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
        return special
    }

    function isNumber(x) {
        return !isNaN(x)
          }