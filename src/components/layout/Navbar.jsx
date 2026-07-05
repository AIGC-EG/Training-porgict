import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav style={{ padding: "20px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/products">Products</Link> |{" "}

      {isAuthenticated ? (
        <>
          <Link to="/profile">Profile</Link> |{" "}

          {user?.role === "admin" && (
            <>
              <Link to="/dashboard">Dashboard</Link> |{" "}
            </>
          )}

          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;