"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLWebsitePageFactory = void 0;
const HTMLHeader_1 = require("./HTMLHeader");
const HTMLContent_1 = require("./HTMLContent");
const HTMLFooter_1 = require("./HTMLFooter");
class HTMLWebsitePageFactory {
    createHeader(text) {
        return new HTMLHeader_1.HTMLHeader(text);
    }
    createContent(text) {
        return new HTMLContent_1.HTMLContent(text);
    }
    createFooter(text) {
        return new HTMLFooter_1.HTMLFooter(text);
    }
}
exports.HTMLWebsitePageFactory = HTMLWebsitePageFactory;
//# sourceMappingURL=HtmlWebSitePageFactory.js.map