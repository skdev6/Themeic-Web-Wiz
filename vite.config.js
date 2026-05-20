import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir:'assets/js/core',
    lib: {
      entry: "src/main.js",
      name: "themeicThemeCore",
      fileName: "themeic-theme-core",
    }
  },
});