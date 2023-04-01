import { NavLink } from "react-router-dom";

const SideBar = ({ active }) => {
  return (
    <aside className={`sidebar ${active ? "show-sidebar" : ""}`}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="about">About</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </aside>
  );
};

export default SideBar;
