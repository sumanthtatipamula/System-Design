"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoralCreditCard = void 0;
const CreditCardInterface_1 = require("./CreditCardInterface");
class CoralCreditCard {
    getCardType() {
        return CreditCardInterface_1.Types.CORAL;
    }
    getCreditLimit() {
        return 50000;
    }
    getAnnualFee() {
        return 500;
    }
}
exports.CoralCreditCard = CoralCreditCard;
//# sourceMappingURL=CoralCreditCard.js.map