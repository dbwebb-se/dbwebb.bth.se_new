// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
	base: './website',
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	integrations: [
		starlight({
			plugins: [
				starlightImageZoom(),
			],
			title: 'dbwebb.bth.se',
			favicon: 'favicon.png',
			logo: {
				//src: './src/assets/leaf_256x256.png',
				src: '@assets/leaf_256x256.png',
			},
			customCss: [
				'./src/styles/dbwebb.css',
			],
			editLink: {
				baseUrl: 'https://github.com/webtec-2024/website/tree/main',
			},
			social: {
				github: 'https://github.com/webtec-2024/website',
			},
			head: [
				{
				  tag: 'base',
				  attrs: {
					href: '/website/'
				  }
				}
			],
			sidebar: [
				{
					label: 'Kurser',
					collapsed: true,
					autogenerate: { directory: 'kurser' },
				},
				{
					label: 'Lärarteam',
					autogenerate: { directory: 'team' },
				},
				// {
				// 	label: 'Läromaterial',
				// 	collapsed: true,
				// 	autogenerate: { directory: 'laromaterial' },
				// },
				{
					label: 'Studieguide',
					collapsed: true,
					autogenerate: { directory: 'studieguide' },
					/* items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],*/
				}
			],
		}),
	],
});
