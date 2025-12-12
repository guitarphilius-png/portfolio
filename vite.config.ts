import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // For GitHub Pages: use "/repository-name/" if repo is not username.github.io
  // Set VITE_BASE_PATH env variable or update this value for your repo name
  base: process.env.NODE_ENV === "development" ? "/" : process.env.VITE_BASE_PATH || "/portfolio/",
  optimizeDeps: {
    entries: ["src/main.tsx", "src/tempobook/**/*"],
  },
  plugins: [
    react(),
  ],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // @ts-ignore
    allowedHosts: true,
  }
});
