import { CreditCardFactory } from './CreditCardFactory';
import { CreditCard } from './CreditCardInterface';
export declare class PlatinumCreditCardFactory extends CreditCardFactory {
    protected createCreditCard(): CreditCard;
}
