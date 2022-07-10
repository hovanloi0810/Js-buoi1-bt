// Bài 5: Tính tổng 2 ký số
// Input: 
//     - Số có hai chữ số
// Handle:
//     - B1: Tạo biến myNumber lưu giá trị 2 kỳ số
//     - B2: Tạo biến unitPosition và gán = myNumber % 10
//     - B3: Tạo biến tensDigit và gán = myNumber / 10
//     - B4: Tạo biến myResult = unitPosition + tensDigit
// Output:
//     - In giá trị myResult

var myNumber = 44,
    unitPosition = 0,
    tensDigit = 0,
    myResult = 0;

unitPosition = myNumber % 10;
tensDigit = Math.floor(myNumber % 100 / 10);

myResult = unitPosition + tensDigit;

console.log(myResult);