// tóm tắt
// khai báo cái thẻ div chứ bảng tb-container

// TODO 1.2: Tìm cái Form thêm nhân sự (id="addEmployeeForm")
// TODO 1.3: Tìm cái thẻ div dùng để in chữ báo lỗi (id="errorMsg")
const container = document.getElementById('table-container');
const addForm = document.getElementById('addEmployeeForm');
const error = document.getElementById('error');

function render(dataArray) {
    const tableHeader = `<thead class="table-light">
        <tr>
            <th>STT</th>
            <th>Họ tên</th>
            <th>tuổi</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Vị trí</th>
            <th>Hành động</th>
        </tr>
    </thead>
    `;
    const tableRow = dataArray.map((emp) => 
    {
        return( `
        <tr>
            <td>${emp.stt}</td>
            <td>${emp.name}</td>
            <td>${emp.age}</td>
            <td>${emp.email}</td>
            <td>${emp.phone}</td>
            <td>${emp.position}</td>
            
            <td>
                <button class="btn btn-sm btn-primary">Sửa</button>
                <button class="btn btn-sm btn-danger">Xóa</button>
            </td>
        </tr>`
    )}) .join('');

    const fulltable = `
    <table class="table table-bordered">
        ${tableHeader}
        <tbody>
            ${tableRow}
        </tbody>
    </table>
    `;
    container.innerHTML = fulltable;
}
render(employees);



// vẽ bảng
// TODO 2.1: Tạo 1 biến chứa chuỗi HTML của phần Đầu bảng (<thead>...</thead>)
// TODO 2.2: Dùng dataArray.map() lặp qua mảng, tạo ra các chuỗi <tr>...</tr> chứa thông tin nhân viên
// Nhớ dùng .join('') ở cuối để nối mảng thành 1 chuỗi dài
// TODO 2.3: Gộp tableHeader và tableRows vào trong 1 thẻ <table>...</table> hoàn chỉnh
// TODO 2.4: Nhét cái fullTable (chuỗi HTML) đó vào trong container (dùng innerHTML)
    // ...code của bạn ở đây...
// TODO 2.5: Gọi hàm renderTable lần đầu tiên và truyền mảng 'employees' (từ data.js) vào để nó vẽ ra màn hình
// ...code của bạn ở đây...


// bắt sự kiện

addForm.addEventListener('submit', function (e){
    e.preventDefault();

    const fullname = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const position = document.getElementById('position').value.trim();
    const isMale = document.getElementById('male').checked;
    const isFemale = document.getElementById('female').checked;

    let genderVal='';

    if(isMale === true) {
        genderVal = 'Nam';
    }
    else if(isFemale === true) {
        genderVal = 'Nữ';
    }

    // kiểm duyệt
    if(fullname === '' || email === '' || phone === '' || position === '') {
        error.textContent = 'Vui lòng điền đầy đủ thông tin';
        error.classList.remove('d-none');
        return;
    }

// TODO 3.1: Bắt sự kiện submit của form, ngăn nó reload trang// TODO 3.1: Chặn hành vi load lại trang web mặc định của Form
    // ...code của bạn ở đây...

    // TODO 3.2: Thò tay vào các ô input lấy dữ liệu (.value) và xóa khoảng trắng 2 đầu (.trim())
    // Gợi ý: fullName, email, phone, position
    // ...code của bạn ở đây...

    // TODO 3.3: Lấy giá trị Giới tính (Nam/Nữ) dựa vào việc xem ô radio nào đang được .checked
    // ...code của bạn ở đây...

    // ----------------------------------------------------------
    // BẮT ĐẦU KIỂM DUYỆT (Nhớ hiện khung lỗi errorMsg và return để ngắt hàm nếu sai)
    // ----------------------------------------------------------

    // TODO 3.4: Kiểm tra nếu có bất kỳ trường nào bị rỗng
    // ...code của bạn ở đây...

    // TODO 3.5: Kiểm tra nếu Họ tên dài quá 30 ký tự
    // ...code của bạn ở đây...
    if(fullname.length > 30){
        error.textContent = 'Họ tên không được dài quá 30 ký tự';
        error.classList.remove('d-none');
        return;
    }

    // TODO 3.6: Kiểm tra Email có đúng định dạng không (Dùng Regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    // ...code của bạn ở đây...
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        error.textContent = 'Email không đúng định dạng';
        error.classList.remove('d-none');
        return;
    }

    // TODO 3.7: Kiểm tra Số điện thoại có đúng 10 số không (Dùng Regex: /^\d{10}$/)
    // ...code của bạn ở đây...
    const phoneRegex = /^\d{10}$/;
    if(!phoneRegex.test(phone)){
        error.textContent = 'Số điện thoại phải có đúng 10 chữ số';
        error.classList.remove('d-none');
        return;
    }
    // ----------------------------------------------------------
    // NẾU VƯỢT QUA MỌI KIỂM DUYỆT -> LƯU DỮ LIỆU
    // ----------------------------------------------------------

    // TODO 3.8: Giấu cái khung báo lỗi đi (thêm class 'd-none')
    // ...code của bạn ở đây...
    error.classList.add('d-none');

    // TODO 3.9: Đóng gói thông tin vừa nhập thành 1 ob
    const newEmp = {
        stt: employees.length + 1,
        name: fullname,
        age: 0, // tạm thời chưa có dữ liệu tuổi, để 0 trước
        email: email,
        phone: phone,
        position: position, 
        gender: genderVal
    };
    employees.push(newEmp);
    // TODO 3.10: Đẩy object mới đó vào mảng 'employees' gốc (.push)
    // ...code của bạn ở đây...

    // TODO 3.11: Gọi lại hàm renderTable(employees) để nó vẽ lại bảng cập nhật người mới
    // ...code của bạn ở đây...
    render(employees);
    // TODO 3.12: Dọn sạch các chữ vừa gõ trong Form (.reset())
    // ...code của bạn ở đây...
    addForm.reset();
    

    // TODO 3.13: Dùng lệnh của Bootstrap để tắt cái Popup đi
    /* Gợi ý code tắt popup:
       const modalElement = document.getElementById('addEmployeeModal');
       const modalInstance = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
       modalInstance.hide();
    */

    const modalE = document.getElementById('addEmployeeModal');
    // ẩn pop up
    const modalInstance = bootstrap.Modal.getInstance(modalE) || new bootstrap.Modal(modalE);
    modalInstance.hide();

    }); 