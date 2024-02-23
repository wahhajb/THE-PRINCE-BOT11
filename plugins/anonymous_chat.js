async function handler(m, {usedPrefix, command}) {
  command = command.toLowerCase();
  this.anonymous = this.anonymous ? this.anonymous : {};
  switch (command) {
    case 'next':
    case 'leave': {
      const room = Object.values(this.anonymous).find((room) => room.check(m.sender));
      if (!room) return this.sendMessage(other, {text: `*[❗] لا يوجد دردشة مجهولة متاحة*\n\n*هل ترغب في الانضمام إلى دردشة جديدة؟*\nاكتب ${usedPrefix}start`}, {quoted: m});
      // this.sendButton(m.chat, '*[❗] لا يوجد دردشة مجهولة متاحة*\n\n*هل ترغب في الانضمام إلى دردشة جديدة؟*\n_اضغط على الزر للالتحاق بالدردشة_', author, null, [['الانضمام إلى الدردشة المجهولة', `.start`]], m)
      m.reply('*[ ✔ ] تم الانضمام إلى دردشة جديدة مجهولة*');
      const other = room.other(m.sender);
      if (other) await this.sendMessage(other, {text: `*[❗] المستخدم الآخر متصل بالفعل بدردشة مجهولة*\n\n*هل ترغب في الانضمام إلى دردشة جديدة؟*\nاكتب ${usedPrefix}start`}, {quoted: m});
      // this.sendButton(other, '*[❗] المستخدم الآخر متصل بالفعل بدردشة مجهولة*\n\n*هل ترغب في الانضمام إلى دردشة جديدة؟*\n_اضغط على الزر للالتحاق بالدردشة_', author, null, [['الانضمام إلى الدردشة المجهولة', `.start`]], m)
      delete this.anonymous[room.id];
      if (command === 'leave') break;
    }
    case 'start': {
      if (Object.values(this.anonymous).find((room) => room.check(m.sender))) return this.sendMessage(m.chat, {text: `*[❗] لا يمكنك الانضمام إلى دردشة مجهولة أخرى حاليًا*\n\n*هل ترغب في مغادرة الدردشة الحالية؟*\nاكتب ${usedPrefix}leave`}, {quoted: m});
      // this.sendButton(m.chat, '*[❗] لا يمكنك الانضمام إلى دردشة مجهولة أخرى حاليًا*\n\n*هل ترغب في مغادرة الدردشة الحالية؟*\n_اضغط على الزر لمغادرة الدردشة_', author, null, [['مغادرة الدردشة', `.leave`]], m)
      const room = Object.values(this.anonymous).find((room) => room.state === 'WAITING' && !room.check(m.sender));
      if (room) {
        await this.sendMessage(room.a, {text: `*[ ✔ ] تم العثور على شخص آخر للانضمام إلى دردشتك المجهولة, يرجى الانضمام*`}, {quoted: m});
        // this.sendButton(room.a, '*[ ✔ ] تم العثور على شخص آخر للانضمام إلى دردشتك المجهولة, يرجى الانضمام*', author, null, [['الانضمام إلى الدردشة', `.next`]], m)
        room.b = m.sender;
        room.state = 'CHATTING';
        await this.sendMessage(m.chat, {text: `*[ ✔ ] تم الانضمام إلى دردشة جديدة مجهولة, يرجى الانضمام*\n\nإذا كنت ترغب في الانتقال إلى دردشة جديدة, اكتب ${usedPrefix}next`}, {quoted: m});
        // this.sendButton(m.chat, '*[ ✔ ] تم الانضمام إلى دردشة جديدة مجهولة, يرجى الانضمام*\n\nإذا كنت ترغب في الانتقال إلى دردشة جديدة, اكتب .next', author, null, [['الانتقال إلى الدردشة', `.next`]], m)
      } else {
        const id = + new Date;
        this.anonymous[id] = {
          id,
          a: m.sender,
          b: '',
          state: 'WAITING',
          check: function(who = '') {
            return [this.a, this.b].includes(who);
          },
          other: function(who = '') {
            return who === this.a ? this.b : who === this.b ? this.a : '';
          },
        };
        await this.sendMessage(m.chat, {text: `*[❗] تم إنشاء دردشة مجهولة جديدة, يمكنك الانضمام إليها*\n\n*هل ترغب في مغادرة الدردشة الحالية؟*\nاكتب ${usedPrefix}leave`}, {quoted: m});
        // this.sendButton(m.chat, '*[❗] تم إنشاء دردشة مجهولة جديدة, يمكنك الانضمام إليها*\n\n*هل ترغب في مغادرة الدردشة الحالية؟*\n_اضغط على الزر لمغادرة الدردشة_', author, null, [['مغادرة الدردشة', `.leave`]], m)
      }
      break;
    }
  }
}
handler.help = ['start', 'leave', 'next'];
handler.tags = ['anonymous'];
handler.command = ['start', 'leave', 'next'];
handler.private = true;
export default handler;
