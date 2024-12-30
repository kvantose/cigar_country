// vitest.config.ts
import { fileURLToPath } from "node:url";
import { configDefaults, defineConfig as defineConfig2, mergeConfig } from "file:///D:/Programming/Projects/cigar_country/node_modules/vitest/dist/config.js";

// vite.config.ts
import { resolve as pathResolve } from "path";
import vue from "file:///D:/Programming/Projects/cigar_country/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import tailwindcss from "file:///D:/Programming/Projects/cigar_country/node_modules/tailwindcss/lib/index.js";
import { PrimeVueResolver } from "file:///D:/Programming/Projects/cigar_country/node_modules/@primevue/auto-import-resolver/index.mjs";
import Components from "file:///D:/Programming/Projects/cigar_country/node_modules/unplugin-vue-components/dist/vite.js";
import { defineConfig, loadEnv } from "file:///D:/Programming/Projects/cigar_country/node_modules/vite/dist/node/index.js";
import nightwatchPlugin from "file:///D:/Programming/Projects/cigar_country/node_modules/vite-plugin-nightwatch/index.js";
import vueDevTools from "file:///D:/Programming/Projects/cigar_country/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_dirname = "D:\\Programming\\Projects\\cigar_country";
var vite_config_default = defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const basePath = process.env.VITE_BASE_URL;
  return {
    plugins: [
      vue(),
      Components({ resolvers: [PrimeVueResolver()], dts: true, include: [/\.vue$/, /\.vue\?vue/] }),
      vueDevTools(),
      nightwatchPlugin()
    ],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: pathResolve(__vite_injected_original_dirname, "src")
        }
      ]
    },
    server: { host: true, port: 5173, strictPort: true },
    base: basePath,
    optimizeDeps: {
      force: true
    },
    css: {
      postcss: {
        plugins: [
          // postcssNesting,
          tailwindcss
          // autoprefixer()
        ]
      }
    }
  };
});

// vitest.config.ts
var __vite_injected_original_import_meta_url = "file:///D:/Programming/Projects/cigar_country/vitest.config.ts";
var vitest_config_default = mergeConfig(
  vite_config_default({ mode: "test", command: "serve" }),
  defineConfig2({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "e2e/**"],
      root: fileURLToPath(new URL("./", __vite_injected_original_import_meta_url))
    }
  })
);
export {
  vitest_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFByb2dyYW1taW5nXFxcXFByb2plY3RzXFxcXGNpZ2FyX2NvdW50cnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2dyYW1taW5nXFxcXFByb2plY3RzXFxcXGNpZ2FyX2NvdW50cnlcXFxcdml0ZXN0LmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovUHJvZ3JhbW1pbmcvUHJvamVjdHMvY2lnYXJfY291bnRyeS92aXRlc3QuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcclxuaW1wb3J0IHsgY29uZmlnRGVmYXVsdHMsIGRlZmluZUNvbmZpZywgbWVyZ2VDb25maWcgfSBmcm9tICd2aXRlc3QvY29uZmlnJztcclxuaW1wb3J0IHZpdGVDb25maWcgZnJvbSAnLi92aXRlLmNvbmZpZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZXJnZUNvbmZpZyhcclxuICB2aXRlQ29uZmlnKHsgbW9kZTogJ3Rlc3QnLCBjb21tYW5kOiAnc2VydmUnIH0pLFxyXG4gIGRlZmluZUNvbmZpZyh7XHJcbiAgICB0ZXN0OiB7XHJcbiAgICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSwgJ2UyZS8qKiddLFxyXG4gICAgICByb290OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vJywgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFByb2dyYW1taW5nXFxcXFByb2plY3RzXFxcXGNpZ2FyX2NvdW50cnlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFByb2dyYW1taW5nXFxcXFByb2plY3RzXFxcXGNpZ2FyX2NvdW50cnlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2dyYW1taW5nL1Byb2plY3RzL2NpZ2FyX2NvdW50cnkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIGFzIHBhdGhSZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcblxyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSAnYXV0b3ByZWZpeGVyJztcclxuaW1wb3J0IHBvc3Rjc3NOZXN0aW5nIGZyb20gJ3Bvc3Rjc3MtbmVzdGluZyc7XHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcyc7XHJcbmltcG9ydCB7IFByaW1lVnVlUmVzb2x2ZXIgfSBmcm9tICdAcHJpbWV2dWUvYXV0by1pbXBvcnQtcmVzb2x2ZXInO1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBuaWdodHdhdGNoUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLW5pZ2h0d2F0Y2gnO1xyXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZS5kZXYvY29uZmlnL1xyXG4vKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcclxuICBwcm9jZXNzLmVudiA9IHsgLi4ucHJvY2Vzcy5lbnYsIC4uLmxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSkgfTtcclxuICBjb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52LlZJVEVfQkFTRV9VUkw7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgdnVlKCksXHJcbiAgICAgIENvbXBvbmVudHMoeyByZXNvbHZlcnM6IFtQcmltZVZ1ZVJlc29sdmVyKCldLCBkdHM6IHRydWUsIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvXSB9KSxcclxuICAgICAgdnVlRGV2VG9vbHMoKSxcclxuICAgICAgbmlnaHR3YXRjaFBsdWdpbigpLFxyXG4gICAgXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmaW5kOiAnQCcsXHJcbiAgICAgICAgICByZXBsYWNlbWVudDogcGF0aFJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHsgaG9zdDogdHJ1ZSwgcG9ydDogNTE3Mywgc3RyaWN0UG9ydDogdHJ1ZSB9LFxyXG4gICAgYmFzZTogYmFzZVBhdGgsXHJcbiAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgZm9yY2U6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIHBvc3Rjc3M6IHtcclxuICAgICAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgICAvLyBwb3N0Y3NzTmVzdGluZyxcclxuICAgICAgICAgIHRhaWx3aW5kY3NzLFxyXG4gICAgICAgICAgLy8gYXV0b3ByZWZpeGVyKClcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UyxTQUFTLHFCQUFxQjtBQUMzVSxTQUFTLGdCQUFnQixnQkFBQUEsZUFBYyxtQkFBbUI7OztBQ0QrTyxTQUFTLFdBQVcsbUJBQW1CO0FBRWhWLE9BQU8sU0FBUztBQUdoQixPQUFPLGlCQUFpQjtBQUN4QixTQUFTLHdCQUF3QjtBQUNqQyxPQUFPLGdCQUFnQjtBQUN2QixTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLHNCQUFzQjtBQUM3QixPQUFPLGlCQUFpQjtBQVZ4QixJQUFNLG1DQUFtQztBQWN6QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxVQUFRLE1BQU0sRUFBRSxHQUFHLFFBQVEsS0FBSyxHQUFHLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2hFLFFBQU0sV0FBVyxRQUFRLElBQUk7QUFDN0IsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osV0FBVyxFQUFFLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEtBQUssTUFBTSxTQUFTLENBQUMsVUFBVSxZQUFZLEVBQUUsQ0FBQztBQUFBLE1BQzVGLFlBQVk7QUFBQSxNQUNaLGlCQUFpQjtBQUFBLElBQ25CO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYSxZQUFZLGtDQUFXLEtBQUs7QUFBQSxRQUMzQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRLEVBQUUsTUFBTSxNQUFNLE1BQU0sTUFBTSxZQUFZLEtBQUs7QUFBQSxJQUNuRCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsTUFDWixPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBO0FBQUEsVUFFUDtBQUFBO0FBQUEsUUFFRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBRC9DMEwsSUFBTSwyQ0FBMkM7QUFJNU8sSUFBTyx3QkFBUTtBQUFBLEVBQ2Isb0JBQVcsRUFBRSxNQUFNLFFBQVEsU0FBUyxRQUFRLENBQUM7QUFBQSxFQUM3Q0MsY0FBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLE1BQ0osYUFBYTtBQUFBLE1BQ2IsU0FBUyxDQUFDLEdBQUcsZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUM3QyxNQUFNLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLElBQ3BEO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciXQp9Cg==
