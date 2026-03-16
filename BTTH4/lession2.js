// ==========================================
// 1. KHAI BÁO BIẾN & REGEX
// ==========================================
let Form = document.getElementById("register-form");
let inputName = document.getElementById("name");
let inputPhone = document.getElementById("phone");
let inputEmail = document.getElementById("email");
let inputPS = document.getElementById("ps");
let inputPSCF = document.getElementById("ps-confirm");
let sexNam = document.getElementById("nam");
let sexNu = document.getElementById("nu");
let DieuK = document.getElementById("dieu-khoan");

let errorName = document.getElementById("error-name");
let errorPhone = document.getElementById("error-phone");
let errorEmail = document.getElementById("error-email");
let errorPS = document.getElementById("error-ps");
let errorPSCF = document.getElementById("error-ps-confirm");
let errorGender = document.getElementById("error-gender");
let errorCheck = document.getElementById("error-check");

let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let regexPhone = /^0[0-9]{9}$/;
let regexPS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
let regexName = /^[a-zA-ZÀ-ỹ\s]+$/;


//1. tạo hàm show-error
function Showerror(inputElement, errorElement, massage) {
    errorElement.innerText = massage;
    errorElement.style.display = "inline";

    if (inputElement && inputElement.type !== "radio" && inputElement.type !== "checkbox") {
        inputElement.style.border = "2px solid red";
    }
}

// 2. tạo hàm thành công success
function setSuccess(inputElement, errorElement) {
    errorElement.style.display = "none";
    if (inputElement && inputElement.type !== "radio" && inputElement.type !== "checkbox") {
        inputElement.style.border = "2px solid green";
    }
}

// 3. tạo hàm clearError    
function clearError(inputElement, errorElement) {
    errorElement.style.display = "none";
    if(inputElement && inputElement.type !== "radio" && inputElement.type !=="checkbox"){
        inputElement.style.border = "1px solid #cccc";
    }
}

//validate fullname
function validateFullName() {
    let val = inputName.value.trim();
    if (val === "" || regexName.test(val) === false) {
        Showerror(inputName, errorName, "Tên đăg nhập không hợp lệ");
        return false;
    }
    else {
        setSuccess(inputName, errorName);
        return true;
    }


}

// validate phone
function validatePhone() {
    let val = inputPhone.value.trim();
    if (val === "" || regexPhone.test(val) === false) {
        Showerror(inputPhone, errorPhone, "SDT không hợp lệ");
        return false;
    }
    else {
        setSuccess(inputPhone, errorPhone);
        return true;
    }
}
// validate email
function validateEmail()
{
    let val = inputEmail.value.trim();
    if(val ==="" || regexEmail.test(val)=== false)
    {
        Showerror(inputEmail, errorEmail, "Email không đúng định dạng");
        return false;
    }
    else{
        setSuccess(inputEmail, errorEmail)
        return true;
    }
}

// validate pass
function validatePass() {
    let val = inputPS.value.trim();
    if(val === "" || regexPS.test(val) === false)
    {
        Showerror(inputPS, errorPS, "Mật khẩu chưa đủ mạnh");
        return false;
    }
    else
    {
        setSuccess(inputPS, errorPS);
        return true;
    }
}

// validate pass-confirm
function validatefPass() {
    let val = inputPSCF.value.trim();
    let pass = inputPS.value.trim();
    if(val !== pass || val ===""){
        Showerror(inputPSCF, errorPSCF, "Mật khẩu không khớp!");
        return false;
    }
    else
    {
        setSuccess(inputPSCF, errorPSCF);
        return true;
    }
}
// validate gender
function validateGender() {
    if(sexNam.checked === false && sexNu.checked === false)
    {
        Showerror(null, errorGender, "Vui lòng chọn giới tính!");
        return false;

    }
    else{
        setSuccess(null, errorGender);
        return true;
    }
}
// validate dieu khoanb
function validateTerm() {
    if(DieuK.checked === false)
    {
        Showerror(null, errorCheck,"Vui lòng đồng ý điều khoản!");
        return false;
    }
    else{
        setSuccess(null, errorCheck);
        return true;
    }
}
// gắn sự kiện cho các validate = blur
inputName.addEventListener("blur", validateFullName);
inputPhone.addEventListener("blur", validatePhone);
inputEmail.addEventListener("blur", validateEmail);
inputPS.addEventListener("blur", validatePass);
inputPSCF.addEventListener("blur", validatefPass);

sexNam.addEventListener("change", validateGender);
sexNu.addEventListener("change", validateGender);
DieuK.addEventListener("change", validateTerm);

// xóa lỗi khi người dùng sửa
inputName.addEventListener("input", function(){
    clearError(inputName, errorName);
})
inputPhone.addEventListener("input", function(){clearError(inputPhone, errorPhone);})
inputEmail.addEventListener("input", function(){ clearError(inputEmail, errorEmail);})
inputPS.addEventListener("input", function(){ clearError(inputPS, errorPS);})
inputPSCF.addEventListener("input", function(){ clearError(inputPSCF, errorPSCF);})

// submit form

Form.addEventListener("submit", function(event){
    event.preventDefault();
    let isForm = validateFullName() & validatePhone() & validateEmail() & validatePass() & validatefPass() & validateGender() & validateTerm();

    if(isForm === 1)
    {
        let nguoidung = inputName.value.trim();
        Form.style.display = "none";
        //tạo thẻ chúc mừng

        let success = document.createElement("h2");
        success.innerHTML = "Chúc mừng bạn đã đăng kí thành công";
        success.style.color = "blue"
        success.style.marginTop = "50px"
        success.style.textAlign = "center"
        document.body.appendChild(success)
    }

})


