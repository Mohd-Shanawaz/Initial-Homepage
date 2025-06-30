import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="head">
      <div className="logo">
        <h1>V - Mart</h1>
      </div>
      <div id="links">
        <Link to="/">Home</Link>
        <Link to="/Electronics">Electronics</Link>
        <Link to="/Mens">Men's</Link>
        <Link to="/Womens">Women's</Link>
        <Link to="/Kids">Kid's</Link>
      </div>
      <div id="opt">
        <i class="bi bi-cart4"></i>
        <i class="bi bi-person-circle"></i>
        <button>Log Out</button>
      </div>
    </div>
  );
}
export default Navbar;
