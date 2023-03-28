import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="navbar-center">
          <i class="fa-solid fa-bars"></i>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
