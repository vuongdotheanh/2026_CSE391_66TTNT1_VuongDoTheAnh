Gemini đã nói
Bình tĩnh, gửi bạn đúng dạng list ngắn gọn để copy luôn:

Tên (chỉ chữ tiếng Việt và dấu cách, không số): /^[\p{L}\s]+$/u

Số điện thoại (đúng 10 số, đầu mạng VN 03, 05, 07, 08, 09): /^0[35789]\d{8}$/

Email (chuẩn định dạng có @ và dấu chấm): /^[^\s@]+@[^\s@]+\.[^\s@]+$/

Tuổi (số từ 1 đến 99): /^[1-9][0-9]?$/


// KIỂM DUYỆT BẰNG REGEX
    // 1. Kiểm tra bỏ trống
    if (name === '' || email === '' || phone === '' || position === '') {
        setErrorMsg('Vui lòng điền đầy đủ thông tin');
        return;
    }

    // 2. Kiểm tra Tên (Chỉ chữ tiếng Việt và khoảng trắng, độ dài <= 30)
    const nameRegex = /^[\p{L}\s]+$/u;
    if (!nameRegex.test(name)) {
        setErrorMsg('Họ tên chỉ được chứa chữ cái và khoảng trắng');
        return;
    }
    if (name.length > 30) {
        setErrorMsg('Họ tên không được dài quá 30 ký tự');
        return;
    }

    // 3. Kiểm tra Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setErrorMsg('Email không đúng định dạng');
        return;
    }

    // 4. Kiểm tra Số điện thoại (10 số, đúng đầu mạng VN)
    const phoneRegex = /^0[35789]\d{8}$/;
    if (!phoneRegex.test(phone)) {
        setErrorMsg('Số điện thoại không hợp lệ (VD: 098..., 035...)');
        return;
    }

    /* 5. Kiểm tra Tuổi 
    (Lưu ý: Form HTML hiện tại của bạn chưa có ô nhập Tuổi (age). 
    Nếu bạn thêm ô input tuổi vào form, hãy mở comment đoạn code dưới đây ra để dùng)
    */
    
    // const age = e.target.age?.value.trim();
    // const ageRegex = /^[1-9][0-9]?$/;
    // if (!ageRegex.test(age)) {
    //     setErrorMsg('Tuổi phải là số từ 1 đến 99');
    //     return;
    // }