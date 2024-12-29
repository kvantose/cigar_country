import { resolve as pathResolve } from 'path';

import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import postcssNesting from 'postcss-nesting';
import tailwindcss from 'tailwindcss';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from 'vite';
import nightwatchPlugin from 'vite-plugin-nightwatch';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const basePath = process.env.VITE_BASE_URL;
  return {
    plugins: [
      vue(),
      Components({ resolvers: [PrimeVueResolver()], dts: true, include: [/\.vue$/, /\.vue\?vue/] }),
      vueDevTools(),
      nightwatchPlugin(),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: pathResolve(__dirname, 'src'),
        },
      ],
    },
    server: { host: true, port: 5173, strictPort: true },
    base: basePath,
    optimizeDeps: {
      force: true,
    },
    css: {
      postcss: {
        plugins: [postcssNesting, tailwindcss, autoprefixer()],
      },
    },
  };
});
