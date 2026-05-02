package lesson34;

// 1. public === Có thể truy cập từ bất kỳ đâu
public class lesson34 {
    public String name;

    public lesson34(String name) {
        this.name = name;
    }
}


// 2. private === Chỉ dùng trong chính class đó
class lesson34 {
    private String ssn;

    public String getSsn() {
        return ssn;
    }
}


// 3. protected === Có thể truy cập trong cùng package và các lớp con ở package khác
class lesson34 {
    protected String name;
}


class Student extends lesson34 {
    void show() {
        System.out.println(name); // OK
    }
}


// 4. Default (không ghi gì) === Chỉ dùng trong cùng package, không thể truy cập từ package khác
class lesson34 {
    String name; // default
}
