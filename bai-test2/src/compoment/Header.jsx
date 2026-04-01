import React from 'react';

function Header() {
    return (
        // bg-dark tạo nền đen, py-3 tạo khoảng cách trên dưới
        <div className="bg-dark text-white py-3">
            {/* d-flex justify-content-between giúp đẩy logo sang trái, search sang phải */}
            <div className="container d-flex justify-content-between align-items-center">
                
                {/* NHÓM BÊN TRÁI: Logo và Menu */}
                <div className="d-flex align-items-center gap-4">
                    <h4 className="mb-0 fw-bold">Quản lý nhân sự</h4>
                    <nav className="d-flex gap-3 mt-1">
                        <a href="#" className="text-white text-decoration-none">Trang chủ</a>
                        <a href="#" className="text-white-50 text-decoration-none">Liên hệ</a>
                    </nav>
                </div>

                {/* NHÓM BÊN PHẢI: Ô tìm kiếm và nút bấm */}
                <div className="d-flex gap-2">
                    <input 
                        type="search" 
                        className="form-control" 
                        placeholder="Tìm kiếm..." 
                        style={{ width: '250px' }} 
                    />
                    <button type="button" className="btn btn-dark border border-secondary text-white">
                        Tìm
                    </button>
                </div>
                
            </div>
        </div>
    );
}

export default Header;