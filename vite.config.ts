import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		VueRouter(), 
		vue({
			script: {
				defineModel: true
			}
		})
	],
	build: {
		minify: true
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
