import React, { useState } from 'react';
import './style.css';
import employeesData from './data'; 

// Import các mảnh ghép (Components) vào
import Header from "./header";
import EmployeeTable from './EmpList';
import EmployeeModal from './empModal';

function App() {
  // State quản lý danh sách và trạng thái bật/tắt popup
  const [employees, setEmployees] = useState(employeesData);
  const [showModal, setShowModal] = useState(false);

  // Hàm này sẽ được truyền xuống EmployeeModal
  const handleAddEmployee = (newEmployeeData) => {
    const newEmp = {
      id: Math.max(...employees.map(e => e.id), 0) + 1,
      ...newEmployeeData,
      stt: employees.length + 1,
      age: newEmployeeData.age || 0
    };
    
    setEmployees([...employees, newEmp]); // Thêm vào mảng
    setShowModal(false); // Đóng modal
  };

  return (
    <div className="container">
      {/* Gọi Component Header */}
      <Header />

      <div className="main">
        <div className="m-start">
          <h3>Danh sách nhân sự</h3>
          {/* Nút bật công tắc hiển thị Modal */}
          <button type="button" className="btn btn-primary" onClick={() => setShowModal(true)}>
            + Thêm mới
          </button>
        </div>

        {/* Gọi Component Table và truyền mảng employees xuống cho nó vẽ */}
        <EmployeeTable employees={employees} />
      </div>

      {/* Gọi Component Modal (Chỉ hiện khi showModal là true) */}
      {showModal && (
        <EmployeeModal 
          onClose={() => setShowModal(false)} 
          onSave={handleAddEmployee} 
        />
      )}
    </div>
  );
}

export default App;