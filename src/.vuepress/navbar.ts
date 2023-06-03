import { navbar } from 'vuepress-theme-hope';

export default navbar([
	'/',
	{
		text: 'Relationships',
		icon: 'handshake',
		link: '/relationships.md',
	},
	{
		text: 'Creational Patterns',
		icon: 'cogs',
		link: '/Creational',
		children: [
			{
				text: 'Java',
				children: [
					{
						text: 'Factory Pattern',
						icon: 'industry',
						link: '/Creational/Java/FactoryPattern.md',
					},
					{
						text: 'Prototype Pattern',
						icon: 'clone',
						link: '/Creational/Java/PrototypePattern.md',
					},
				],
			},
			{
				text: 'Typescript',
				children: [
					{
						text: 'Factory Pattern',
						icon: 'industry',
						link: '/Creational/Typescript/FactoryPattern.md',
					},
					{
						text: 'Builder Pattern',
						icon: 'toolbox',
						link: '/Creational/Typescript/BuilderPattern.md',
					},
					{
						text: 'Prototype Pattern',
						icon: 'clone',
						link: '/Creational/Typescript/PrototypePattern.md',
					},
				],
			},
		],
	},
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
