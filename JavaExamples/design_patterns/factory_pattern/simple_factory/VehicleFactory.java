package design_patterns.factory_pattern.simple_factory;

import java.security.InvalidParameterException;

public class VehicleFactory {
    public enum Types {
        CAR,
        MOTORCYCLE
    }

    public Vehicle createVehicle(Types type) {
        return switch (type) {
            case CAR -> new Car();

            case MOTORCYCLE -> new MotorCycle();

            default -> throw new IllegalArgumentException("Invalid Vehicle type");
        };
    }
}
