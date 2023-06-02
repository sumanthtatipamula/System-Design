import { navbar } from 'vuepress-theme-hope';

export default navbar([
	'/',
	// '/demo/',
	{
		text: 'Design Principles',
		icon: 'pencil-ruler',
		children: [
			{
				text: 'SOLID',
				icon: 'cubes',
				children: [
					{
						icon: 'user',
						text: 'SRP',
						link: '/DesignPrinciples/SOLID/single-responsibility.md',
					},
					{
						icon: 'lock',
						text: 'OCP',
						link: '/DesignPrinciples/SOLID/open-closed.md',
					},
					{
						icon: 'object-group',
						text: 'LSP',
						link: '/DesignPrinciples/SOLID/liskovs-substitution.md',
					},
					{
						icon: 'columns',
						text: 'ISP',
						link: '/DesignPrinciples/SOLID/interface-segregation.md',
					},
					{
						icon: 'exchange-alt',
						text: 'DI',
						link: '/DesignPrinciples/SOLID/dependency-inversion.md',
					},
				],
			},
		],
	},
]);
