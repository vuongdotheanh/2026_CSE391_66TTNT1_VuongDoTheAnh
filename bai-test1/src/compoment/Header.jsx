import React from 'react';

function Header () {
    return (
        <div className="bg-dark text-white ">
            <div className="container d-flex justify-content-between">
                <div className="align-items-center gap-4 d-flex">
                    <h4>Quản lí nhân sự</h4>
                    <nav className=' d-flex gap-3'>
                        <a herf='#' className='text-white text-decoration-none  gap-3'>Trang chủ</a>
                        <a href="#" className='text-secondary text-decoration-none'>Liên hệ</a>
                    </nav>
                </div>

                <div className="d-flex gap-2 mb-2 mt-2">
                    <input type="search" className='form-control' placeholder='Tìm kiếm...' style={{ width: '250px'}}/>
                    <button type='submit' className='btn btn-dark border border-secondary text-white'>Tìm</button>
                </div>
            </div>
        </div>
    )
}
export default Header;