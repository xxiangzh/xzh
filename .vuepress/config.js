module.exports = {
    title: '向振华个人站点实打实的为情况决定回家',
    description: '算是闲谈吧',
    base:'/xzh-blog/doc/',
    port:4864,
    dest:"./doc",
    themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: 'es6代码风格', link: '/codeStyle/' },
          { text: 'css干货', link: '/cssDoc/' },
          { text: 'js干货', link: '/jsDoc/' },
          { text: '前后端分离解决方案', link: '/webSplit/' },
          { text: '多页面开发', link: '/multiPage/' },
        ],
        sidebar: 'auto',
        repo: '/hisey/front-end-doc',
        repoLabel: 'gitHub',
      }
}