import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4173", // Default Vite dev server
    supportFile: false
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
