import { CoralCreditCardFactory } from './CoralCreditCardFactory';
import { CreditCard, Types } from './CreditCardInterface';
import { PlatinumCreditCardFactory } from './PlatinumCreditCardFactory';

function getRandomInt(max: number) {
	return Math.floor(Math.random() * max);
}
const cardType = getRandomInt(10) > 5 ? Types.PLATINUM : Types.CORAL;
const creditCard: CreditCard = (() => {
	switch (cardType) {
		case Types.PLATINUM:
			return new PlatinumCreditCardFactory().getCard();
		case Types.CORAL:
			return new CoralCreditCardFactory().getCard();
		default:
			throw new Error();
	}
})();
console.log('Card Type:', creditCard.getCardType());
console.log('Credit Limit:', creditCard.getCreditLimit());
console.log('Annual Fee:', creditCard.getAnnualFee());
