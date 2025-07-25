import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const username = localStorage.getItem("username"); // Get username from localStorage

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username"); // Clear username on logout
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      <h3 style={styles.logo}>MyApp</h3>
      <div style={styles.right}>
        {isLoggedIn ? (
          <>
            <span style={styles.username}>Hello, {username}</span>
            <Link to="/dashboard" style={styles.link}>
              Dashboard
            </Link>
            <button onClick={handleLogout} style={styles.logoutButton}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>
              Login
            </Link>
            <Link to="/signup" style={styles.link}>
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    margin: 0,
    fontWeight: "bold",
  },
  right: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    marginRight: "15px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  username: {
    marginRight: "20px",
    fontWeight: "500",
    color: "#ffc107",
  },
  logoutButton: {
    backgroundColor: "#ff4d4f",
    border: "none",
    color: "#fff",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "4px",
  },
};

export default Navbar;
