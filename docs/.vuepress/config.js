/*
* @Author: wenxiujiang
* @Date:   2018-10-25 19:31:10
* @Last Modified by:   wenxiujiang
* @Last Modified time: 2018-10-25 19:31:24
*/

module.exports = {
    title: 'JENNIFER',
    description: 'Jennifer\'s docs',
    head: [
        ['link', {rel: 'icon', href: '/img/logo.ico'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}]
    ],
    themeConfig: {
        nav: [
            { text: 'HOME', link: '/' },
            { text: 'DAILY',
              items: [
                {text: 'WORK', link: '/work/'},
                {text: 'DANCE', link: '/dance/'},
                {text: 'RUNNING', link: '/running/'}
              ]
            }
        ],
        // sidebar: {
        //     '/work/': ["", "work1"],
        //     '/dance/': ["", "dance1"],
        //     '/running/': ["", "running1"],
        // },
        // sidebarDepth: 2,
        lastUpdated: 'Last Updated'
    }
}
