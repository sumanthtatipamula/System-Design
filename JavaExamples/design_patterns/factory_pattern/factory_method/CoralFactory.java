package design_patterns.factory_pattern.factory_method;

public class CoralFactory extends CreditCardFactory {
    @Override
    protected ICreditCard createFactory() {
        return new CoralCard();
    }
}
