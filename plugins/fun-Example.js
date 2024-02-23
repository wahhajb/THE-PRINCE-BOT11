let handler = m => m;

handler.all = async function(m) {
  if (/^كت$/i.test(m.text)) {
    conn.reply(m.chat, `*※【 ${pickRandom(global.Example)} 】※*
 ${gt}`, m);
  }
};

handler.help = ['Example'];
handler.tags = ['fun'];
handler.command = /^كت$/i; 
export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.Example = [
  'ال',
  'لايت',
  'انيوشا',
  'فيونا',
  'غابيمارو',
  'يوزوها',
  'مايكي',
  'دراكن',
  'لوفي',
  'ايتاتشي',
  'ناروتو',
  'سانجي',
  'اول مايت',
  'نوبارا',
  'توكيتو',
  'نيزوكو',
  'تانجيرو',
  'غوجو ساتورو',
  'تنغن ',
  'موزان',
  'ايتادوري',
  'سوكونا',
  'ميغومي',
  'هيناتا',
  'مي',
  'كيكيو',
  'ميليوداس',
  'ليفاي',
  'ميكاسا',
  'بيك',
  'ايرين',
  'رين',
  'كيلوا',
  'غون',
  'كاينا',
  'اثي',
  'ريو',
  'شادو',
  'لوغ',
  'فانيتاس',
  'اكامي',
  'ساسكي',
  'هانكوك',
  'نامي',
  'هوتارو',
  'ياماتو',
  'سيغرين'
];
