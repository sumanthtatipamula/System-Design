import { CreditCard, Types } from './CreditCardInterface';

export class PlatinumCreditCard implements CreditCard {
	getCardType(): string {
		return Types.PLATINUM;
	}
	getCreditLimit(): Number {
		return 10000;
	}
	getAnnualFee(): Number {
		return 100;
	}
}
