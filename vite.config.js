import { defineConfig } from "vite";
import vituum from "vituum";
import liquid from "@vituum/vite-plugin-liquid";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/bighearts/",
  plugins: [
    vituum(),
    liquid({
      root: "./src",
    }),
    tailwindcss(),
  ],
  build: {
    outDir: "docs",
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
