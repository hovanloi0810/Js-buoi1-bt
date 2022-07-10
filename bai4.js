// Bài 4: Tính diện tích, chu vi hình chữ nhật.
// Input: 
//     - Chiều dài hình chữ nhật.
//     - Chiều rộng hình chữ nhật.
// Handle:
//     - B1: Tạo biến widthRectangle lưu chiều rộng HCN
//     - B2: Tạo biến lengthRectangle lưu chiều dài HCN
//     - B3: Tạo biến areaRectangle = 0 và gán widthRectangle * lengthRectangle
//     - B4: Tạo biến perimeterRectangle = 0 và gán (widthRectangle + lengthRectangle) *2
// Output:
//     - In giá trị perimeterRectangle và areaRectangle

var widthRectangle = 10,
    lengthRectangle = 20,
    perimeterRectangle = 0,
    areaRectangle = 0;

areaRectangle = widthRectangle * lengthRectangle;

perimeterRectangle = (widthRectangle + lengthRectangle) * 2;

console.log("diện tích HCN: ", areaRectangle);
console.log("chu vi HCN: ", perimeterRectangle);