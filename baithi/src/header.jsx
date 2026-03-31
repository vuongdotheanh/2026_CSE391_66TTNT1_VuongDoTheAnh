import React from 'react';

function Header() {
    return(
        <div className="header">
            <div className="h-logo">
                <h3>Quản lí nhân sự</h3>
                <nav>
                    <ul>
                        <li>
                            <a href='#'>Trang chủ</a>

                        </li>
                        <li>
                            <a href='#'>Liên hệ</a>
                            </li>
                    </ul>
                </nav>
            </div>

            <div className="h-navbar">
                <input type="search" className='form-control' placeholder="Tìm kiếm..."/>
                <button type="submit" className="btn btn-dark border">Tìm</button>
            </div>

        </div>
    );
}
export default Header;
