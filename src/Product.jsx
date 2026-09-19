function Product() {
  const product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics"
  };

  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
    </div>
  );
}

export default Product;
