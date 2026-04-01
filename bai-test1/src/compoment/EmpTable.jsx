import React from 'react';
function EmpTable({ employee }) {
    return (
        <div className="card">
            <table className='table table-border table-hover'>
                <thead className='table-head'>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Vị trí</th>
                        <th>Hành động</th>
                    </tr>
                </thead>

                <tbody className='table-body'>
                    {employee?.map((emp, index) =>
                    (
                        <tr key={index}>
                            <td>{emp.stt}</td>
                            <td>{emp.name}</td>
                            <td>{emp.email}</td>
                            <td>{emp.phone}</td>
                            <td>{emp.position}</td>
                            <td>
                                <button className='btn btn-warning btn-sm me-2'>
                                    Sửa
                                </button>
                                <button className = 'btn btn-danger btn-sm'>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};
export default EmpTable;