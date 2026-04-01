import Header from './compoment/Header';
import {useState} from 'react';
import EmpTable from './compoment/EmpTable';
import employeeA from './data';
import EmpForm from './compoment/EmpForm';

function App(){
  const [employeeList, setEmployList] = useState(employeeA);
  const [showModal, setShowModal] = useState(false);

  const handleAdd = (newEmp)=>{
    const newEMP = {
      stt: employeeList.length +1,
      ...newEmp
    };
    setEmployList([...employeeList, newEMP]);
    setShowModal(false); // đóng modal
  } 
  return (
    <div className="">
      <Header />
      <div className="main">
        <div className="m-head justify-content-between d-flex mb-4">
          <h3>Danh sách nhân sự</h3>
          <button className='btn btn-primary text-white' onClick={ () => setShowModal(true)} > + Thêm mới</button>
        </div>
        <EmpTable employee={(employeeList)} />
      </div>

      {/* component modal */}
      {showModal && (
        <EmpForm onClose ={ () => setShowModal(false)}
        onSave={handleAdd} />
      )}
    </div>

  )
}
export default App;