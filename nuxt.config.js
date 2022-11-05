export default {
  mode: 'universal',

  head: {
    title: 'test-transoftgroup',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  styleResources: {
    scss: ['~/assets/styles/global.scss'],
  },

  css: ['~/assets/styles/app.scss'],

  plugins: ['~/plugins/axios'],

  components: true,

  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources'],

  serverMiddleware: ['~/api/todos'],
}
