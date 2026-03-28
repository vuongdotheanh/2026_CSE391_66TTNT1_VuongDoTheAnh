import { useState } from 'react';

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('Còn hàng');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Chặn hành vi load lại trang của Form

    // 1. Validate: Không được để trống
    if (!name || !desc || !price) {
      setError('Vui lòng nhập đầy đủ các trường thông tin!');
      return;
    }
    // 2. Validate: Tên không quá 30 kí tự
    if (name.length > 30) {
      setError('Tên sản phẩm không được vượt quá 30 kí tự!');
      return;
    }
    // 3. Validate: Giá không âm
    if (Number(price) < 0) {
      setError('Giá sản phẩm không được là số âm!');
      return;
    }

    // Nếu qua hết cửa kiểm duyệt thì xóa lỗi và tạo dữ liệu mới
    setError('');
    onAddProduct({
      id: Date.now(), // Tạo ID duy nhất bằng thời gian hiện tại
      name,
      desc,
      price: Number(price),
      status
    });

    // Thêm xong thì Reset form cho sạch sẽ
    setName('');
    setDesc('');
    setPrice('');
    setStatus('Còn hàng');
  };

  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-success text-white">Thêm Sản Phẩm Mới</div>
      <div className="card-body">
        {/* Hiển thị lỗi nếu có */}
        {error && <div className="alert alert-danger">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Tên Sản Phẩm</label>
            <input type="text" className="form-control" placeholder="Nhập tên sản phẩm" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Mô Tả</label>
            <textarea className="form-control" placeholder="Nhập mô tả sản phẩm" rows="3" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Giá</label>
            <input type="number" className="form-control" placeholder="Nhập giá sản phẩm" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Trạng Thái</label>
            <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="Còn hàng">Còn hàng</option>
              <option value="Hết hàng">Hết hàng</option>
            </select>
          </div>
          <button type="submit" className="btn btn-success w-100">Thêm Sản Phẩm</button>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;