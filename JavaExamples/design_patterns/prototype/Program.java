package design_patterns.prototype;

public class Program {
    public static void main(String[] args) throws CloneNotSupportedException {
        DeptCache.loadDeptCache();
        Dept clonedEce = DeptCache.getDeptDetails("ECE");
        clonedEce.rank();
        System.out.println("Dept name : " + clonedEce.getDeptType());
    }
}
