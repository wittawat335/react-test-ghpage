import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-test-ghpage/", //repository name in github
  plugins: [react()],
});
