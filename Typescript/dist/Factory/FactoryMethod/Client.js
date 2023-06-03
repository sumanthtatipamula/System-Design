"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CoralCreditCardFactory_1 = require("./CoralCreditCardFactory");
const CreditCardInterface_1 = require("./CreditCardInterface");
const PlatinumCreditCardFactory_1 = require("./PlatinumCreditCardFactory");
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const cardType = getRandomInt(10) > 5 ? CreditCardInterface_1.Types.PLATINUM : CreditCardInterface_1.Types.CORAL;
const creditCard = (() => {
    switch (cardType) {
        case CreditCardInterface_1.Types.PLATINUM:
            return new PlatinumCreditCardFactory_1.PlatinumCreditCardFactory().getCard();
        case CreditCardInterface_1.Types.CORAL:
            return new CoralCreditCardFactory_1.CoralCreditCardFactory().getCard();
        default:
            throw new Error();
    }
})();
console.log('Card Type:', creditCard.getCardType());
console.log('Credit Limit:', creditCard.getCreditLimit());
console.log('Annual Fee:', creditCard.getAnnualFee());
//# sourceMappingURL=Client.js.map