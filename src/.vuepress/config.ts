import { defineUserConfig } from 'vuepress';
import { searchProPlugin } from 'vuepress-plugin-search-pro';
import theme from './theme.js';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';

export default defineUserConfig({
	base: '/',

	lang: 'en-US',
	title: 'System Design',

	theme,

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
	],
	// Enable it with pwa
	// shouldPrefetch: false,
});
