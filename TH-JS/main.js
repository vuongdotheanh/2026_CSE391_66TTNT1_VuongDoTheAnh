// 1. Lấy dữ liệu từ LocalStorage, nếu chưa có thì tạo mảng rỗng []
let students = JSON.parse(localStorage.getItem('danh_sach_sv')) || [];

// 2. Lấy các phần tử từ DOM
const tbody = document.getElementById('tbody');
const totalSpan = document.getElementById('total');
const scoreSpan = document.getElementById('score');
const formBox = document.getElementById('formBox');
const btnAddSv = document.getElementById('add-sv');
const btnCancel = document.getElementById('cancel');
const btnSave = document.getElementById('save');

// Các ô input
const inputMsv = document.getElementById('msv');
const inputName = document.getElementById('fullname');
const inputDob = document.getElementById('date-time');
const inputClass = document.getElementById('class-name');
const inputEmail = document.getElementById('email');
const inputPass = document.getElementById('pass');
const inputConfirmPass = document.getElementById('confirm-pass');

// 3. Khởi tạo giao diện ban đầu
formBox.style.display = 'none'; // Ẩn form lúc mới vào
renderTable();

// 4. HÀM QUAN TRỌNG: Lưu vào LocalStorage
function saveToLocalStorage() {
    localStorage.setItem('danh_sach_sv', JSON.stringify(students));
}

// 5. Hàm in dữ liệu ra bảng
function renderTable() {
    tbody.innerHTML = ''; // Xóa sạch dữ liệu cũ
    let totalGpa = 0;

    students.forEach((sv, index) => {
        totalGpa += sv.gpa;
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${sv.msv}</td>
            <td>${sv.name}</td>
            <td>${sv.dob}</td>
            <td>${sv.className}</td>
            <td>${sv.gpa.toFixed(1)}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editStudent(${sv.id})">Sửa</button>
                <button class="btn btn-danger btn-sm" onclick="deleteStudent(${sv.id})">Xóa</button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Cập nhật thống kê
    totalSpan.innerText = students.length;
    const avg = students.length > 0 ? (totalGpa / students.length).toFixed(2) : 0;
    scoreSpan.innerText = avg;
}

// 6. Sự kiện: Hiển thị form thêm sinh viên
btnAddSv.addEventListener('click', () => {
    formBox.style.display = 'block';
    clearForm();
});

// 7. Sự kiện: Nút Hủy (Đóng form)
btnCancel.addEventListener('click', (e) => {
    e.preventDefault(); 
    formBox.style.display = 'none';
});

// 8. Sự kiện: Lưu sinh viên (Có Validate và Thông báo)
btnSave.addEventListener('click', (e) => {
    e.preventDefault(); // Chặn load lại trang khi ấn submit

    const msv = inputMsv.value.trim();
    const name = inputName.value.trim();
    const dob = inputDob.value;
    const className = inputClass.options[inputClass.selectedIndex].text; 
    const email = inputEmail.value.trim();
    const pass = inputPass.value;
    const confirmPass = inputConfirmPass.value;

    // Validate
    if (!msv || !name || !dob || inputClass.selectedIndex === 0 || !email || !pass || !confirmPass) {
        alert("⚠️ Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    if (pass.length < 8) {
        alert("⚠️ Mật khẩu phải có tối thiểu 8 kí tự!");
        return;
    }
    if (pass !== confirmPass) {
        alert("⚠️ Mật khẩu xác nhận không khớp!");
        return;
    }

    // Tạo sinh viên mới
    const newStudent = {
        id: Date.now(),
        msv: msv,
        name: name,
        dob: dob,
        className: className,
        gpa: parseFloat((Math.random() * (10 - 5) + 5).toFixed(1))
    };

    // Thêm vào mảng, LƯU LOCALSTORAGE và cập nhật giao diện
    students.push(newStudent);
    saveToLocalStorage(); 
    renderTable();
    formBox.style.display = 'none';
    alert("✅ Thêm sinh viên thành công!");
});

// 9. Hàm xóa sinh viên
window.deleteStudent = function(id) {
    if (confirm("❓ Bạn có chắc chắn muốn xóa sinh viên này không?")) {
        students = students.filter(sv => sv.id !== id);
        saveToLocalStorage(); // Cập nhật lại LocalStorage sau khi xóa
        renderTable();
        alert("🗑️ Đã xóa sinh viên!");
    }
}

// 10. Hàm sửa sinh viên
window.editStudent = function(id) {
    alert("🛠️ Tính năng Sửa đang được nâng cấp!");
}

// 11. Hàm dọn dẹp form
function clearForm() {
    inputMsv.value = '';
    inputName.value = '';
    inputDob.value = '';
    inputClass.selectedIndex = 0;
    inputEmail.value = '';
    inputPass.value = '';
    inputConfirmPass.value = '';
}               