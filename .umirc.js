export default {
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  outputPath: "/docs",
  mode: 'site',
  title: 'xy-hooks',
  favicon: '/favicon.ico',
  logo: '/logo.png',
  dynamicImport: {},
  manifest: {},
  links: [{ rel: 'manifest', href: '/asset-manifest.json' }],
  hash: true,
  resolve: {
    includes: ['guide', 'packages/hooks/src'],
  },
  links: [{ rel: 'stylesheet', href: '/style.css' }],
  navs: {
    'zh-CN': [
      // 加载默认的 nav 选项
      null,
    ],
    'en-US': [null],
  },
};
