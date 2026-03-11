// Bước 1: Tạo một mảng (danh sách) chứa 5 loại trái cây yêu thích.
// Mảng là một biến lưu nhiều giá trị, dùng dấu ngoặc vuông [].
let fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];

// Bước 2: In ra phần tử cuối cùng của mảng.
// fruits.length là số lượng phần tử (ở đây là 5).
// Phần tử cuối cùng có chỉ số là length - 1 (vì chỉ số bắt đầu từ 0).
console.log('Phần tử cuối cùng:', fruits[fruits.length - 1]);

// Bước 3: Thêm 1 loại trái cây mới vào cuối mảng.
// Phương thức push() thêm phần tử vào cuối danh sách.
fruits.push('kiwi');
console.log('Mảng sau khi thêm kiwi:', fruits);

// Bước 4: Xóa 1 loại trái cây ở đầu mảng.
// Phương thức shift() xóa phần tử đầu tiên và trả về nó.
fruits.shift();
console.log('Mảng sau khi xóa phần tử đầu:', fruits);

// Bước 5: Sử dụng map() để tạo mảng mới với tên trái cây viết HOA.
// map() lặp qua từng phần tử, áp dụng hàm (ở đây là toUpperCase() để viết hoa).
// Kết quả là mảng mới, không thay đổi mảng gốc.
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('Mảng trái cây viết hoa:', upperFruits);

// Bước 6: Tìm vị trí (index) của một trái cây cụ thể.
// indexOf() trả về chỉ số của phần tử đầu tiên tìm thấy, hoặc -1 nếu không có.
const index = fruits.indexOf('banana');
console.log('Vị trí của banana:', index);