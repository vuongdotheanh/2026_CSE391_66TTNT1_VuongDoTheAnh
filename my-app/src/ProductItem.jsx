function ProductItem({product, onStatus, onDelete}) {
    return (
        <div className="d-flex justify-content-between align-items-center  border-bottom pb-2">
            <div className="">
                <h5 className="mb-1 text-start">{product.name}</h5>
                <p className="mb-1 text-start">{product.desc}</p>
                <p className="mb-1 text-start fw-bold">Giá: {product.price.toLocaleString()}đ</p>
                <p className="mb-1 text-start">
                    Trạng thái: {''}
                    <span className={product.status === 'Còn hàng' ? 'text-success' : 'text-danger'}>
                    {product.status}
                    </span>
                </p>
            </div>

            {/* button */}
            <div className="">
                <button className="btn btn-warning btn-sm me-2" onClick={() => onStatus(product.id)}>
                    Đánh dấu {product.status ==='Còn hàng' ? 'Hết hàng' : 'Còn hàng'}
                </button>

                <button className="btn btn-danger btn-sm" onClick={() => onDelete(product.id)}>Xóa</button>
            </div>
        </div>
    )
}
export default ProductItem;