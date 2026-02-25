import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

// Docs: https://rsbuild.rs/config/
export default defineConfig({
  plugins: [pluginReact()],
  dev: {
    writeToDisk: true
  },
  output: {
    module: true,
    externals: [
      'react',
      /^react\/(.*)$/,
      'react-dom',
      /^react-dom\/(.*)$/,
      'dayjs',
      /^dayjs\/(.*)$/,
      'antd',
    ]
  },
  html: {
    template: './src/index.html',
  }
});
