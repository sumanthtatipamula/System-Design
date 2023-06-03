import { Header } from './IHeader';
import { Content } from './IContent';
import { Footer } from './IFooter';

export interface WebsitePageFactory {
	createHeader(text: string): Header;
	createContent(text: string): Content;
	createFooter(text: string): Footer;
}
