const handler = async (m, {conn, text}) => {
  if (!text) throw 'يرجى اضافة النص التي تريدها يحولك الا تعيلق يوتيوب ';
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    comment: text,
    username: conn.getName(m.sender),
  }), 'error.png', '✅تم', m);
};
handler.help = ['ytcomment <comment>'];
handler.tags = ['maker'];
handler.command = /^(تعليق)$/i;
handler.limit = 1;
export default handler;
