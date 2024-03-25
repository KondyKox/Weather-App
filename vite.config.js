import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      "process.env.VITE_API_KEY": JSON.stringify(process.env.VITE_API_KEY),
    }),
  ],
});
