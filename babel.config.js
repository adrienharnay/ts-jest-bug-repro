const pkg = require('./package.json');

const ENVS = {
  TEST: 'test',
};

module.exports = api => {
  api.cache(true);

  const env = process.env.NODE_ENV;

  const presets = [
    [
      '@babel/env',
      {
        modules: 'commonjs',
        useBuiltIns: 'usage',
        targets: { node: '10.5.0' },
      },
    ],
    '@babel/react',
    [
      '@babel/preset-stage-2',
      {
        decoratorsLegacy: true,
      },
    ],
  ];

  const plugins = ['@babel/plugin-transform-typescript'];

  return {
    presets,
    plugins,
  };
};
