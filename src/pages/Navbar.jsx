import logo from "../assets/healthify2.png";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
    <nav className=" bg-navy h-[20%] flex justify-between items-center w-full">
      <img src={logo} className=" w-[4rem] h-[4rem] ml-32 drop-shadow-2xl" />
      <ul className="flex gap-8 text-white mr-16">
        <li className="hover:bg-light-navy rounded-md px-3 p-1 text-center hover:-translate-y-1 duration-300 font-bold">
          <NavLink className={({ isActive }) =>
                isActive ? "bg-light-navy p-1 px-2 rounded-md font-bold w-full" : undefined}  to="/">Home</NavLink>
        </li>
        <li className="hover:bg-light-navy rounded-md px-3 p-1 text-center hover:-translate-y-1 duration-300 font-bold">
        <NavLink className={({ isActive }) =>
                isActive ? "bg-light-navy p-1 px-2  rounded-md font-bold w-full" : undefined} to="/login">Login</NavLink>
        </li>
        <li className="hover:bg-light-navy rounded-md px-3 p-1 text-center hover:-translate-y-1 duration-300 font-bold">
          <NavLink className={({ isActive }) =>
                isActive ? "bg-light-navy p-1 px-2 rounded-md font-bold w-full" : undefined} to="/adminLogin">Admin Login</NavLink>
        </li>
        <li className="hover:bg-light-navy rounded-md px-3 p-1 text-center hover:-translate-y-1 duration-300 font-bold">
          <a href="#">Contact us</a>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default Navbar;
