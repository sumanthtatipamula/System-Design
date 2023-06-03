import { Content } from './IContent';

export class HTMLContent implements Content {
	content: string;

	constructor(text: string) {
		this.content = `<main>${text}</main>`;
	}
}
