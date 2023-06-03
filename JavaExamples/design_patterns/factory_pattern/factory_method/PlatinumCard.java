package design_patterns.factory_pattern.factory_method;

public class PlatinumCard implements  ICreditCard{
    @Override
    public String getCardType() {
        return "PlatinumCard";
    }

    @Override
    public int getAnnualFee() {
        return 100;
    }

    @Override
    public int getCardLimit() {
        return 10000;
    }
}
