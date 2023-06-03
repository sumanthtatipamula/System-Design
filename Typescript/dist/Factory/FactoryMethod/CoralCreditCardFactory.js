"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoralCreditCardFactory = void 0;
const CoralCreditCard_1 = require("./CoralCreditCard");
const CreditCardFactory_1 = require("./CreditCardFactory");
class CoralCreditCardFactory extends CreditCardFactory_1.CreditCardFactory {
    createCreditCard() {
        return new CoralCreditCard_1.CoralCreditCard();
    }
}
exports.CoralCreditCardFactory = CoralCreditCardFactory;
//# sourceMappingURL=CoralCreditCardFactory.js.map