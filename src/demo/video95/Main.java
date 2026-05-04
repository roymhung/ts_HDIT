// Cách viết tương đương trong Java
// 1. Tạo class User
class User {
    int id;
    String name;
    int age;
    String address;
    String city;

    // Constructor
    public User(int id, String name, int age, String address, String city) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
        this.city = city;
    }

    // Method in thông tin
    public void printUserInfo() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Address: " + address);
        System.out.println("City: " + city);
        System.out.println("------------------");
    }
}


// 2. Chạy trong main
public class Main {
    public static void main(String[] args) {
        // để ý màu sắc của User bên trái dấu "=" và User bên phải dấu "="
        User student1 = new User(1, "Alice", 20, "123 Main St", "New York");
        User student2 = new User(2, "Bob", 22, "456 Elm St", "Los Angeles");

        student1.printUserInfo();
        student2.printUserInfo();
    }
}
