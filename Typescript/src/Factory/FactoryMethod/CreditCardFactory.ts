import { CreditCard } from './CreditCardInterface';

export abstract class CreditCardFactory {
	protected abstract createCreditCard(): CreditCard;
	public getCard() {
		return this.createCreditCard();
	}
}
