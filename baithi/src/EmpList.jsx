import React from 'react';

// Nhận "employees" từ App.jsx truyền xuống thông qua ({ employees })
function EmployeeTable({ employees }) {
  return (
    <div id="table-container" className="mt-4">
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>STT</th>
            <th>Họ tên</th>
            <th>Tuổi</th>
            <th>Email</th>
            <th>Số ĐT</th>
            <th>Vị trí</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.stt}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.position}</td>
              <td>
                <button className="btn btn-sm btn-primary me-2">Sửa</button>
                <button className="btn btn-sm btn-danger">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;