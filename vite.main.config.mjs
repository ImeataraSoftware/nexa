import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config
export default defineConfig({
  build: { rollupOptions: { external: ['sequelize', 'sqlite3'] } },
  resolve: {
    // Algunas bibliotecas que pueden ejecutarse tanto en Web como en Node.js, como `axios`,
    // necesitamos indicar a Vite que las construya en Node.js.
    alias: {
      '@': resolve(__dirname, './src'),
    },
    browserField: false,
    conditions: ['node'],
    mainFields: ['module', 'jsnext:main', 'jsnext'],
  },
})
