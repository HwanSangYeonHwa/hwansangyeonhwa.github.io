const { description } = require('../../package')
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { searchPlugin } from '@vuepress/plugin-search'
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  markdown: {
    lineNumbers: false,
  },
  lang: 'ko-KR',
  title: '환상연화',
  description: description,
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/favicons/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicons/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicons/favicon-16x16.png" }],
    ['meta', { name: 'theme-color', content: '#D1B2FF' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    googleAnalyticsPlugin({
      id: 'G-SG25RN9QVP',
    }),
    searchPlugin({
      // allow searching the `tags` frontmatter
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    }),
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
        link: '/guide/'
      },
      {
        text: 'Visitor',
        link: '/visitor/'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/uZ6VsfKqxG'
      },
      {
        text: 'Karanda',
        link: 'https://www.karanda.kr'
      }
    ],
    sidebar: {
      '/intro/': [
        {
          text: 'Introduction',
          collapsable: true,
          children: [
            '/intro/README.md',
            '/intro/benefit.md',
            '/intro/contact-us.md',
          ]
        }
      ],
      '/guide/': [
        {
          text: 'Guild System Guide',
          collapsable: true,
          children: [
            '/guide/README.md',
            '/guide/guild-window.md',
            '/guide/guild-member-list.md',
            '/guide/guild-quest.md',
            '/guide/guild-boss-raid.md',
            '/guide/guild-chat.md'
          ]
        }
      ],
    },
    enhance({ router }){
      router.afterEach((to) => {
        console.log('after navigation')
        if (typeof window !== 'undefined' && window.DISQUS) {
          setTimeout(() => {
            console.log('DISQUS is exists and try to load!')
            window.DISQUS.reset({ reload: true })
          }, 0)
        }
      })
    },
    lastUpdated: false,
    contributors: false
  }),
})
