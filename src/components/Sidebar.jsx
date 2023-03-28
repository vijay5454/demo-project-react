import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </div>
  );
};

export default SideBar;
