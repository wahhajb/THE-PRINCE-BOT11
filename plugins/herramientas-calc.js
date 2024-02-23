const handler = async (m, { conn, text }) => {
  const id = m.chat;
  conn.math = conn.math ? conn.math : {};

  if (id in conn.math) {
    clearTimeout(conn.math[id][3]);
    delete conn.math[id];
    m.reply('تم إلغاء حساب المعادلات الرياضية');
  }

  const val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-');

  const format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×');

  try {
    console.log(val);
    const result = (new Function('return ' + val))();

    if (!result) throw result;

    m.reply(`*${format}* = _${result}_`);
  } catch (e) {
    if (e == undefined) throw '*[ خطأ ]*\n\nيرجى ادخال رقم معين لحسبة يحسب جميع معادلات\n*مثال:*\n1+1';
    throw '*[❗] فشلت عملية الحساب، يرجى التأكد من الأرقام والرموز الصحيحة -، +، *، /، ×، ÷، π، e، (، )*';
  }
};

handler.help = ['calc <expression>'];
handler.tags = ['tools'];
handler.command = /^(احسب(ulat(e|or))?|kalk(ulator)?)$/i;
handler.limit = 2;

export default handler;
