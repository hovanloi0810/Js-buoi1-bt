// Bái 1 : Tính tiền lương nhân viên

// input : 
//     - Lương 1 ngày là 100.000
//     - Số ngày làm của người dùng
// handle :
//     - tạo hằng: ONE_DAY_SALARY = 100.000
//     - tạo biến: workDays = số ngày làm người dùng
//     - tạo biến: salary = ONE_DAY_SALARY * workDays
// output :
//     - Kết quả của biến salary 
// + vì đề bài KHÔNG kêu in ra giá trị number hay string
// + Nên Em có dùng toLocaleString() để hiển thị dấu "," ngăn cách phần ngàn cho dễ nhìn

const ONE_DAY_SALARY = 100000;

var workDays = 25, mySalary = 0;

mySalary = ONE_DAY_SALARY * workDays;

console.log(mySalary.toLocaleString("vn"));