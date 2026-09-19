import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", border: "1px solid black", marginBottom: "15px" }}>
      <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
      <Link to="/products" style={{ marginRight: "15px" }}>Products</Link>
      <Link to="/reports" style={{ marginRight: "15px" }}>Reports</Link>
      <Link to="/about" style={{ marginRight: "15px" }}>About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
