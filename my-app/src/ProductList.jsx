import ProductItem from './ProductItem';

function ProductList({products, onStatus, onDelete}) {
  return (
    <div className="card">
      <div className="card-header  bg-dark text-white text-start">
        <h3>Danh sách sản phẩm</h3>
      </div>

      <div className="card-body">
        {products.length  === 0 ? (<p> Chưa có sản phaamr nào</p>) : (
          products.map(product => (
            <ProductItem
              key ={product.id}
              product={product}
              onStatus={onStatus}
              onDelete={onDelete}
            />
           )
          )
        )}
      </div>
    </div>
  )
}
export default ProductList;