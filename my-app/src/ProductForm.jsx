import {useState} from 'react';

function ProductForm({ onAddProduct}) {

  const [name, setName] = useState('');
  const[desc, setDesc] = useState('');
  const [price, setPrice] = useState('');

  const [status, setStatus] = useState('Còn hàng');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate không đc để trống
    if( !name || !desc || !price) {
      setError('Vui lòng điền đầy đủ thông tin');
      return;
    }
    // validate tên không quá 30 kí tự
    if(name.length > 30){
      setError('Tên sản phẩm không được quá 30 kí tự');
      return;
    }

    // validate giá phỉa lớn hơn không

    if(Number(price) <0){
      setError('Giá phải lớn hơn không');
      return ;
    }


    // nếud dẫ chạy ok hết là hợp lệ thì reset lỗi
    setError('');

    // render thôi
   onAddProduct({
      id: Date.now() ,
      name,
      desc,
      price: Number(price),
      status
    });

    // reset form
    setName('');
    setDesc('');
    setPrice('');
    setStatus('Còn hàng');
  }
  return(
    <div className="card mt-4">
      {error && <div className ='alert alert-danger' >{error}</div>}
      
      <div className="card-header">
        <h1>Quản lý sản phẩm</h1>
      </div>

      <div className="card-body border-top">
        <form onSubmit= {handleSubmit}  >
          <h5 className="bg-success text-white px-3 py-2 text-start">Thêm sản phẩm</h5>
          <div className="form-group mb-3 text-start">
            <label className="form-label">Tên sản phẩm</label>
            <input type="text" 
            value={name}
            placeholder ="Nhập tên sản phẩm"
            className="form-control"
            onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="form-group mb-3 text-start">
            <label className="form-label">Mô tả</label>
            <textarea
            placeholder="Nhập mô tả"
            className='form-control'
            value={desc}
            onChange = {(e) => setDesc(e.target.value)}></textarea>
            </div>

            <div className="form-group mb-3 text-start">
              <label className="form-label">Giá</label>
              <input type="number"
              className='form-control'
              value={price}
              placeholder="Nhập giá sản phẩm"
              onChange={(e) => setPrice(e.target.value)} />
            </div>

            <div className="form-group text-start mb-3">
              
              <label className="form-label">Trạng thái</label>
              <select className='form-select' value={status}
               onChange={(e) => setStatus(e.target.value)}>
                <option value="Còn hàng">Còn hàng</option>
                <option value="Hết hàng">Hết hàng</option>
               </select>
            </div>

            <button type="submit" className='btn btn-success mb-3 form-control'>Thêm sản phẩm</button>
        </form>

    </div>
    </div>
  )
}
export default ProductForm;