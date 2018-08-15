module.exports = {
    title: '向振华个人站点',
    description: '~~~',
    base:'/xzh-blog/doc/',
    port:4864,
    dest:"./doc",
    themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '设计模式', link: '/designPattern/' },
          { text: '重构技巧', link: '/refactoring/' },
        ],
        sidebar: 'auto',
        repo: '/xxiangzh/xzh-blog',
        repoLabel: 'gitHub',
      }
}