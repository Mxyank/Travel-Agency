import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Travelling booking system</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button onClick={() => {navigate("/register")}} className="navButton">Register</button>
            <button onClick={() => {navigate("/login")}} className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
