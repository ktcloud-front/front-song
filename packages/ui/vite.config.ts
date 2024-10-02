import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'
import autoprefixer from 'autoprefixer'
import { globSync } from 'glob'
import cssnano from 'cssnano'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
import { fileURLToPath } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ exclude: ['**/*.stories.ts'] }), tsconfigPaths(),],
  build: {
    // cssCodeSplit: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ui-design-system',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      // input: Object.fromEntries(
      //   globSync(['src/components/**/index.ts', 'src/index.ts']).map((file) => {
      //     const entryName = path.relative(
      //       'src',
      //       file.slice(0, file.length - path.extname(file).length)
      //     )
      //     const entryUrl = fileURLToPath(new URL(file, import.meta.url))
      //     return [entryName, entryUrl]
      //   })
      // ),
      output: {
        // entryFileNames: '[name].js',
        // assetFileNames: 'css/[name][extname]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  // css: {
  //   postcss: {
  //     plugins: [
  //       autoprefixer, // CSS에 벤더 프리픽스 자동 추가
  //       cssnano({ preset: 'default' }) // CSS를 최적화하고 압축
  //     ],
  //   },
  //   modules: {
  //     scopeBehaviour: 'global'
  //   }
  // }
})
