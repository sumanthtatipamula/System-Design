import { Content } from './IContent';
import { Footer } from './IFooter';
import { Header } from './IHeader';
import { WebsitePageFactory } from './IWebsitePageFactory';
import { HTMLHeader } from './HTMLHeader';
import { HTMLContent } from './HTMLContent';
import { HTMLFooter } from './HTMLFooter';

export class HTMLWebsitePageFactory implements WebsitePageFactory {
	createHeader(text: string): Header {
		return new HTMLHeader(text);
	}
	createContent(text: string): Content {
		return new HTMLContent(text);
	}
	createFooter(text: string): Footer {
		return new HTMLFooter(text);
	}
}
