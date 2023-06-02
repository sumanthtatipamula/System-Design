import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
	'/': [
		'',
		{
			text: 'Design Principles',
			icon: 'pencil-ruler',
			prefix: 'DesignPrinciples/',
			children: 'structure',
		},
		// 'slides',
	],
});
