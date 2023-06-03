"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatinumCreditCardFactory = void 0;
const CreditCardFactory_1 = require("./CreditCardFactory");
const PlatinumCreditCard_1 = require("./PlatinumCreditCard");
class PlatinumCreditCardFactory extends CreditCardFactory_1.CreditCardFactory {
    createCreditCard() {
        return new PlatinumCreditCard_1.PlatinumCreditCard();
    }
}
exports.PlatinumCreditCardFactory = PlatinumCreditCardFactory;
//# sourceMappingURL=PlatinumCreditCardFactory.js.map