import { performance } from 'perf_hooks';

export async function before(m) {
    const users = global.db.data.users;
    const chats = global.db.data.chats;

    // التحقق مما إذا كانت مكافحة السخرية مفعلة أم لا
    if (!chats[m.chat].antiSpam || m.isBaileys || m.mtype === 'protocolMessage' || m.mtype === 'pollUpdateMessage' || m.mtype === 'reactionMessage') {
        return;
    }

    // التحقق من وجود الرسالة وعدم وجود حظر للمرسل أو الدردشة
    if (!m.msg || !m.message || m.key.remoteJid !== m.chat || users[m.sender].banned || chats[m.chat].isBanned) {
        return;
    }

    // إعداد متغير السخرية
    this.spam = this.spam || {};
    this.spam[m.sender] = this.spam[m.sender] || { count: 0, lastspam: 0 };

    const now = performance.now();

    // حساب فارق الوقت بين الرسائل
    const timeDifference = now - this.spam[m.sender].lastspam;

    // التحقق من عدم وجود سخرية في الفترة الزمنية الأخيرة
    if (timeDifference < 10000) {
        this.spam[m.sender].count++;

        // التحقق من وجود سخرية متكررة
        if (this.spam[m.sender].count >= 5) {
            users[m.sender].banned = true;
            this.spam[m.sender].lastspam = now + 5000;

            // إزالة الحظر بعد مرور وقت محدد
            setTimeout(() => {
                users[m.sender].banned = false;
                this.spam[m.sender].count = 0;
                m.reply(`✅ *انتهى الفترة المؤقته*\nيمكنك إرسال الرسائل مرة أخرى.`);
            }, 5000);

            const message = m.mtype.replace(/message$/i, '').replace('audio', m.msg.ptt ? 'PTT' : 'audio').replace(/^./, v => v.toUpperCase()) || 'غير معروف';
            return m.reply(`❌ *يرجى عدم السخرية مرة اخرى ب ${message}*\nانتظر لمدة ${Math.ceil((this.spam[m.sender].lastspam - now) / 1000)} ثانية`);
        }
    } else {
        this.spam[m.sender].count = 0;
    }

    this.spam[m.sender].lastspam = now;
}
