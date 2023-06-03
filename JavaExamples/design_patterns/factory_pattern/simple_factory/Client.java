package design_patterns.factory_pattern.simple_factory;

public class Client {
    public static void main(String[] args) {
        VehicleFactory vehicleFactory  = new VehicleFactory();
        Vehicle car = vehicleFactory.createVehicle(VehicleFactory.Types.CAR);
        car.drive();
        Vehicle motorcycle = vehicleFactory.createVehicle(VehicleFactory.Types.MOTORCYCLE);
        motorcycle.drive();
    }
}
