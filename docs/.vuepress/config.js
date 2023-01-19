const { description } = require('../../package')
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  markdown: {
    lineNumbers: false
  },
  lang: 'ko-KR',
  title: '환상연화',
  description: description,
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png"}],
    ['meta', { name: 'theme-color', content: '#D1B2FF' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  theme: defaultTheme({
    // set config here
    logo: '/original_logo.png',
    navbar: [
      {
        text: 'Intro',
        link: '/intro/'
        //children: ['/intro/README.md', '/intro/contact-us.md']
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/uZ6VsfKqxG'
      },
      {
        text: 'Karanda',
        link: 'https://hwansangyeonhwa.github.io/Karanda'
      }
    ],
    sidebar: {
      '/intro/': [
        {
          text: 'Introduction',
          collapsable: false,
          children: [
            '/intro/README.md',
            '/intro/contact-us.md',
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    },
    lastUpdated: true
  }),
})
