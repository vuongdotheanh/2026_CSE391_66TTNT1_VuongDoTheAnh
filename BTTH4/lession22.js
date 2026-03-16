

// khai báo
let form = document.getElementById("order-form");
let Name = document.getElementById("product");
let Quantity = document.getElementById("quantity");
let inputDate = document.getElementById("delivery-date");
let Address = document.getElementById("address");
let Note = document.getElementById("notes");
let PayCod = document.getElementById("pay-cod");
let PayBank = document.getElementById("pay-bank");
let PayWallet = document.getElementById("pay-wallet");
let btnAccept = document.getElementById("btn-submit");

// khai báo error

let errorName = document.getElementById("error-product");
let errorQuantity = document.getElementById("error-quantity");
let errorDate = document.getElementById("error-date");
let errorAddress = document.getElementById("error-address");
let errorNote = document.getElementById("error-notes");
let errorPay = document.getElementById("error-payment");


// hàm tiện ích chung
function showError(inputElement, errorElement, message) {
    if (message) errorElement.innerText = message;
    errorElement.style.display = "inline";
    if (inputElement && inputElement.type !== "radio" && inputElement.type !== "checkbox") {

        inputElement.style.border = "2px solid red";
    }
}
function setSuccess(inputElement, errorElement) {
    errorElement.style.display = "none";
    if (inputElement && inputElement.type !== "radio" && inputElement.type !== "checkbox") {
        inputElement.style.border = "2px solid green";
    }
}
function clearError(inputElement, errorElement) {
    errorElement.style.display = "none";
    if (inputElement && inputElement.type !== "radio" && inputElement.type !== "checkbox") {
        inputElement.style.border = "1px solid #ccc";
    }
}

// các validate
// products
function validateProduct() {
    let val = Name.value;
    if (val === "") {
        showError(Name, errorName, "Vui lòng chọn sản phẩm!");
        return false;
    } else {
        setSuccess(Name, errorName);
        return true;
    }
}
// quantity 1-99
function validateQuantity() {
    let val = Quantity.value.trim();
    let num = parseInt(val); // ép số
    if (val === "" || num < 1 || num > 99) {
        showError(Quantity, errorQuantity, "Số lượng 1-99");
        return false;
    }
    else {
        setSuccess(Quantity, errorQuantity)
        return true;

    }
}
// address
function validateAddress() {
    let val = Address.value.trim();

    if (val === "" || val.length < 10) {
        showError(Address, errorAddress, "lớn hơn 10 kí tự!");
        return false;
    }
    else {
        setSuccess(Address, errorAddress);
        return true;
    }
}
// pay
function validatePay() {
    if (PayCod.checked === false && PayBank.checked === false && PayWallet.checked === false) {
        showError(null, errorPay, "Vui lòng chọn 1 phương thức thanh toán");
        return false;
    } else {
        setSuccess(null, errorPay);
        return true;
    }
}
//validate Date
function validateDate(){
    let val = inputDate.value;
    if(val === ""){
        showError(inputDate, errorDate,"Vui lòng chọn ngày giao hàng!");
        return false;
    }
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let selectedDate = new Date(val);
    selectedDate.setHours(0, 0, 0, 0);
    let maxday = new Date();
    maxday.setDate(today.getDate() + 30);
    maxday.setHours(0, 0, 0, 0);

    if(selectedDate.getTime() < today.getTime()){
        showError(inputDate, errorDate, "Vui lòng chọn tháng hiện tại");
        return false;
    }
    else if(selectedDate.getTime() > maxday.getTime()){
        showError(inputDate, errorDate, "Vui lòng chọn tháng hiện tại");
        return false;
    }else{
        setSuccess(inputDate, errorDate);
        return true;
    }
}

// gắn validate
Name.addEventListener("blur", validateProduct);
Address.addEventListener("input", validateAddress);
Quantity.addEventListener("input", validateQuantity);
PayCod.addEventListener("change", validatePay);
PayBank.addEventListener("change", validatePay);
PayWallet.addEventListener("change", validatePay);
inputDate.addEventListener("blur", validateDate);



let charCountDisplay = document.getElementById("char-count");
let totalPriceDisplay = document.getElementById("total-price");
let confirmModal = document.getElementById("confirm-modal");
let confirmDetails = document.getElementById("confirm-details");
let btnConfirm = document.getElementById("btn-confirm");
let btnCancel = document.getElementById("btn-cancel");





Note.addEventListener("input", function() {
    let textLength = Note.value.length;
    charCountDisplay.innerText = `(${textLength}/200)`;

    if (textLength > 200) {
        charCountDisplay.style.color = "red";
        showError(Note, errorNote, "Ghi chú không được quá 200 ký tự!");
    } else {
        charCountDisplay.style.color = "gray";
        clearError(Note, errorNote);
    }
});

// Viết thêm 1 hàm validateNote ngắn gọn để lát đưa vào nút Submit
function validateNote() {
    if (Note.value.length > 200) {
        showError(Note, errorNote, "Ghi chú không được quá 200 ký tự!");
        return false;
    }
    return true;
}





// Bảng giá sản phẩm (định nghĩa bằng Object)
const prices = {
    "iphone15": 30000000,
    "macbook": 25000000,
    "airpods": 5000000
};

function calculateTotal() {
    let productKey = Name.value; // Lấy mã SP
    let qty = parseInt(Quantity.value.trim()); // Lấy số lượng

    // Nếu chọn đúng SP và số lượng hợp lệ thì mới tính tiền
    if (productKey !== "" && qty >= 1 && qty <= 99) {
        let total = prices[productKey] * qty;
        totalPriceDisplay.innerText = "Tổng tiền: " + total.toLocaleString("vi-VN") + " VNĐ";
    } else {
        totalPriceDisplay.innerText = "Tổng tiền: 0 VNĐ";
    }
}

// Gắn sự kiện: Tính lại tiền khi đổi món hoặc đổi số lượng
Name.addEventListener("change", calculateTotal);
Quantity.addEventListener("input", calculateTotal);



form.addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn load lại trang

    // Gọi TẤT CẢ các hàm validate ra và dùng dấu & (Bitwise)
    let isFormValid = validateProduct() 
                    & validateQuantity() 
                    & validateDate() 
                    & validateAddress() 
                    & validatePay()
                    & validateNote(); 

    // Nếu toàn bộ Form hợp lệ
    if (isFormValid === 1) {
        // 1. Giấu nút Xác nhận đơn hàng gốc đi
        btnAccept.style.display = "none";
        
        // 2. Hiện bảng Xác nhận (Confirm Modal) lên
        confirmModal.style.display = "block";

        // 3. Rút trích thông tin để in ra bảng
        let productName = Name.options[Name.selectedIndex].text; // Lấy tên hiển thị (VD: Điện thoại iPhone 15)
        let totalMoney = totalPriceDisplay.innerText;

        confirmDetails.innerHTML = `
            <b>Sản phẩm:</b> ${productName} <br>
            <b>Số lượng:</b> ${Quantity.value} <br>
            <b>Ngày giao:</b> ${inputDate.value} <br>
            <b>Địa chỉ:</b> ${Address.value} <br>
            <b style="color: blue; font-size: 18px;">${totalMoney}</b>
        `;
    }
});

// --- XỬ LÝ 2 NÚT BÊN TRONG BẢNG XÁC NHẬN ---

// Nút "Hủy, sửa lại"
btnCancel.addEventListener("click", function() {
    confirmModal.style.display = "none"; // Giấu bảng đi
    btnAccept.style.display = "block";   // Hiện lại nút Submit của form
});

// Nút "Đồng ý đặt hàng"
btnConfirm.addEventListener("click", function() {
    // Giấu hết form và bảng xác nhận đi
    form.style.display = "none";
    confirmModal.style.display = "none";

    
    let successMsg = document.createElement("h2");
    successMsg.innerHTML = "Đặt hàng thành công! Cảm ơn bạn.";
    successMsg.style.color = "green";
    successMsg.style.textAlign = "center";
    successMsg.style.marginTop = "50px";
    document.body.appendChild(successMsg);
});