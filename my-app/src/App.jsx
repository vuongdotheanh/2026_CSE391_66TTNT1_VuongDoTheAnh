import { useState, useEffect } from 'react';
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
function App() {
  // State quản lý danh sách sản phẩm
  const [products, setProducts] = useState([]);

  // Yêu cầu: Dùng useEffect để load dữ liệu ban đầu (Chỉ chạy 1 lần khi mở app)
  useEffect(() => {
    const initialData = [
      { id: 1, name: 'Áo Thun Nam', desc: 'Áo thun chất liệu cotton, thời trang.', price: 250000, status: 'Còn hàng' },
      { id: 2, name: 'Giày Thể Thao', desc: 'Giày thể thao cao cấp, phù hợp mọi hoạt động.', price: 850000, status: 'Hết hàng' }
    ];
    setProducts(initialData);
  }, []);

  // Hàm xử lý Thêm
  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Hàm xử lý Xóa
  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Hàm xử lý Đổi trạng thái
  const handleToggleStatus = (id) => {
    setProducts(products.map(product => 
      product.id === id 
        ? { ...product, status: product.status === 'Còn hàng' ? 'Hết hàng' : 'Còn hàng' } 
        : product
    ));
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '800px' }}>
      <h2 className="text-center mb-4 fw-bold">Quản Lý Sản Phẩm</h2>
      
      {/* Tuân thủ thứ tự trên ảnh: Form ở trên hay List ở trên tùy ý, theo thiết kế ảnh là List ở trên, Form ở dưới */}
      <ProductList 
        products={products} 
        onDelete={handleDelete} 
        onToggleStatus={handleToggleStatus} 
      />
      
      <ProductForm onAddProduct={handleAddProduct} />
    </div>
  );
}

export default App;