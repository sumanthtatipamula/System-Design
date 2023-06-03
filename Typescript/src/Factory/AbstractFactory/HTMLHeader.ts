import { Header } from './IHeader';

export class HTMLHeader implements Header {
	content: string;

	constructor(text: string) {
		this.content = `<head>${text}</head>`;
	}
}
