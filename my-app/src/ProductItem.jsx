function ProductItem({name, onStatus, onDelete}) {
    return (
        <div>
        <div >
            <h5 className={mb-1 }>{product.name}</h5>
            <p className="mb-1">{product.desc}</p>
            <p className="mb-1 fw-bold">Giá: {product.price}</p>
            <p className="mb-1 small">
                Trạng thái:{''}
                <span className={product.status ==='Còn hàng' ? 'text-success' : 'text-danger'}>
                    {product.status}
                </span>
            </p>
        </div>

        {/* các sự kiện */}
        <div>
            <button className="btn btn-warning btn-sm me-2" onClick={() => onStatus(product.id)}>
                Đánh dấu {product.status ==="Còn hàng" ? 'Hết hàng' : 'Còn hàng'}
            </button>

            <button className="btn btn-danger btn-sm" onClick={() => onDelete(product.id)}>Xóa</button>
        </div>
        </div>
    )
}
export default ProductIteam;