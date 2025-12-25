import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Team Extreme Vibes",
  description: "Team Extreme Vibes",
  appearance: 'force-dark',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    logo: '/back.png', 
    siteTitle: false, 
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Team', link: '/team' },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
