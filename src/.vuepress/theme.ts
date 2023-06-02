import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar.js';
import sidebar from './sidebar.js';

export default hopeTheme({
	hostname: 'https://system-design-lac.vercel.app/',

	author: {
		name: 'Sumanth Tatipamula',
		url: 'https://github.com/sumanthtatipamula',
	},

	iconAssets: 'fontawesome-with-brands',

	logo: '/logo.svg',

	repo: 'sumanthtatipamula/System-Design',

	docsDir: 'src',

	// navbar
	navbar,

	// sidebar
	sidebar,

	// footer: 'Default footer',

	displayFooter: true,

	encrypt: {
		config: {
			'/demo/encrypt.html': ['1234'],
		},
	},

	metaLocales: {
		editLink: 'Edit this page on GitHub',
	},

	plugins: {
		// You should generate and use your own comment service
		blog: true,
		comment: {
			provider: 'Giscus',
			repo: 'sumanthtatipamula/System-Design',
			repoId: 'R_kgDOJqbqmQ',
			category: 'Announcements',
			categoryId: 'DIC_kwDOJqbqmc4CW5vj',
		},

		// All features are enabled for demo, only preserve features you need here
		mdEnhance: {
			align: true,
			attrs: true,
			chart: true,
			codetabs: true,
			demo: true,
			echarts: true,
			figure: true,
			flowchart: true,
			gfm: true,
			imgLazyload: true,
			imgSize: true,
			include: true,
			katex: true,
			mark: true,
			mermaid: true,
			playground: {
				presets: ['ts', 'vue'],
			},
			presentation: {
				plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
			},
			stylize: [
				{
					matcher: 'Recommended',
					replacer: ({ tag }) => {
						if (tag === 'em')
							return {
								tag: 'Badge',
								attrs: { type: 'tip' },
								content: 'Recommended',
							};
					},
				},
			],
			sub: true,
			sup: true,
			tabs: true,
			vPre: true,
			vuePlayground: true,
		},

		// uncomment these if you want a pwa
		// pwa: {
		//   favicon: "/favicon.ico",
		//   cacheHTML: true,
		//   cachePic: true,
		//   appendBase: true,
		//   apple: {
		//     icon: "/assets/icon/apple-icon-152.png",
		//     statusBarColor: "black",
		//   },
		//   msTile: {
		//     image: "/assets/icon/ms-icon-144.png",
		//     color: "#ffffff",
		//   },
		//   manifest: {
		//     icons: [
		//       {
		//         src: "/assets/icon/chrome-mask-512.png",
		//         sizes: "512x512",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-mask-192.png",
		//         sizes: "192x192",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-512.png",
		//         sizes: "512x512",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-192.png",
		//         sizes: "192x192",
		//         type: "image/png",
		//       },
		//     ],
		//     shortcuts: [
		//       {
		//         name: "Demo",
		//         short_name: "Demo",
		//         url: "/demo/",
		//         icons: [
		//           {
		//             src: "/assets/icon/guide-maskable.png",
		//             sizes: "192x192",
		//             purpose: "maskable",
		//             type: "image/png",
		//           },
		//         ],
		//       },
		//     ],
		//   },
		// },
	},
});
