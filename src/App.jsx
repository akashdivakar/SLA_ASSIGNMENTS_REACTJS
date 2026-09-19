import Student from "./Student";
import Product from "./Product";
import Nested from "./Nested";
import "./App.css";

function App() {
  // Custom student data (optional prop example)
  const customStudent = {
    id: "STU102",
    name: "Akash",
    age: 22,
    course: "Full Stack Development",
    email: "akash@example.com",
    city: "Chennai"
  };

  // Custom product data (optional prop example)
  const customProduct = {
    id: "PROD303",
    name: "MacBook Pro M3",
    price: 169900,
    brand: "Apple",
    category: "Laptops",
    inStock: true
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Components Demo</h1>
        <p>Student, Product, and Nested Components</p>
      </header>

      <main>
        <div className="components-grid">
          {/* 1. Student Component with default data */}
          <Student />

          {/* 1b. Student Component with custom props */}
          <Student student={customStudent} />

          {/* 2. Product Component with default data */}
          <Product />

          {/* 2b. Product Component with custom props */}
          <Product product={customProduct} />
        </div>

        {/* 3. Nested Component */}
        <div className="nested-section">
          <Nested />
        </div>
      </main>
    </div>
  );
}

export default App;