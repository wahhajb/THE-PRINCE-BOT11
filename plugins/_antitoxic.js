const toxicRegex = /puto|puta|rata|خنيث|imbecil|rctmre|mrd|verga|vrga|maricon/i;

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe) {
        return !0;
    }
    if (!m.isGroup) {
        return !1;
    }
    const user = global.db.data.users[m.sender];
    const chat = global.db.data.chats[m.chat];
    const bot = global.db.data.settings[mconn.conn.user.jid] || {};
    const isToxic = toxicRegex.exec(m.text);

    if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
        user.warn += 1;
        if (!(user.warn >= 5)) await m.reply(`*[❗] ` + `${user.warn == 1 ? `مرحبًا @${m.sender.split`@`[0]}` : `@${m.sender.split`@`[0]}`}, قول كلمة "${isToxic}" ممنوع في هذه المجموعة. تحذير: ${user.warn}/5.` + `*`, false, { mentions: [m.sender] });
    }

    if (user.warn >= 5) {
        user.warn = 0;
        await m.reply(`*[❗] مرحبًا @${m.sender.split`@`[0]}, لقد تجاوزت 5 تحذيرات وستتم إزالتك من هذه المجموعة بسبب سلوكك.*`, false, { mentions: [m.sender] });
        user.banned = true;
        await mconn.conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        // await this.updateBlockStatus(m.sender, 'block')
    }
    return !1;
}
