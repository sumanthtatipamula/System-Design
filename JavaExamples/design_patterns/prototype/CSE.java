package design_patterns.prototype;

public class CSE extends Dept{

    public CSE(){
        super.setDeptType("CSE");
    }

    @Override
    void rank() {
        System.out.println("Inside rank method - CSE class");
    }
}
