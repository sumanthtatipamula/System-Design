import { defineUserConfig } from 'vuepress';
import { searchProPlugin } from 'vuepress-plugin-search-pro';
import theme from './theme.js';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';

export default defineUserConfig({
	base: '/',

	lang: 'en-US',
	title: 'System Design',

	theme,

	head: [
		[
			'script',
			{
				'data-ad-client': 'ca-pub-9275900718110992',
				async: true,
				src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
			},
		],
	],

	plugins: [
		googleAnalyticsPlugin({
			id: 'G-GGLN70YJGL',
		}),
		searchProPlugin({
			// index all contents
			indexContent: true,
			// add supports for category and tags
			customFields: [
				{
					//@ts-ignore
					getter: (page) => page.frontmatter.category,
					formatter: 'Category: $content',
				},
				{
					//@ts-ignore
					getter: (page) => page.frontmatter.tag,
					formatter: 'Tag: $content',
				},
			],
		}),
		docsearchPlugin({
			appId: '5V2MJUJ3ZH',
			apiKey: '042f2e1444012f6b7b53746471037a69',
			indexName: 'system-design-lac',
			locales: {
				'/': {
					placeholder: 'Search Documentation',
					translations: {
						button: {
							buttonText: 'Search Documentation',
						},
					},
				},
			},
		}),
	],
	// Enable it with pwa
	// shouldPrefetch: false,
});
