export declare enum Types {
    PLATINUM = "PLATINUM",
    CORAL = "CORAL"
}
export interface CreditCard {
    getCardType(): string;
    getCreditLimit(): Number;
    getAnnualFee(): Number;
}
