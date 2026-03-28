import ProductItem from './ProductItem';

function ProductList({ products, onStatus, onDelete }) {
  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-dark text-white">
        Danh Sách Sản Phẩm
      </div>
      <div className="card-body">
        {products.length === 0 ? (
          <p className="text-center text-muted">Chưa có sản phẩm nào.</p>
        ) : (
          products.map(product => (
            <ProductItem 
              key={product.id} 
              product={product} 
              onStatus={onStatus}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;