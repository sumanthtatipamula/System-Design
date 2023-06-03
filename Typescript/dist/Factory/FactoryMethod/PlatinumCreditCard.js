"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatinumCreditCard = void 0;
const CreditCardInterface_1 = require("./CreditCardInterface");
class PlatinumCreditCard {
    getCardType() {
        return CreditCardInterface_1.Types.PLATINUM;
    }
    getCreditLimit() {
        return 10000;
    }
    getAnnualFee() {
        return 100;
    }
}
exports.PlatinumCreditCard = PlatinumCreditCard;
//# sourceMappingURL=PlatinumCreditCard.js.map