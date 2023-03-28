import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="navbar-center">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="contact">Contact</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
