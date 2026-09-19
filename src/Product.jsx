function Product({ product }) {
  const defaultProduct = {
    id: "PROD202",
    name: "Dell XPS 15 Laptop",
    price: 75000,
    brand: "Dell",
    category: "Electronics",
    inStock: true
  };

  const data = product || defaultProduct;

  return (
    <div className="card product-card">
      <h2>📦 Product Details</h2>
      <div className="details">
        <p><strong>Product ID:</strong> {data.id}</p>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Price:</strong> ₹{data.price.toLocaleString()}</p>
        <p><strong>Brand:</strong> {data.brand}</p>
        <p><strong>Category:</strong> {data.category}</p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={data.inStock ? "badge in-stock" : "badge out-of-stock"}>
            {data.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Product;
