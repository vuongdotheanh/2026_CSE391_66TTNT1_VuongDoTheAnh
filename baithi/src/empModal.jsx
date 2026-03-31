import { useState } from 'react';

function EmployeeModal({ onClose, onSave }) {
  // Trạng thái lưu câu báo lỗi (chỉ dùng nội bộ trong Modal này)
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Lấy dữ liệu từ các ô input
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const phone = e.target.phone.value.trim();
    const position = e.target.position.value;
    const isMale = e.target.male.checked;
    const isFemale = e.target.female.checked;
    
    let genderVal = '';
    if (isMale) genderVal = 'Nam';
    if (isFemale) genderVal = 'Nữ';

    // KIỂM DUYỆT
    if (name === '' || email === '' || phone === '' || position === '') {
        setErrorMsg('Vui lòng điền đầy đủ thông tin');
        return;
    }
    if (name.length > 30) {
        setErrorMsg('Họ tên không được dài quá 30 ký tự');
        return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setErrorMsg('Email không đúng định dạng');
        return;
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        setErrorMsg('Số điện thoại phải có đúng 10 chữ số');
        return;
    }

    // Nếu hợp lệ, đóng gói data gửi lên cho "Giám đốc" (App.jsx)
    const newEmp = { name, email, phone, position, gender: genderVal };
    
    onSave(newEmp); // Gọi hàm của App.jsx
  };

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '700px' }}>
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title">Thêm nhân sự mới</h4>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {errorMsg !== '' && <div className="alert alert-danger">{errorMsg}</div>}
              
              <div className="row mb-3 text-start"> 
                <div className="col-6 ">
                  <label className="form-label ">Họ tên</label>
                  <input type="text" className="form-control" name="name" />
                </div>
                <div className="col-6 text-start">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" name="email" />
                </div>
              </div>

              <div className="row mb-3 text-start">
                <div className="col-6">
                  <label className="form-label">Số điện thoại</label>
                  <input type="tel" className="form-control" name="phone" />
                </div>
                <div className="col-6 text-start">
                  <label className="form-label">Vị trí</label>
                  <select className="form-select" name="position">
                    <option value="">-- Chọn vị trí --</option>
                    <option value="Nhân viên">Nhân Viên</option>
                    <option value="Quản lý">Quản Lý</option>
                    <option value="Giám đốc">Giám Đốc</option>
                  </select>
                </div>
              </div>

              <div className="mb-4 text-start">
                <label className="form-label d-block">Giới tính</label>
                <div className="form-check form-check-inline">
                  <input type="radio" name="gender" id="male" className="form-check-input" />
                  <label htmlFor="male" className="form-check-label">Nam</label>
                </div>
                <div className="form-check form-check-inline">
                  <input type="radio" name="gender" id="female" className="form-check-input" />
                  <label htmlFor="female" className="form-check-label">Nữ</label>
                </div>
              </div>

              <div className="modal-footer justify-content-end gap-2">
                <button type="button" className="btn btn-secondary" onClick={onClose}>Hủy</button>
                <button type="submit" className="btn btn-success">Lưu</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeModal;