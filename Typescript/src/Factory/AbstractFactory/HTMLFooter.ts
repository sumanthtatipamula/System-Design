import { Footer } from './IFooter';

export class HTMLFooter implements Footer {
	content: string;

	constructor(text: string) {
		this.content = `<footer>${text}</footer>`;
	}
}
