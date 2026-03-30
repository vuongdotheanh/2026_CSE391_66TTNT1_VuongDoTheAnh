import {useState} from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

function App() {
  const [products, setProducts] = useState([]);

  // xử  lí thêm
  const handleAddProduct = (newProducts) => {
    setProducts([...products, newProducts]);
  }
  // xử lí xóa
  const handleDelete = (id) => {
    setProducts([...products.filter(product => product.id !== id)]);
  }
  // tthay đổi trnaj thái
  const handleStatus = (id) => {
    setProducts(products.map(product => product.id === id ? {...product, status: product.status === 'Còn hàng' ? 'Hết hàng' : 'Còn hàng' }
      : product
  ));
  };
  return (
    <div className="container mt-4" style={{maxWidth: '1200px'}}>
      
      <ProductList
        products={products}
        onStatus={handleStatus}
        onDelete={handleDelete}
      />
      <ProductForm onAddProduct={handleAddProduct} />
    </div>
  )
}
export default App;