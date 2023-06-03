package design_patterns.factory_pattern.factory_method;

public abstract class CreditCardFactory {
    protected abstract ICreditCard createFactory();
    public ICreditCard getCard(){
        return createFactory();
    }
}
