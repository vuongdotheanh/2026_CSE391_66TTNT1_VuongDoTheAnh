import React from 'react';

function EmployeeTable({employeeA }) {
    return(
        <div className="">
            <table id='container-table' className='table table-border table-hover '>
                <thead className='table-head'>
                    <tr>
                        <th>STT</th>
                        <th>họ tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        
                        <th>Vị trí</th>
                        <th>hành động</th>
                    </tr>
                </thead>

                <tbody className='table-body'>
                    {employeeA?.map((emp, index) =>
                    (<tr key={index}>
                        <td>{emp.stt}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.phone}</td>
                        <td>{emp.position}</td>
                        <td>
                            <button className='btn btn-warning btn-sm me-2'>Sửa</button>
                            <button className='btn btn-danger btn-sm'>Xóa</button>
                        </td>
                    </tr>   )) 
                }
                </tbody>
            </table>
        </div>
    )
};
export default EmployeeTable;