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
                { text: 'RuoYi-Cloud-Nacos', link: '/RuoYi-Cloud-Nacos/' },
                { text: 'JD', link: '/jd/' },
                { text: 'Android', link: '/android/' },
                { text: 'ios', link: '/ios/' },
                { text: 'Web', link: '/web/' }
              ]
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/ai-xiao' },
        ],
        sidebar: {
            '/RuoYi-Cloud-Nacos/': [
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
            '/android/': [
                        "",
                        "android1",
                         ],
                "/ios/":[
                        "",
                        "ios1",
                        ],
                "/web/":[
                        "",
                        "web1",
                        ],
            },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    },
}
