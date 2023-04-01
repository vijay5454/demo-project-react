import { NavLink, Outlet, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SideBar from "./Sidebar";

const Navbar = () => {
  return (
    <>
      <nav className="Navbar">
        <div className="navbar-center">
          <button className="btn">
            <FaBars />
          </button>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      </nav>
      <SideBar />
    </>
  );
};

export default Navbar;
