module.exports = {
    serviceWorker: true,
    title: '个人主页',
    description: 'Not Every',
    head: [
        ['link', { rel: 'icon', href: '/hero.ico' }],
	    ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'apple-touch-icon', href: '/hero.png' }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '博文',
              items: [
                { text: 'RuoYi', link: '/RuoYi/' },
                { text: 'JD', link: '/jd/' },
                { text: 'Common', link: '/common/' },
              ]
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/ai-xiao' },
        ],
        sidebar: {
            '/RuoYi/': [
                            "",
                            "1.介绍",
                            "2.快速了解",
                            "3.环境部署",
                            "4.项目介绍",
                        ],
                '/jd/': [
                        "",
                        "jd",
                         ],
                '/common/': [
                        "",
                        "books",
                        ],
            },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    },
}
