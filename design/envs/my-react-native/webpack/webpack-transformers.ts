import {
  WebpackConfigTransformer,
  WebpackConfigMutator,
  WebpackConfigTransformContext,
} from '@teambit/webpack';

const fileLoaderRule = {
  test: /\.(png|jpe?g|gif|ttf)$/i,
  use: [
    {
      loader: 'file-loader',
    },
  ],
};

const babelPresetExpo = {
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  exclude: [/node_modules/, /\/dist\//],
  // consider: limit loader to files only in a capsule that has bitid in package.json
  // descriptionData: { componentId: ComponentID.isValidObject },
  // // or
  // include: capsulePaths
  loader: require.resolve('babel-loader'),
  options: {
    babelrc: false,
    configFile: false,
    presets: [require.resolve('babel-preset-expo')],
    // This is a feature of `babel-loader` for webpack (not Babel itself).
    // It enables caching results in ./node_modules/.cache/babel-loader/
    // directory for faster rebuilds.
    cacheDirectory: true,
    // See #6846 for context on why cacheCompression is disabled
    cacheCompression: false,
  },
};

/**
 * Transformation to apply for both preview and dev server
 * @param config
 * @param _context
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function commonTransformation(
  config: WebpackConfigMutator,
  _context: WebpackConfigTransformContext
) {
  // Merge config with the webpack.config.js file if you choose to import a module export format config.
  // config.merge([webpackConfig]);
  // config.addAliases({});
  // config.addModuleRule(youRuleHere);
  config.addModuleRule(fileLoaderRule);
  //config.addModuleRule(babelPresetExpo);
  config.addAliases({
    'react-native$': require.resolve('react-native-web'),
  });
  return config;
}

/**
 * Transformation for the preview only
 * @param config
 * @param context
 * @returns
 */
export const previewConfigTransformer: WebpackConfigTransformer = (
  config: WebpackConfigMutator,
  context: WebpackConfigTransformContext
) => {
  const newConfig = commonTransformation(config, context);
  return newConfig;
};

/**
 * Transformation for the dev server only
 * @param config
 * @param context
 * @returns
 */
export const devServerConfigTransformer: WebpackConfigTransformer = (
  config: WebpackConfigMutator,
  context: WebpackConfigTransformContext
) => {
  const newConfig = commonTransformation(config, context);
  return newConfig;
};
