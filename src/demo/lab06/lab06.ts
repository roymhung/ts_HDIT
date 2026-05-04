export {};
console.log("lab06");

type TStudent = {
  id: number;
  name: string;
  email: string;
  isPremium: boolean;
  contact: string | number; // union type
};

type TCourse = {
  courseId: number;
  title: string;
  price: number;
  students: TStudent[];
};

const student1: TStudent = {
  id: 12,
  name: "roy",
  email: "roy@gmail.com",
  isPremium: true,
  contact: "blabla@roy.vn",
};

const student2: TStudent = {
  id: 13,
  name: "boy2",
  email: "boy2@gmail.com",
  isPremium: false,
  contact: 1234567890,
};

const myCourse1: TCourse = {
  courseId: 1,
  title: "Typescript Pro with dev",
  price: 490000,
  students: [],
};

const myCourse2: TCourse = {
  courseId: 2,
  title: "Javascript Pro with dev",
  price: 590000,
  students: [],
};

const registerStudentToCourse = (student: TStudent, course: TCourse) => {
  course.students.push(student);
};

const printCourseInfo = (course: TCourse) => {
  console.log(
    `Tên khóa học: ${course.title}
Số học viên đã đăng ký: ${course.students.length}`,
  );

  if (course.students.length === 0) {
    console.log("Chưa có học viên nào.");
  } else {
    // ["hoidanit", "eric", "bla bla"]
    const studentList = course.students.map((item) => item.name);
    console.log("Liệt kê tên từng học viên:", studentList.join(", "));
  }
};

registerStudentToCourse(student1, myCourse1);
registerStudentToCourse(student2, myCourse1);
printCourseInfo(myCourse1);
console.log("==========");
printCourseInfo(myCourse2);
