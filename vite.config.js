import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { join } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
      assets: join(__dirname, "src/assets"),
      components: join(__dirname, "src/components"),
      views: join(__dirname, "src/views"),
      network: join(__dirname, "src/network"),
    },
  },
});
