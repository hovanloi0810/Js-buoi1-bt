// Bài 3: Quy đổi tiền. 
// Input: 
//     - USD = 23.500 VND
//     - Số tiền người dùng quy đổi.
// Handle:
//     - B1: Tạo hằng USD và gán = 23.500.
//     - B2: Tạo biến vietNamDong = với giá trị muốn quy đổi.
//     - B3: vietNamDong *= USD,
// Output:
//     - in gái trị vietNamDong

const USD = 23500;

var vietNamDong = 2;

var result = vietNamDong * USD
console.log(result.toLocaleString("vn") + " VND")