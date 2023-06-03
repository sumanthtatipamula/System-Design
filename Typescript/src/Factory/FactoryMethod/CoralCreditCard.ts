import { CreditCard, Types } from './CreditCardInterface';

export class CoralCreditCard implements CreditCard {
	getCardType(): string {
		return Types.CORAL;
	}
	getCreditLimit(): Number {
		return 50000;
	}
	getAnnualFee(): Number {
		return 500;
	}
}
