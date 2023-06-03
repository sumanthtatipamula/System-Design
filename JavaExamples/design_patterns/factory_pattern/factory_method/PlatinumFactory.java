package design_patterns.factory_pattern.factory_method;

public class PlatinumFactory extends CreditCardFactory{
    @Override
    protected ICreditCard createFactory() {
        return new PlatinumCard();
    }
}
