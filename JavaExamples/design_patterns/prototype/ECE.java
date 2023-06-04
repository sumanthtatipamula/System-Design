package design_patterns.prototype;

public class ECE extends Dept{
    public ECE(){
        super.setDeptType("ECE");
    }

    @Override
    void rank() {
        System.out.println("Inside rank method - ECE class");
    }
}
