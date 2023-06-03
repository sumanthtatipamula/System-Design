package design_patterns.factory_pattern.factory_method;

public class CoralCard implements ICreditCard{
    @Override
    public String getCardType() {
        return "Coral Card";
    }

    @Override
    public int getAnnualFee() {
        return 500;
    }

    @Override
    public int getCardLimit() {
        return 50000;
    }
}
