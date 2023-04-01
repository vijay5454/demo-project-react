import { NavLink, Outlet, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SideBar from "./Sidebar";
import { useState } from "react";

const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const changeSidebar = () => {
    setSidebarActive((value) => {
      if (value) {
        return false;
      } else {
        return true;
      }
    });
  };
  return (
    <>
      <nav className="Navbar">
        <div className="navbar-center">
          <button className="btn" onClick={changeSidebar}>
            <FaBars />
          </button>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      </nav>
      <SideBar active={sidebarActive} />
    </>
  );
};

export default Navbar;
