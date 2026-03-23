document.addEventListener('DOMContentLoaded', function() {
    const btnSave = document.getElementById('btn-save');
    const btnCancel = document.getElementById('btn-cancel');

    const urlParams = new URLSearchParams(window.location.search);
    const editId = urlParams.get('id');
    let students = JSON.parse(localStorage.getItem('students')) || [];

    if (editId) {
        const student = students.find(s => s.msv === editId);
        if (student) {
            document.getElementById('fullname').value = student.fullname;
            document.getElementById('msv').value = student.msv;
            document.getElementById('msv').disabled = true; 
            document.getElementById('email').value = student.email;
            document.getElementById('phone').value = student.phone;
            document.getElementById('study').value = student.study;
            
            if (student.gender === 'Nam') document.getElementById('genderMale').checked = true;
            if (student.gender === 'Nữ') document.getElementById('genderFemale').checked = true;
        }
    }

    btnSave.addEventListener('click', function(e) {
        e.preventDefault();

        const fullname = document.getElementById('fullname').value.trim();
        const msv = document.getElementById('msv').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const study = document.getElementById('study').value;
        const genderElement = document.querySelector('input[name="gender"]:checked');
        const gender = genderElement ? genderElement.value : '';

        if (!fullname) { alert('Lỗi: Họ và tên không được để trống!'); return; }
        const msvRegex = /^SV\d{3,}$/; 
        if (!msvRegex.test(msv)) { alert('Lỗi: Mã sinh viên phải theo định dạng SVxxx (VD: SV001)!'); return; }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) { alert('Lỗi: Email không hợp lệ!'); return; }
        const phoneRegex = /^\d{10,}$/; 
        if (!phoneRegex.test(phone)) { alert('Lỗi: Số điện thoại chỉ chấp nhận số và phải có ít nhất 10 số!'); return; }
        if (!study) { alert('Lỗi: Vui lòng chọn ngành học!'); return; }
        if (!gender) { alert('Lỗi: Vui lòng chọn giới tính!'); return; }

        if (!editId && students.some(s => s.msv === msv)) {
            alert('Lỗi: Mã sinh viên này đã tồn tại trong hệ thống!');
            return;
        }

        const studentData = { fullname, msv, email, phone, study, gender };

        if (editId) {
            const index = students.findIndex(s => s.msv === editId);
            if (index !== -1) students[index] = studentData;
            alert('Cập nhật thông tin thành công!');
        } else {
            students.push(studentData);
            alert('Đăng ký sinh viên thành công!');
        }

        localStorage.setItem('students', JSON.stringify(students));
        window.location.href = 'student.html'; 
    });

    btnCancel.addEventListener('click', function() {
        window.location.href = 'student.html'; 
    });
});