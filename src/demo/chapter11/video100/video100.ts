export {};
console.log("video100");

// =============================
// 1. LITERAL TYPES
// =============================

// Literal type = chỉ cho phép giá trị cụ thể
type Status = "success" | "error" | "loading";

let currentStatus: Status;

currentStatus = "success"; // đúng
currentStatus = "error"; // đúng
// currentStatus = "fail"; // sai (không thuộc union)

// =============================
// 2. DÙNG LITERAL TRONG FUNCTION
// =============================

type Role = "admin" | "user" | "guest";

const login = (role: Role) => {
  if (role === "admin") {
    console.log("Full quyền");
  } else if (role === "user") {
    console.log("Quyền cơ bản");
  } else {
    console.log("Khách");
  }
};

login("admin"); //

// =============================
// 3. ENUM
// =============================

// Enum = tập hợp hằng số có tên
enum StatusEnum {
  SUCCESS = "success",
  ERROR = "error",
  LOADING = "loading",
}

let status2: StatusEnum;

status2 = StatusEnum.SUCCESS; //
// status2 = "success"; // sai (không phải enum)

// =============================
// 4. SO SÁNH THỰC TẾ
// =============================

const handleStatusLiteral = (status: Status) => {
  if (status === "loading") {
    console.log("Đang tải...");
  }
};

const handleStatusEnum = (status: StatusEnum) => {
  if (status === StatusEnum.LOADING) {
    console.log("Đang tải...");
  }
};

// =============================
// 5. BEST PRACTICE (as const)
// =============================

// cách này = vừa giống enum, vừa linh hoạt như literal
const STATUS = {
  SUCCESS: "success",
  ERROR: "error",
  LOADING: "loading",
} as const;

// lấy type từ object
type StatusType = (typeof STATUS)[keyof typeof STATUS];

let status3: StatusType;

status3 = "success"; //
status3 = STATUS.ERROR; //

// =============================
// 6. VÍ DỤ API THỰC TẾ
// =============================

type ApiStatus = "idle" | "loading" | "success" | "error";

const fetchData = (status: ApiStatus) => {
  switch (status) {
    case "idle":
      console.log("Chưa gọi API");
      break;
    case "loading":
      console.log("Đang gọi API...");
      break;
    case "success":
      console.log("Thành công");
      break;
    case "error":
      console.log("Thất bại");
      break;
  }
};

fetchData("loading");

// =============================
// 7. NOTE QUAN TRỌNG
// =============================

// Literal type:
// - Chỉ tồn tại ở TypeScript (compile xong là mất)

// Enum:
// - Tồn tại ở runtime (JS vẫn giữ lại)

// Test thử:
console.log(StatusEnum.SUCCESS);
// => sẽ in ra "success"

// Bạn cần nhớ 3 ý quan trọng
// Literal:
// ==> "admin" | "user" → nhẹ, linh hoạt, dùng nhiều nhất
// Enum:
// ==> StatusEnum.SUCCESS → rõ ràng, kiểu OOP
// Best:
// ==> as const → pro nhất trong thực tế
