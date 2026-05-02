// package lesson33;

// 1. Viết class trong Java
class Person {
    private String ssn;
    private String firstName;
    private String lastName;

    // Constructor
    public Person(String ssn, String firstName, String lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Method
    public String getFullName() {
        return firstName + " " + lastName;
    }
}

// 2. Cách sử dụng class trong Java


public class Main {
    public static void main(String[] args) {
        Person person = new Person("171-28-0926", "John", "Doe");
        System.out.println(person.getFullName());
    }
}
