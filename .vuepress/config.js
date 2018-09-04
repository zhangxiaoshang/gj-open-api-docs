module.exports = {
  locales: {
    '/': {
      lang: 'zh_CN',
      title: 'OpenAPI'
    },
    '/en/': {
      lang: 'en_US',
      title: 'OpenAPI'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次更新',
        nav: [
          { text: '首页', link: '/' },
          { text: '文档', link: '/docs/' }
        ],
        sidebar: [
          ['/', '首页'],
          '/docs/',
          '/docs/open-api',
          '/docs/kline-api'
        ]
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Docs', link: '/en/docs/' }
        ],
        sidebar: [
          ['/', 'Home'],
          '/en/docs/',
        ],
      }
    }
  }
}
