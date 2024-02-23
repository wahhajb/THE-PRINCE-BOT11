import axios from 'axios';

const handler = async (m, { args }) => {
  if (!args[0]) throw '*[❗] يرجى إرسال اسم المدينة أو البلد للحصول على معلومات الطقس*';
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`);
    const data = response.data;
    const cityName = data.name;
    const country = data.sys.country;
    const weatherDescription = data.weather[0].description;
    const temperature = `${data.main.temp}°C`;
    const minTemperature = `${data.main.temp_min}°C`;
    const maxTemperature = `${data.main.temp_max}°C`;
    const humidity = `${data.main.humidity}%`;
    const windSpeed = `${data.wind.speed}km/h`;

    const weatherInfo = `📍 المدينة: ${cityName}\n🗺️ البلد: ${country}\n🌤️ الحالة الجوية: ${weatherDescription}\n🌡️ درجة الحرارة: ${temperature}\n💠 درجة الحرارة الدنيا: ${minTemperature}\n📛 درجة الحرارة القصوى: ${maxTemperature}\n💦 نسبة الرطوبة: ${humidity}\n🌬️ سرعة الرياح: ${windSpeed}
${gt}`

    m.reply(weatherInfo);
  } catch {
    return '*[❗] لا يمكن العثور على نتائج لهذا الاستعلام، تحقق من صحة اسم المدينة أو البلد*';
  }
};

handler.help = ['clima *<اسم المدينة/البلد>*'];
handler.tags = ['herramientas'];
handler.command = /^(البلد|tiempo)$/i;
handler.limit = 2
export default handler;
