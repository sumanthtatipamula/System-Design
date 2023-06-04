package design_patterns.prototype;

public abstract class Dept implements Cloneable {
    private String deptId;

    public String getDeptType() {
        return deptType;
    }

    public void setDeptType(String deptType) {
        this.deptType = deptType;
    }

    private String deptType;

    public String getDeptId() {
        return deptId;
    }

    public void setDeptId(String deptId) {
        this.deptId = deptId;
    }

    abstract void rank();

    @Override
    public Dept clone() throws  CloneNotSupportedException{
        //Shallow Copy
        return (Dept)super.clone();
    }
}
