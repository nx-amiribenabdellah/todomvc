import { babel } from '@rollup/plugin-babel';

const config = {
  input: 'src/app.js',

  plugins: [babel({ babelHelpers: 'bundled' })]
};

export default config;
