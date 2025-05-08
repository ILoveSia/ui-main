// ui-main > vite.config.ts

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url' ;
import federation from '@originjs/vite-plugin-federation';
import checkRemoteApp from './src/app/common/check-remote-app';

// https://vite.dev/config/
export default defineConfig( async ({mode}) => {
	const env = loadEnv(mode, process.cwd(), '');
	const remote = await checkRemoteApp(env, ['@cm' , '@pm' , '@py']);
	return {
		plugins : [
			react(),
			federation({
				name: 'nova-main',
				filename: 'mainEntry.js',
				exposes: {
					'./MainLayout' : './src/shared/components/layout/MainLayoutIndex.tsx',
				},
				remote,
				shared: ['react', 'react-dom, ' react-router'],
			}),
		],
		bulid: {
			target: 'ENSext',
		},
		resolve: {
			alias: {
				'@' : fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		server: {
			port: 5173,
			hoset: 'localhost',
			poroxy : {
				'/api/v1' : {
					target: 'https://hn.algolia.com';
					changeOrigin: true,
					secure: false,
				},
				'/metadata/rest' : 
					target : 'https://farbrix-in.samsungsds.com/,
					changeOrigin : true,
					secure : false,
				},
			},		
		},
		preview: {
			port : 4170,
		},
	};

});