import { CoralCreditCard } from './CoralCreditCard';
import { CreditCardFactory } from './CreditCardFactory';
import { CreditCard } from './CreditCardInterface';

export class CoralCreditCardFactory extends CreditCardFactory {
	protected createCreditCard(): CreditCard {
		return new CoralCreditCard();
	}
}
