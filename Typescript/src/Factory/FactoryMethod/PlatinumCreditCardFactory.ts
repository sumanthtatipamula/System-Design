import { CreditCardFactory } from './CreditCardFactory';
import { CreditCard } from './CreditCardInterface';
import { PlatinumCreditCard } from './PlatinumCreditCard';

export class PlatinumCreditCardFactory extends CreditCardFactory {
	protected createCreditCard(): CreditCard {
		return new PlatinumCreditCard();
	}
}
