module.exports = {
  appId: 'wx5015a94e3b5697be',
  app: (mode) =>
    mode === 'production' ? undefined : 'src/app',
  pages: (mode) =>
    mode === 'production'
      ? ['src/components/index']
      : undefined,
  compileType: 'miniprogram',
  sourceMap: false,
  minimize: false,
  plugins: ['@mpflow/plugin-babel', '@mpflow/plugin-css'],
  settings: {
    urlCheck: true,
    es6: false,
    enhance: false,
    postcss: false,
    preloadBackgroundData: false,
    minified: false,
    newFeature: false,
    coverView: true,
    nodeModules: false,
    autoAudits: false,
    showShadowRootInWxmlPanel: true,
    scopeDataCheck: false,
    uglifyFileName: false,
    checkInvalidKey: true,
    checkSiteMap: true,
    uploadWithSourceMap: true,
    compileHotReLoad: false,
    babelSetting: {
      ignore: [],
      disablePlugins: [],
      outputPath: '',
    },
    useIsolateContext: true,
    useCompilerModule: false,
    userConfirmedUseCompilerModuleSwitch: false,
  },
};
