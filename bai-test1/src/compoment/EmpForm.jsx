import { useState } from 'react';

function EmpForm({ onClose, onSave }) {
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // lấy giá trị qua nema
        const formData = new FormData(e.target);

        const name = formData.get('name')?.trim() || '';
        const email = formData.get('email')?.trim() || '';
        const phone = formData.get('phone')?.trim() || '';
        const position = formData.get('position') || '';
        const gender = formData.get('gender') ||'';

        const phoneRegex = /^\d{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        //validate
        if(!name || !email || !phone || !position || !gender){
            setError('Vui lòng nhập đủ tt');
            return;
        }
        if(name.length > 30){
            setError("không quá 30 kí tự");
            return;
        }
        if(!phoneRegex.test(phone)){
            setError('Lỗi sdt');
            return;
        }
        if(!emailRegex.test(email)){
            setError('Lôi email');
            return;
        }
        // ok heest thì xóa lỗi
        setError('');
        // đóng gói gửi đi

        const newEmp = {name , email, phone, position, gender};
        onSave(newEmp);
    };


    return (
        <div className="modal fade show d-block">
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '700px' }}>
                <div className="modal-content border-0 shadow">
                    <div className="moldal-header bg-primary text-white border-bottom-0 pb-2"><h5>
                        Thêm nhân sự mới</h5>
                        <button type='button' className='btn-close btn-close-white' onClick={onClose}></button></div>

                    <div className="modal-body ">
                        <form onSubmit={handleSubmit}>
                            {error && (
                                <div className="alert alert-danger">{error}</div>
                            )}
                            {/* hàng 1 */}
                            <div className="row mb-3 text-start">
                                <div className="col-sm-6">
                                    <label className='form-label'>Họ tên</label>
                                    <input type="text " className='form-control' name='name'/>
                                </div>

                                <div className="col-sm-6">
                                    <label className='Email'>Email</label>
                                    <input type="email" name='email' className='form-control' />

                                </div>
                            </div>

                            {/* hàng 2 */}
                            <div className="row mb-3 text-start">
                                <div className="col-sm-6">
                                    <label className='form-label'>Số điện thoại</label>
                                    <input type="tel" name='phone' className='form-control' />
                                </div>

                                <div className="col-sm-6 ">
                                    <label className='form-label'>Vị trí</label>
                                    <select name="position" className='form-select'>
                                        <option value="--Chọn vị trí--">--Chọn vị trí</option>
                                        <option value="Nhân viên">Nhân viên</option>
                                        <option value="Quản lí">Quản lí</option>
                                        <option value="Giám đốc">Gám đốc</option>
                                    </select>
                                </div>

                                {/* hàng 3 giối tính */}

                                <div className="row-sm text-start mb-3">
                                    <label className='form-label'>Giới tính</label>
                                    <input type="radio" name='gender' value='male' className='form-check-input'/>Nam
                                    <input type="radio" name='gender' value='female' className='form-check-input' /> Nữ
                                </div>

                                
                            </div>

                            <div className="modal-footer justify-content-end gap-2">
                        <button className='btn btn-success btn-sm me-2'>Lưu</button>
                        <button className='btn btn-secondary btn-sm' onClick={onClose}>Hủy</button>
                    </div>

                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default EmpForm;