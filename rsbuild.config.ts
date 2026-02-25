import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    writeToDisk: true
  },
  output: {
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      dayjs: 'dayjs',
      antd: 'antd',
    },
  },
  html: {
    template: './src/index.html',
  }
});
