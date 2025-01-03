// vitest.config.ts
import { fileURLToPath } from "node:url";
import { configDefaults, defineConfig as defineConfig2, mergeConfig } from "file:///D:/Programming/Projects/cigar_helper/Frontend/node_modules/vitest/dist/config.js";

// vite.config.ts
import { resolve as pathResolve } from "path";
import { PrimeVueResolver } from "file:///D:/Programming/Projects/cigar_helper/Frontend/node_modules/@primevue/auto-import-resolver/index.mjs";
import vue from "file:///D:/Programming/Projects/cigar_helper/Frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import tailwindcss from "file:///D:/Programming/Projects/cigar_helper/Frontend/node_modules/tailwindcss/lib/index.js";
import IconsResolver from "file:///D:/Programming/Projects/cigar_helper/Frontend/node_modules/unplugin-icons/dist/resolver.js";
import Icons from "file:///D:/Programming/Projects/cigar_helper/Frontend/node_modules/unplugin-icons/dist/vite.js";
import Components from "file:///D:/Programming/Projects/cigar_helper/Frontend/node_modules/unplugin-vue-components/dist/vite.js";
import { defineConfig, loadEnv } from "file:///D:/Programming/Projects/cigar_helper/Frontend/node_modules/vite/dist/node/index.js";
import nightwatchPlugin from "file:///D:/Programming/Projects/cigar_helper/Frontend/node_modules/vite-plugin-nightwatch/index.js";
import vueDevTools from "file:///D:/Programming/Projects/cigar_helper/Frontend/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_dirname = "D:\\Programming\\Projects\\cigar_helper\\Frontend";
var vite_config_default = defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const basePath = process.env.VITE_BASE_URL;
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [PrimeVueResolver(), IconsResolver()],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/]
      }),
      vueDevTools(),
      nightwatchPlugin(),
      Icons()
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
var __vite_injected_original_import_meta_url = "file:///D:/Programming/Projects/cigar_helper/Frontend/vitest.config.ts";
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZXN0LmNvbmZpZy50cyIsICJ2aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFByb2dyYW1taW5nXFxcXFByb2plY3RzXFxcXGNpZ2FyX2hlbHBlclxcXFxGcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvZ3JhbW1pbmdcXFxcUHJvamVjdHNcXFxcY2lnYXJfaGVscGVyXFxcXEZyb250ZW5kXFxcXHZpdGVzdC5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2dyYW1taW5nL1Byb2plY3RzL2NpZ2FyX2hlbHBlci9Gcm9udGVuZC92aXRlc3QuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcclxuaW1wb3J0IHsgY29uZmlnRGVmYXVsdHMsIGRlZmluZUNvbmZpZywgbWVyZ2VDb25maWcgfSBmcm9tICd2aXRlc3QvY29uZmlnJztcclxuaW1wb3J0IHZpdGVDb25maWcgZnJvbSAnLi92aXRlLmNvbmZpZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZXJnZUNvbmZpZyhcclxuICB2aXRlQ29uZmlnKHsgbW9kZTogJ3Rlc3QnLCBjb21tYW5kOiAnc2VydmUnIH0pLFxyXG4gIGRlZmluZUNvbmZpZyh7XHJcbiAgICB0ZXN0OiB7XHJcbiAgICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgICBleGNsdWRlOiBbLi4uY29uZmlnRGVmYXVsdHMuZXhjbHVkZSwgJ2UyZS8qKiddLFxyXG4gICAgICByb290OiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vJywgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICB9LFxyXG4gIH0pLFxyXG4pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFByb2dyYW1taW5nXFxcXFByb2plY3RzXFxcXGNpZ2FyX2hlbHBlclxcXFxGcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvZ3JhbW1pbmdcXFxcUHJvamVjdHNcXFxcY2lnYXJfaGVscGVyXFxcXEZyb250ZW5kXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9ncmFtbWluZy9Qcm9qZWN0cy9jaWdhcl9oZWxwZXIvRnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIGFzIHBhdGhSZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcblxyXG5pbXBvcnQgeyBQcmltZVZ1ZVJlc29sdmVyIH0gZnJvbSAnQHByaW1ldnVlL2F1dG8taW1wb3J0LXJlc29sdmVyJztcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnO1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAndGFpbHdpbmRjc3MnO1xyXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcic7XHJcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJztcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnO1xyXG5pbXBvcnQgbmlnaHR3YXRjaFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1uaWdodHdhdGNoJztcclxuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scyc7XHJcblxyXG4vLyBodHRwczovL3ZpdGUuZGV2L2NvbmZpZy9cclxuLyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgcHJvY2Vzcy5lbnYgPSB7IC4uLnByb2Nlc3MuZW52LCAuLi5sb2FkRW52KG1vZGUsIHByb2Nlc3MuY3dkKCkpIH07XHJcbiAgY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5WSVRFX0JBU0VfVVJMO1xyXG4gIHJldHVybiB7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgIHZ1ZSgpLFxyXG4gICAgICBDb21wb25lbnRzKHtcclxuICAgICAgICByZXNvbHZlcnM6IFtQcmltZVZ1ZVJlc29sdmVyKCksIEljb25zUmVzb2x2ZXIoKV0sXHJcbiAgICAgICAgZHRzOiB0cnVlLFxyXG4gICAgICAgIGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvXSxcclxuICAgICAgfSksXHJcbiAgICAgIHZ1ZURldlRvb2xzKCksXHJcbiAgICAgIG5pZ2h0d2F0Y2hQbHVnaW4oKSxcclxuICAgICAgSWNvbnMoKSxcclxuICAgIF0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZmluZDogJ0AnLFxyXG4gICAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGhSZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgc2VydmVyOiB7IGhvc3Q6IHRydWUsIHBvcnQ6IDUxNzMsIHN0cmljdFBvcnQ6IHRydWUgfSxcclxuICAgIGJhc2U6IGJhc2VQYXRoLFxyXG4gICAgb3B0aW1pemVEZXBzOiB7XHJcbiAgICAgIGZvcmNlOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGNzczoge1xyXG4gICAgICBwb3N0Y3NzOiB7XHJcbiAgICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgICAgLy8gcG9zdGNzc05lc3RpbmcsXHJcbiAgICAgICAgICB0YWlsd2luZGNzcyxcclxuICAgICAgICAgIC8vIGF1dG9wcmVmaXhlcigpXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBdVUsU0FBUyxxQkFBcUI7QUFDclcsU0FBUyxnQkFBZ0IsZ0JBQUFBLGVBQWMsbUJBQW1COzs7QUNEeVEsU0FBUyxXQUFXLG1CQUFtQjtBQUUxVyxTQUFTLHdCQUF3QjtBQUNqQyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsY0FBYyxlQUFlO0FBQ3RDLE9BQU8sc0JBQXNCO0FBQzdCLE9BQU8saUJBQWlCO0FBVnhCLElBQU0sbUNBQW1DO0FBY3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBQ3hDLFVBQVEsTUFBTSxFQUFFLEdBQUcsUUFBUSxLQUFLLEdBQUcsUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDLEVBQUU7QUFDaEUsUUFBTSxXQUFXLFFBQVEsSUFBSTtBQUM3QixTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixXQUFXO0FBQUEsUUFDVCxXQUFXLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUFDO0FBQUEsUUFDL0MsS0FBSztBQUFBLFFBQ0wsU0FBUyxDQUFDLFVBQVUsWUFBWTtBQUFBLE1BQ2xDLENBQUM7QUFBQSxNQUNELFlBQVk7QUFBQSxNQUNaLGlCQUFpQjtBQUFBLE1BQ2pCLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTDtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYSxZQUFZLGtDQUFXLEtBQUs7QUFBQSxRQUMzQztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRLEVBQUUsTUFBTSxNQUFNLE1BQU0sTUFBTSxZQUFZLEtBQUs7QUFBQSxJQUNuRCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsTUFDWixPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBO0FBQUEsVUFFUDtBQUFBO0FBQUEsUUFFRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBRHBENE0sSUFBTSwyQ0FBMkM7QUFJOVAsSUFBTyx3QkFBUTtBQUFBLEVBQ2Isb0JBQVcsRUFBRSxNQUFNLFFBQVEsU0FBUyxRQUFRLENBQUM7QUFBQSxFQUM3Q0MsY0FBYTtBQUFBLElBQ1gsTUFBTTtBQUFBLE1BQ0osYUFBYTtBQUFBLE1BQ2IsU0FBUyxDQUFDLEdBQUcsZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUM3QyxNQUFNLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLElBQ3BEO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbImRlZmluZUNvbmZpZyIsICJkZWZpbmVDb25maWciXQp9Cg==
