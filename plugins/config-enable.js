const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const optionsFull = `
--------------------------------

*الخيار:* ✨ | مرحباً
*الأمر:* ${usedPrefix + command} مرحباً
*الوصف:* قم بتمكين أو تعطيل الترحيب في المجموعة.

--------------------------------

*الخيار:* 🌎 | الوضع العام
*الأمر:* ${usedPrefix + command} عام
*الوصف:* يجعل البوت عامًا أو خاصًا.

--------------------------------

*الخيار:* 🔗 | منع الروابط
*الأمر:* ${usedPrefix + command} منعروابط
*الوصف:* قم بتمكين أو تعطيل منع الروابط على WhatsApp.

--------------------------------

*الخيار:* 🔗 | منع الروابط 2
*الأمر:* ${usedPrefix + command} منعروابط2
*الوصف:* قم بتمكين أو تعطيل منع الروابط التي تبدأ بـ HTTPS.

--------------------------------

*الخيار:* 🔎 | اكتشاف
*الأمر:* ${usedPrefix + command} اكتشاف
*الوصف:* قم بتمكين أو تعطيل إشعارات التغييرات في المجموعة.

--------------------------------

*الخيار:* 🔎 | اكتشاف 2
*الأمر:* ${usedPrefix + command} اكتشاف2
*الوصف:* اكتشاف التغييرات في المجموعة وإدارتها بشكل أفضل.

--------------------------------

*الخيار:* ❗ | قيد
*الأمر:* ${usedPrefix + command} قيد
*الوصف:* قم بتمكين أو تعطيل قيود البوت، مثل إزالة أو إضافة أشخاص إلى المجموعة.

--------------------------------

*الخيار:* ☑️ | قراءة تلقائية
*الأمر:* ${usedPrefix + command} قراءةتلقائية
*الوصف:* قم بوضع علامة على الرسائل والحالات كمقروءة تلقائيًا.

--------------------------------

*الخيار:* 💬 | الرد على الرسائل الخاصة فقط
*الأمر:* ${usedPrefix + command} ردعلىالخاص
*الوصف:* سيقوم البوت بالرد على الأوامر فقط إذا كانت المحادثة خاصة.

--------------------------------

*الخيار:* 🏢 | الرد على المجموعات فقط
*الأمر:* ${usedPrefix + command} ردعلىالمجموعات
*الوصف:* سيقوم البوت بالرد على الأوامر فقط إذا كانت المحادثة في مجموعة.

--------------------------------

*الخيار:* 🤖 | وضع التفاعل مع الروبوت
*الأمر:* ${usedPrefix + command} تفاعلمعالروبوت
*الوصف:* قم بتمكين أو تعطيل استخدام الأمر لترقية وتنزيل الروبوت 

--------------------------------

*الخيار:* 👑 | وضع الإداريين فقط
*الأمر:* ${usedPrefix + command} إداريينفقط
*الوصف:* سيقوم البوت بالرد على المشرفين فقط في المجموعة.

--------------------------------

*الخيار:* ⏳ | منع السبام
*الأمر:* ${usedPrefix + command} منعالسبام
*الوصف:* سيقوم البوت بكشف عندما يقوم مستخدم بإرسال أمر سبام وسيحظره ل

مدة 5 ثوانٍ ويحذره.

--------------------------------

*الخيار:* 🛡️ | منع الحذف
*الأمر:* ${usedPrefix + command} منعالحذف
*الوصف:* سيقوم البوت بكشف عندما يقوم مستخدم بحذف رسالة وسيقوم بإعادة إرسالها.

--------------------------------`.trim();

  const isEnable = /true|تفعيل|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
   case 'مرحبًا':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'اكتشاف':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'اكتشاف2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'سيمسيمي':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'منعروابط':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'منعحذف':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'منعحذف':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'عام':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'منعروابط':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'منعروابط2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'منعمشاهدة':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'وضعإباحي':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'وضعإداريين':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'ستيكرتلقائي':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'أصوات':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'قيد':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'الأصواتالبوت':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'وضعذكاءصناعي':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'قراءةتلقائية':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'فقطخاص':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.privateonly = isEnable;
      break;
    case 'فقطمجموعات':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.grouponly = isEnable;
      break;
    case 'منعمكالمات':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.blockcall = isEnable;
      break;
    case 'منعرسائلخاصة':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.blockchat = isEnable;
      break;
    case 'منعسب':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antinsfw = isEnable;
      break;
    case 'منعنصوص':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiindonesia = isEnable;
      break;
    case 'منععرب':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiarab = isEnable;
      break;
    case 'قراءةتلقائية':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `🗂️ *الخيار:* ${type}\n🎚️ *الوضع:* ${isEnable ? 'ممكّن' : 'معطل'}\n📣 *لل:* ${isAll ? 'هذا البوت' : isUser ? '' : 'هذه المحادثة'}`}, {quoted: m});
};
handler.help = ['قم', 'قمم'].map((v) => v + 'ل <option>');
handler.tags = ['مجموعة', 'المالك'];
handler.command = /^((تفع|تعط)يل|(tru|fals)e|(turn)?o(n|ff)|[01])$/i;
handler.rowner = true;
export default handler;