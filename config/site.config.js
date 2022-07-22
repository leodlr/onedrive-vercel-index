module.exports = {
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'e115795@uajms.edu.bo',

  icon: '/anime/otros/iconos/icon_ds_v_01.png',

  kvPrefix: process.env.KV_PREFIX || '',

  title: "Dyler Senpai",

  baseDirectory: '/anime/ligero/',

  maxItems: 100,

  googleFontSans: 'Inter',

  googleFontMono: 'Fira Mono',

  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],

  footer:
    'Powered by <a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer">onedrive-vercel-index</a>. Modified with ❤ by <a href="https://t.me/Dlerx" target="_blank" rel="noopener noreferrer">Dlerx</a>.',

  //protectedRoutes: ['/🌞 Private folder/u-need-a-password', '/🥟 Some test files/Protected route'],

  email: 'mailto:dylersenpai.oficial@gmail.com',


  links: [
    {
      name: 'Telegram',
      link: 'https://t.me/dylersenpai',
    },
  ],

  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}