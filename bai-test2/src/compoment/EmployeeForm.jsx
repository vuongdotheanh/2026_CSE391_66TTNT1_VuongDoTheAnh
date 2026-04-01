import React, { useState } from 'react';

function EmployeeForm({ onClose, onSave }) {
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Lấy dữ liệu
        const formData = new FormData(e.target);
        
        // Thêm dấu ? trước .trim() để phòng trường hợp dữ liệu chưa kịp render, tránh lỗi sập web
        const name = formData.get('name')?.trim() || '';
        const email = formData.get('email')?.trim() || '';
        const phone = formData.get('phone')?.trim() || '';
        const position = formData.get('position') || '';
        const gender = formData.get('gender') || '';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;

        // Validate
        if (!name || !phone || !email || !position || !gender) { // Thêm check giới tính
            setError('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        if (name.length > 30) {
            setError('Tên không quá 30 kí tự');
            return;
        }
        if (!emailRegex.test(email)) {
            setError('Email không hợp lệ');
            return;
        }
        if (!phoneRegex.test(phone)) {
            setError('SDT không đúng');
            return;
        }
        
        setError('');
        
        // Gom dữ liệu gửi lên App
        const newEmp = { name, email, phone, position, gender };
        onSave(newEmp);
    };

    return (
        <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '650px' }}>
                <div className="modal-content border-0 shadow">
                    
                    {/* Header: Nền xanh, chữ trắng giống ảnh */}
                    <div className="modal-header bg-primary text-white border-bottom-0 pb-2">
                        <h5 className="modal-title fs-6 fw-bold">Thêm nhân sự mới</h5>
                        <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                    </div>

                    <div className="modal-body px-4 pt-4 pb-3">
                        <form onSubmit={handleSubmit}>
                            {/* Khung báo lỗi màu hồng nhạt giống ảnh */}
                            {error && (
                                <div className='alert text-center py-2 mb-4' style={{ backgroundColor: '#f8d7da', color: '#842029', border: '1px solid #f5c2c7' }}>
                                    {error}
                                </div>
                            )}

                            {/* Hàng 1: Họ tên + Email */}
                            <div className="row mb-3 text-start">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <label className="form-label text-muted fs-6 mb-1">Họ tên</label>
                                    <input type="text" name="name" className="form-control" />
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label text-muted fs-6 mb-1">Email</label>
                                    <input type="email" name="email" className="form-control" />
                                </div>
                            </div>

                            {/* Hàng 2: Số điện thoại + Vị trí */}
                            <div className="row mb-4 text-start">
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <label className="form-label text-muted fs-6 mb-1">Số điện thoại</label>
                                    <input type="tel" name="phone" className="form-control" />
                                </div>
                                <div className="col-sm-6">
                                    <label className="form-label text-muted fs-6 mb-1">Vị trí</label>
                                    <select className="form-select" name="position">
                                        <option value="">-- Chọn vị trí --</option>
                                        <option value="Nhân viên">Nhân viên</option>
                                        <option value="Quản lý">Quản lý</option>
                                        <option value="Giám đốc">Giám đốc</option>
                                    </select>
                                </div>
                            </div>

                            {/* Giới tính */}
                            <div className="mb-4 text-start">
                                <label className="form-label text-muted fs-6 mb-2 d-block">Giới tính</label>
                                <div className="form-check form-check-inline me-4">
                                    <input className="form-check-input" type="radio" name="gender" id="genderMale" value="Nam" />
                                    <label className="form-check-label" htmlFor="genderMale">Nam</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="genderFemale" value="Nữ" />
                                    <label className="form-check-label" htmlFor="genderFemale">Nữ</label>
                                </div>
                            </div>

                            {/* Footer (Chỉ gạch chân dưới, không viền trên) */}
                            <div className="border-top pt-3 mt-4 d-flex justify-content-end gap-2">
                                <button type="submit" className="btn btn-success px-4" style={{ backgroundColor: '#198754' }}>Lưu</button>
                                <button type="button" className="btn btn-secondary px-4" onClick={onClose}>Hủy</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmployeeForm;