import { useState } from "react";

function ProductStateObject() {
  const [isNewProduct, setIsNewProduct] = useState(false);

  // State object
  const [product, setProduct] = useState({
    id: 1,
    name: "Laptop",
    price: 55000,
    category: "Electronics",
  });

  const toggleProduct = () => {
    if (!isNewProduct) {
      setProduct({
        id: 2,
        name: "Smartphone",
        price: 30000,
        category: "Mobile",
      });
      setIsNewProduct(true);
    } else {
      setProduct({
        id: 1,
        name: "Laptop",
        price: 55000,
        category: "Electronics",
      });
      setIsNewProduct(false);
    }
  };

  return (
    <div>
      <h3>2. Product Information (State Object)</h3>
      <p>Product ID: {product.id}</p>
      <p>Product Name: {product.name}</p>
      <p>Price: ₹{product.price}</p>
      <p>Category: {product.category}</p>
      <button onClick={toggleProduct}>
        {isNewProduct ? "Switch back to Laptop" : "Switch to Smartphone"}
      </button>
    </div>
  );
}

export default ProductStateObject;
