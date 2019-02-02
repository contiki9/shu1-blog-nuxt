const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    lang:'ja',
    title: '週1でブログ更新する会',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      {hid:'og:title',property:'og:title', content:'週1でブログ更新する会'},
      {hid:'og:type',property:'og:type', content:'website'},
      {hid:'og:image',property:'og:image', content:'https://shu-1blog.com/assets/images/ogp.png'},
      {hid:'og:image:width',property:'og:image:width', content:'1200'},
      {hid:'og:image:height',property:'og:image:height', content:'630'},
      {hid:'og:description',property:'og:description', content:'一人でブログを書き続ける事ができない人達が集まって互いにブログの更新を応援し合うグループです'},
      {hid:'og:site_name',property:'og:site_name', content:'週1でブログ更新する会'},
      {hid:'og:locale',property:'og:locale', content:'ja'},
      {hid:'twitter:text:title',name:'twitter:text:title', content:'週1でブログ更新する会',},
      {hid:'twitter:image',name:'twitter:image', content:'https://shu-1blog.com/assets/images/ogp.png'},
      {hid:'twitter:card',name:'twitter:card', content:'summary_large_image'},
      {hid:'twitter:description',name:'twitter:description', content:'一人でブログを書き続ける事ができない人達が集まって互いにブログの更新を応援し合うグループです'},
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/assets/images/favicon.png' }
    ],
    script:[
      //{src:'//cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll/dist/smooth-scroll.polyfills.min.js'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      '~/plugins/vue-scrollto',
      {src:'~/plugins/vue2-scrollspy', ssr: false },
      {src:'~/plugins/vue-sticky-directive', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
