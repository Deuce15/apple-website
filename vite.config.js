import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "skylink-pu",
    project: "javascript-react"
  }), sentryVitePlugin({
    org: "skylink-pu",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1600,
  }
})