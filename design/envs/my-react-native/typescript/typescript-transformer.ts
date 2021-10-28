//@ts-nocheck

function commonTransformation(config, _context) {
  config.mergeTsConfig(require('./tsconfig.json'));
  return config;
}

export const buildConfig = (config, context) => {
  const newConfig = commonTransformation(config, context);
  return newConfig;
};

export const devConfig = (config, context) => {
  const newConfig = commonTransformation(config, context);
  return newConfig;
};
