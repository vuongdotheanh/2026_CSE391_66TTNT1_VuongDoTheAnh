// ==========================================
// 1. KHỞI TẠO CÁC BIẾN LƯU TRỮ (STATE)
// ==========================================
let students = []; // Mảng gốc lưu toàn bộ sinh viên cả lớp
let currentKeyword = ""; // Từ khóa tìm kiếm hiện tại
let currentFilter = "all"; // Bộ lọc xếp loại hiện tại
let isAscending = true; // Trạng thái sắp xếp điểm (true = Tăng, false = Giảm)

// Lấy các thẻ HTML
let inputName = document.getElementById("name");
let inputScore = document.getElementById("score");
let btnAdd = document.getElementById("btn-add");
let tableBody = document.getElementById("tbody");
let textTongSV = document.getElementById("tong-sv");
let textDTB = document.getElementById("dtb");
let inputSearch = document.getElementById("search");
let btnSearch = document.getElementById("btn-search");
let noResult = document.getElementById("no-rs");
let filterChange = document.getElementById("filter");
let sortDiem = document.getElementById("sort-diem");
let sortIcon = document.getElementById("sort-icon");

// ==========================================
// 2. HÀM VẼ GIAO DIỆN TỪ MẢNG (RENDER)
// ==========================================
function renderTable(danhSachInRa) {
    tableBody.innerHTML = ""; // Xóa trắng bảng cũ để vẽ lại từ đầu

    // Nếu mảng rỗng thì hiện chữ "Không có kết quả", ngược lại thì ẩn đi
    if (danhSachInRa.length === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }

    // Vẽ từng dòng từ mảng danhSachInRa
    for (let i = 0; i < danhSachInRa.length; i++) {
        let sv = danhSachInRa[i];
        let tr = document.createElement("tr");

        if (sv.diem < 5) tr.style.backgroundColor = "#c2a851";

        tr.innerHTML = `
            <td>${i + 1}</td>
            <td>${sv.ten}</td>
            <td>${sv.diem}</td>
            <td>${sv.xeploai}</td>
            <td><button class="btn-delete" data-id="${sv.id}">Xóa</button></td>
        `;
        tableBody.appendChild(tr);
    }

    // Thống kê dựa trên mảng GỐC (students) để luôn biết sĩ số thực của cả lớp
    textTongSV.innerText = students.length;
    if (students.length === 0) {
        textDTB.innerText = "0.0";
    } else {
        let tong = 0;
        for (let sv of students) tong += sv.diem;
        textDTB.innerText = (tong / students.length).toFixed(1);
    }
}

// ==========================================
// 3. HÀM XỬ LÝ TRUNG TÂM (APPLY FILTERS)
// ==========================================
function applyFilters() {
    // 3.1. Tạo mảng mới lọc theo Tìm Kiếm VÀ Xếp Loại
    let filteredStudents = students.filter(function(sv) {
        let matchName = sv.ten.toLowerCase().includes(currentKeyword);
        let matchFilter = (currentFilter === "all" || sv.xeploai.toLowerCase() === currentFilter);
        
        return matchName && matchFilter; // Phải thỏa mãn CẢ 2 điều kiện
    });

    // 3.2. Sắp xếp mảng đã lọc
    filteredStudents.sort(function(a, b) {
        if (isAscending) return a.diem - b.diem;
        return b.diem - a.diem;
    });

    // Cập nhật mũi tên
    sortIcon.innerText = isAscending ? " ▲" : " ▼";

    // 3.3. Đưa mảng đã xử lý xong đi vẽ giao diện
    renderTable(filteredStudents);
}

// ==========================================
// 4. CÁC SỰ KIỆN TƯƠNG TÁC
// ==========================================

// --- THÊM SINH VIÊN ---
btnAdd.addEventListener("click", function(event) {
    event.preventDefault();
    let ten = inputName.value.trim();
    let diem = parseFloat(inputScore.value.trim());

    if (!ten || isNaN(diem) || diem < 0 || diem > 10) {
        alert("Tên hoặc điểm không hợp lệ");
        return;
    }

    let xeploai = "";
    if (diem < 5) xeploai = "Yếu";
    else if (diem < 7) xeploai = "Trung Bình";
    else if (diem < 8.5) xeploai = "Khá";
    else xeploai = "Giỏi";

    // Đẩy DỮ LIỆU vào MẢNG (dùng Date.now() để tạo ID độc nhất cho mỗi người)
    students.push({
        id: Date.now(), 
        ten: ten,
        diem: diem,
        xeploai: xeploai
    });

    inputName.value = "";
    inputScore.value = "";
    inputName.focus();

    // Dữ liệu thay đổi -> Gọi hàm trung tâm để xử lý và vẽ lại
    applyFilters(); 
});

inputScore.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btnAdd.click();
    }
});

// --- XÓA SINH VIÊN ---
tableBody.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-delete")) {
        let xacnhan = confirm("Đồng ý xóa?");
        if (xacnhan) {
            // Lấy ID độc nhất từ thuộc tính data-id của nút Xóa
            let idCanXoa = parseFloat(event.target.getAttribute("data-id"));
            
            // Xóa khỏi mảng gốc bằng cách giữ lại những người có ID khác với ID cần xóa
            students = students.filter(sv => sv.id !== idCanXoa);
            
            // Dữ liệu thay đổi -> Gọi hàm trung tâm để vẽ lại
            applyFilters();
        }
    }
});

// --- TÌM KIẾM ---
btnSearch.addEventListener("click", function() {
    currentKeyword = inputSearch.value.trim().toLowerCase();
    applyFilters();
});
inputSearch.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btnSearch.click();
    }
});

// --- LỌC XẾP LOẠI ---
filterChange.addEventListener("change", function() {
    currentFilter = filterChange.value.toLowerCase();
    applyFilters();
});

// --- SẮP XẾP ---
sortDiem.addEventListener("click", function() {
    isAscending = !isAscending;
    applyFilters();
});