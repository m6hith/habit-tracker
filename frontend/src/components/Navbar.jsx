import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <h1>Habit Tracker</h1>
      <button className="primary-btn" onClick={logout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
