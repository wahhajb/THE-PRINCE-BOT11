//
// بواسطة @NeKosmic || https://github.com/NeKosmic/
//

import * as fs from 'fs';

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
    if (m.isBaileys && m.fromMe) {
        return !0;
    }
    if (!m.isGroup) return !1;
    const chat = global.db.data.chats[m.chat];
    const bot = global.db.data.settings[this.user.jid] || {};
    const delet = m.key.participant;
    const bang = m.key.id;
    const name = await conn.getName(m.sender);
    const fakemek = { 'key': { 'participant': '0@s.whatsapp.net', 'remoteJid': '0@s.whatsapp.net' }, 'message': { 'groupInviteMessage': { 'groupJid': '51995386439-1616969743@g.us', 'inviteCode': 'm', 'groupName': 'P', 'caption': '𝚃𝚑𝚎 𝙼𝚢𝚜𝚝𝚒𝚌 - 𝙱𝚘𝚝', 'jpegThumbnail': null } } };
    if (chat.antiTraba && m.text.length > 5000) { // الحد الأقصى لعدد الأحرف المسموح بها في الرسالة//
        if (isAdmin) return conn.sendMessage(m.chat, { text: `المشرف @${m.sender.split('@')[0]} قام للتو بإرسال نص يحتوي على الكثير من الأحرف -.-!`, mentions: [m.sender] }, { quoted: fakemek });
        conn.sendMessage(m.chat, `*[ ! ] تم اكتشاف رسالة تحتوي على الكثير من الأحرف [ ! ]*\n`, `${isBotAdmin ? '' : 'لست مسؤولاً، لا يمكنني القيام بأي شيء :/'}`, m);
        // await conn.sendButton(m.chat, `*[ ! ] تم اكتشاف رسالة تحتوي على الكثير من الأحرف [ ! ]*\n`, `${isBotAdmin ? '' : 'لست مسؤولاً، لا يمكنني القيام بأي شيء :/'}`, author, ['[ إيقاف مضاد الكتابة الزائدة ]', usedPrefix+'apagar antitraba'], fakemek )
        if (isBotAdmin && bot.restrict) {
            conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });
            setTimeout(() => {
                conn.sendMessage(m.chat, { text: `تم تسجيل الرسالة كمقروءة ✓\n${'\n'.repeat(400)}\n=> الرقم : wa.me/${m.sender.split('@')[0]}\n=> الاسم : ${name}\n[ ! ] لقد قام للتو بإرسال نص يحتوي على الكثير من الأحرف والذي قد يتسبب في تعطيل الأجهزة`, mentions: [m.sender] }, { quoted: fakemek });
            }, 0);
            setTimeout(() => {
                conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
            }, 1000);
        } else if (!bot.restrict) return m.reply('[ ! ] للقيام بإجراءات الحذف، يجب على مالكي البوت تفعيل وضع التقييد!');
    }
    return !0;
}
