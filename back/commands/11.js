module.exports = {
	name: "جراة",
   type: 'ترفيه',
   otherName: ['جراه'],
	version: "1.1.2",
	usageCount: 0,
   errCount: 0,
   creator: 'لنك',
	info: "تحديات مثيرة",
   run: async (api, event ) => {

const { threadID, messageID } = event;


var tl = [
 
  "قم برقصة الدجاج في الأماكن العامة.",
  "غني أغنية بصوت مضحك.",
  "تناول ملعقة من البهارات التي لا تحبها.",
  "قم بـ 10 تمرينات ضغط الآن.",
  "ارتدي ملابسك مقلوبًا للساعة القادمة.",
  "تحدث مثل القراصنة لبقية اليوم.",
  "قم بالوقوف على اليدين مقابل الحائط.",
  "اطلب من شخص غريب الحصول على توقيعه.",
  "أرقص و كأن لا أحد يشاهد.",
  "ارتدي قبعة مضحكة للساعة القادمة.",
  "اصنع أغنية راب عن الشخص الذي على يمينك.",
  "تحدث بلهجة أجنبية لمدة 10 دقائق.",
  "قم بنزهة سخيفة في الشارعt.",
  "امنح نفسك مظهرًا مضحكًا باستخدام الأدوات المنزلية.",
  "أرسل رسالة نصية إلى صديق باستخدام أنفك.",
  "قم بالمشي على سطح القمر عبر الغرفة.",
  "غناء أغنية شعبية إلى الوراء.",
  "حاول أن تلعق مرفقك.",
  "ضع مكعبات الثلج أسفل قميصك وارقص.",
  "تحدث لمدة 3 دقائق دون توقف.",
  "قم بعمل عجلة العربة الآن.",
  "خذ صورة شخصية مع شخص غريب.",
  "تناول ملعقة من الصلصة الحارة.",
  "ضعي ملعقة على أنفك لمدة دقيقة واحدة.",
  "اصنع وجهًا مضحكًا والتقط صورة شخصية.",
  ": اقترح على الشخص الذي يعجبك وأرسل لي ss!",
  "قم بتغيير سيرتك الذاتية على الفيسبوك إلى 'أشعر بالإثارة . . .'",
  "قم بتغيير حالتك الشخصية على الفيسبوك إلى 'أنا قادم . . . أنا قادم . . .' ثم، بعد دقيقة واحدة، قم بتغييره إلى “لفد أتيت لتو.”",
  "اذهب للاختباء في مكان ما بالمنزل حتى تبدأ الجولة التالية. لن يأتي أحد ليجدك، لكن عليك أن تظل مختبئًا.",
  "ضعي حمالة صدر على رأسك وتظاهري بأنك منسقة موسيقى تعزفينها بقوة لمدة دقيقة واحدة.",
  "يجب عليك ترك بريد صوتي ذو تصنيف  لصديق أو صديقة سابق.",
  "ارقص مثل مايكل جاكسون على أغنية بطيئة.",
  "أتحداك أن تقفز على رجل واحد 10 مرات أثناء ترديد مقولة مفضلة لديك.",
  "قم بتنظيف الأرضية بقميصك.",
  "هل يمكنك مراسلة شخص لم تتحدث معه لمدة عام على الأقل على فيسبوك أو إنستجرام والتقاط لقطة شاشة ثم إرسالها هنا ☠️.",
  "ضعي خمس مكعبات من الثلج على رأسك حتى تذوب?",
  "قم بتقبيل مرفقك لمدة 30 ثانية وشم رائحته",
  "اذهب إلى منزل جارك واطلب بعض ورق التواليت.",
  "ضع يدك في سلة المهملات وشمها.",
  "قف أمام المرآة وغني 'أغنية عيد ميلاد سعيد' مع اسمك.",
  "قم بتصوير فيديو لنفسك وأنت تخدش مؤخرتك وأرسله إلى والديك.",
  "احصل على دش مع كل ملابسك.",
  "انشر صورة محرجة لنفسك على الإنترنت.",
  "قم بتسجيل الدخول إلى الفيسبوك وقم بالإعجاب بكل صورة من العام الماضي لأول شخص تراه."


];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = ` ${tle}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}

};