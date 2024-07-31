import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import pluginReact from "@vitejs/plugin-react-swc";

const viteConfig = defineConfig({
  base: "/",
  server: {
    host: "localhost",
    port: 3000,
  },
  plugins: [
    pluginReact({
      jsxRunntime: "automatic",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

export default viteConfig;
