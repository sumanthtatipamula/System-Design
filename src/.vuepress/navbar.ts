import { navbar } from 'vuepress-theme-hope';

export default navbar([
	'/',
	{
		text: 'Relationships',
		icon: 'handshake',
		link: '/relationships.md',
	},
	{
		text: 'Structural Patterns',
		link: '/StructuralPatterns',
		children: [
			{
				text: 'Java',
				children: [
					{
						text: 'Composite Pattern',
						link: '/StructuralPatterns/Java/CompositePattern.md',
						icon: 'sitemap',
					},
					{
						text: 'Decorator Pattern',
						link: '/StructuralPatterns/Java/DecoratorPattern.md',
						icon: 'paint-roller',
					},
				],
			},
		],
	},
	{
		text: 'Behavioral Patterns',
		link: '/BehavioralPatterns',
		icon: 'network-wired',
		children: [
			{
				text: 'Java',
				children: [
					{
						text: 'Strategy Pattern',
						link: '/BehavioralPatterns/Java/StrategyPattern.md',
						icon: 'chess',
					},
					{
						text: 'Chain Of Responsibility',
						link: '/BehavioralPatterns/Java/ChainOfResponsibility.md',
						icon: 'link',
					},
					{
						text: 'Command',
						link: '/BehavioralPatterns/Java/CommandPattern.md',
						icon: 'hand-pointer',
					},
					{
						text: 'Observer',
						link: '/BehavioralPatterns/Java/Observer.md',
						icon: 'binoculars',
					},
					{
						text: 'Iterator',
						link: '/BehavioralPatterns/Java/Iterator.md',
						icon: 'forward',
					},
					{
						text: 'TemplateMethod',
						link: '/BehavioralPatterns/Java/TemplateMethod.md',
						icon: 'file-alt',
					},
					{
						text: 'Mediator',
						link: '/BehavioralPatterns/Java/Mediator.md',
						icon: 'users',
					},
					{
						text: 'State Pattern',
						link: '/BehavioralPatterns/Java/StatePattern.md',
						icon: 'exchange-alt',
					},
					{
						text: 'Memento Pattern',
						link: '/BehavioralPatterns/Java/MementoPattern.md',
						icon: 'undo-alt',
					},
					{
						text: 'Visitor Pattern',
						link: '/BehavioralPatterns/Java/VisitorPattern.md',
						icon: 'user-check',
					},
				],
			},
			{
				text: 'TypeScript',
				children: [
					{
						text: 'Strategy Pattern',
						link: '/BehavioralPatterns/TypeScript/StrategyPattern.md',
						icon: 'chess',
					},
					{
						text: 'Chain Of Responsibility',
						link: '/BehavioralPatterns/TypeScript/ChainOfResponsibility.md',
						icon: 'link',
					},
				],
			},
		],
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
