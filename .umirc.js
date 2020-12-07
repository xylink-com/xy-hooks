export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  base: "/xy-hooks",
  publicPath: "/xy-hooks/",
  outputPath: "/docs",
  mode: 'site',
  title: 'xy-hooks',
  favicon: '/xy-hooks/favicon.ico',
  logo: '/xy-hooks/logo.png',
  dynamicImport: {},
  manifest: {},
  hash: true,
  resolve: {
    includes: ['guide', 'packages/hooks/src'],
  },
  links: [{ rel: 'stylesheet', href: '/xy-hooks/style.css' }],
  navs: {
    'zh-CN': [
      // 加载默认的 nav 选项
      null,
    ],
    'en-US': [null],
  },
};
