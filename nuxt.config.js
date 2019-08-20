export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ]
  },
  loading: { color: '#fff' },
  modules: [
    '@nuxtjs/proxy',
    //'@nuxtjs/apollo'
  ],
  proxy: {
    '/graphql': process.env.NUXT_API_PROXY_URL || 'http://127.0.0.1:5000'
  }
}
