// Assignment: Project 8 (React Tailwind CSS - Day 44) - Task 3: Product Page with 6 Cards (Tailwind CSS)
import { useState } from "react";

function TailwindProductPage() {
  const [cart, setCart] = useState({});

  const toggleCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "₹2,499",
      rating: "⭐ 4.5",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "₹3,999",
      rating: "⭐ 4.8",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: "₹1,299",
      rating: "⭐ 4.3",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: "₹4,499",
      rating: "⭐ 4.7",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: "₹1,999",
      rating: "⭐ 4.4",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300",
    },
    {
      id: 6,
      name: "Camera Lens",
      price: "₹14,999",
      rating: "⭐ 4.9",
      image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=300",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Product Showcase
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const isInCart = !!cart[product.id];

          return (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col justify-between hover:shadow-lg transition"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 flex flex-col flex-grow justify-between text-left">
                <div>
                  {/* Product Name */}
                  <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>

                  {/* Price & Rating */}
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-lg font-bold text-indigo-600">{product.price}</span>
                    <span className="text-sm font-medium text-amber-500">{product.rating}</span>
                  </div>
                </div>

                {/* Button changes content on click */}
                <button
                  onClick={() => toggleCart(product.id)}
                  className={`mt-4 w-full font-medium py-2 rounded-lg transition duration-200 ${
                    isInCart
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white"
                  }`}
                >
                  {isInCart ? "Added to Cart ✓" : "Add to Cart"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TailwindProductPage;
