import { CreditCard } from './CreditCardInterface';
export declare class PlatinumCreditCard implements CreditCard {
    getCardType(): string;
    getCreditLimit(): Number;
    getAnnualFee(): Number;
}
