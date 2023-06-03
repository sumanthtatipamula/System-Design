import { CreditCard } from './CreditCardInterface';
export declare abstract class CreditCardFactory {
    protected abstract createCreditCard(): CreditCard;
    getCard(): CreditCard;
}
