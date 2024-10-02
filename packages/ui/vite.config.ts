import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import postcssNesting from 'postcss-nesting';
import { webextensions } from 'globals'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({insertTypesEntry: true}), tsconfigPaths()],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ui-design-system',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssNesting,
        autoprefixer(), // CSS에 벤더 프리픽스 자동 추가
        cssnano({ preset: 'default' }) // CSS를 최적화하고 압축
      ],
    },
    modules: {
      scopeBehaviour: 'global'
    }
  }
})
