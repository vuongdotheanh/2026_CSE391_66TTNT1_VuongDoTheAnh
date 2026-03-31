import React from 'react';

function Main({ employee }) {
    return (
        <div id="table-container" className="mt-4">
            <table className="table table-bordered">
                <thead className="table-light">
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>tuổi</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Vị trí</th>
                        <th>Hành động</th>
                    </tr>
                </thead>


                <tbody className="table-light">
                    {employee.map((emp, index) => (

                        < tr key={index} >
                            <td>${emp.stt}</td>
                            <td>${emp.name}</td>
                            <td>${emp.age}</td>
                            <td>${emp.email}</td>
                            <td>${emp.phone}</td>
                            <td>${emp.position}</td>

                            <td>
                                <button class="btn btn-sm btn-primary">Sửa</button>
                                <button class="btn btn-sm btn-danger">Xóa</button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>

            </table>


        </div >
    )
}
export default Main;