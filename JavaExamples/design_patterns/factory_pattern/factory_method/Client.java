package design_patterns.factory_pattern.factory_method;

public class Client {
    public static void main(String[] args) {
        String cardType = "Platinum";
        ICreditCard creditCard;
        creditCard =  switch (cardType){
            case "Platinum" -> new PlatinumFactory().getCard();
            case "Coral" -> new CoralFactory().getCard();
            default -> throw new IllegalArgumentException("Invalid Card Type");
        };
        System.out.println("Card Type:" + creditCard.getCardType());
        System.out.println("Annual Fee:" + creditCard.getAnnualFee());
        System.out.println("Credit Limit:" + creditCard.getCardLimit());
    }
}
