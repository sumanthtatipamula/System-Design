import { CreditCard } from './CreditCardInterface';
export declare class CoralCreditCard implements CreditCard {
    getCardType(): string;
    getCreditLimit(): Number;
    getAnnualFee(): Number;
}
