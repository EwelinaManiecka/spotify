import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  esModuleInterop: true,
  plugins: [react()],
  base: "/spotify/",
});
