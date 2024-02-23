const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe) {
        return !0;
    }
    if (!m.isGroup) return !1;
    const chat = global.db.data.chats[m.chat];
    const delet = m.key.participant;
    const bang = m.key.id;
    const bot = global.db.data.settings[this.user.jid] || {};
    const user = `@${m.sender.split`@`[0]}`;
    const isGroupLink = linkRegex.exec(m.text);
    const grupo = `https://chat.whatsapp.com`;
    if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*[❗] مرحبًا! الرابط ممنوع، يرجى عدم استخدام الروابط 😎, تم حذف الرسالة/الرابط!*');
    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
            if (m.text.includes(linkThisGroup)) return !0;
        }
        await this.sendMessage(m.chat, {
            text: `*「 الروابط الممنوعة 」*\n*مرحبًا ${user}، تم رفض روابط المجموعة 👋، سيتم حذفها...!!`,
            mentions: [m.sender]
        }, { quoted: m });
        if (!isBotAdmin) return m.reply('*[❗] البوت غير مسموح له بالرد على الروابط، يرجى تفعيل البوت للرد على روابط المجموعة*');
        if (isBotAdmin && bot.restrict) {
            await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });
            const responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
            if (responseb[0].status === '404') return;
        } else if (!bot.restrict) return m.reply('*[❗] البوت مفعل بدون قيود، يرجى إلغاء قيود البوت للسماح بردوده على روابط المجموعة*');
    }
    return !0;
}
