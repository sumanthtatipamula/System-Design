import { defineUserConfig } from 'vuepress';
import { searchProPlugin } from 'vuepress-plugin-search-pro';
import theme from './theme.js';

export default defineUserConfig({
	base: '/',

	lang: 'en-US',
	title: 'System Design',

	theme,

	plugins: [
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
