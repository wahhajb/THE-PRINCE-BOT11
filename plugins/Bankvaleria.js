import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
    try {
        let menu = `
*‏【‏𝐄𝐀𝐒𝐓𓆩🌀𓆪 𝑽𝒂𝒍𝒆𝒓𝒊𝒂】*

*· • • ━ ╃✦⊰ ⌝🌀⌞ ⊱✦╄ ━ • • ·*
*•⤦رابط البنك⤥•*
*https://tinyurl.com/24l3fm6j*

\`مسؤول البنك للإستفسار :-\`  
*https://wa.me/97474727015*

⋅•⋅•⋅•⋅•⋅•🌀⋅•⋅•⋅•⋅•⋅•⋅

*•⤦رابط المتجر⤥•*
*http://tinyurl.com/23xs8pmk*

\`مسؤول المتجر للإستفسار :-\`  
*https://wa.me/97474727015*

*⎔⋅• ━ ╼╃ ⌬〔🌀〕⌬ ╄╾ ━ •⋅⎔*
*~⌬ تــ✍︎ــوقــيــع ↡~*
*‏【‏𝐄𝐀𝐒𝐓𓆩🌀𓆪 𝑽𝒂𝒍𝒆𝒓𝒊𝒂】*
*┗━ ╼━━╃⌬〔🛡〕⌬╄━━╾ ━┛*
`;

        const imageURL = 'https://telegra.ph/file/89ef4c76c79a37c66d763.jpg';

        await conn.sendMessage(m.chat, { image: { url: imageURL }, caption: menu });
    } catch (error) {
        console.log(error);
    }
};

handler.command = /^بنك-فاليريا$/i;
handler.limit = 1;

export default handler;