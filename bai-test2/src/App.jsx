import Header from './compoment/Header';
import EmployeeTable from './compoment/EmployeeTable'
import employeeA from './data'
import React, {useState} from 'react';
import EmployeeForm from './compoment/EmployeeForm';

function App() {

  // vẽ render ra màn hình
  const [employeeList, setEmployeeList] = useState(employeeA);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = (newEmployees) => {
    const newEmp = {
      stt: employeeList.length + 1,
      ...newEmployees
    };
    setEmployeeList([...employeeList, newEmp]);
    setShowModal(false); // đómgd modal
  };

  return (
    <div className='app  bg-light'>
      <Header />
      <div className="container body   mt-4 mb-4">
        <div className="d-flex justify-content-between mb-4">
        <h3>Danh sách nhân sự</h3>
        <button className='btn btn-primary' onClick={() => setShowModal(true)}>+ Thêm mới</button></div>
        <div className="card">
          <EmployeeTable employeeA={(employeeList)}/>
        </div>
      </div>
      

      {/* // gọi component modal */}
      {showModal && (
        <EmployeeForm onClose = { () => setShowModal(false)}
          onSave={handleAdd} />
      ) }
    </div>
);
}
export default App;