import { Content } from './IContent';
import { Footer } from './IFooter';
import { Header } from './IHeader';
import { WebsitePageFactory } from './IWebsitePageFactory';
export declare class HTMLWebsitePageFactory implements WebsitePageFactory {
    createHeader(text: string): Header;
    createContent(text: string): Content;
    createFooter(text: string): Footer;
}
