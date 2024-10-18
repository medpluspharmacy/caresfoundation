import { NavLink } from "@remix-run/react";
import logo from "~/assets/logo.svg";
import hamburger from "~/assets/hamburger.svg";
import arrowRight from "~/assets/arrow-right.svg";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 h-[103px] flex items-center justify-between">
        <div className="flex items-center gap-5">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
          <div className="hidden md:flex items-center gap-1 text-lg">
            <NavLink
              to="/about"
              className={({ isActive }) => `
     px-3 py-2 relative 
    ${
      isActive
        ? "after:absolute after:left-3 after:w-1/2 after:h-[2px] after:bg-[#FF0077] after:bottom-0"
        : ""
    }`}
            >
              About Us
            </NavLink>
            <NavLink
              to="/media"
              className={({ isActive }) => `
     px-3 py-2 relative 
    ${
      isActive
        ? "after:absolute after:left-3 after:w-1/2 after:h-[2px] after:bg-[#FF0077] after:bottom-0"
        : ""
    }`}
            >
              Media
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) => `
     px-3 py-2 relative `}
            >
              Initiatives
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) => `
     px-3 py-2 relative `}
            >
              Get Involved
            </NavLink>
          </div>
        </div>
        <div className="hidden md:block">
          <NavLink
            to="https://paystack.com/pay/eflxw4vy00"
            className="bg-[#FF0077] font-sans text-white flex justify-center items-center gap-2.5 py-3 w-[180px] rounded"
          >
            Donate Now
            <img src={arrowRight} alt="arrow" />
          </NavLink>
        </div>
        <div onClick={handleClick} className="cursor-pointer md:hidden">
          <img src={hamburger} alt="hamburger" />
        </div>
      </div>
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-[100px] md:hidden left-0 w-full bg-white z-10 p-10"
        }
      >
        <ul className="">
          <li className="mb-6">
            <NavLink
              to="/about"
              className={({ isActive }) => `
     px-3 py-2 relative 
    ${
      isActive
        ? "after:absolute after:left-3 after:w-1/2 after:h-[2px] after:bg-[#FF0077] after:bottom-0"
        : ""
    }`}
            >
              About Us
            </NavLink>
          </li>
          <li className="mb-6">
            <NavLink
              to="/media"
              className={({ isActive }) => `
     px-3 py-2 relative 
    ${
      isActive
        ? "after:absolute after:left-3 after:w-1/2 after:h-[2px] after:bg-[#FF0077] after:bottom-0"
        : ""
    }`}
            >
              Media
            </NavLink>
          </li>
          <li className="mb-6">
            <NavLink
              to="/"
              className={({ isActive }) => `
     px-3 py-2 relative `}
            >
              Initiatives
            </NavLink>
          </li>
          <li className="mb-6">
            <NavLink
              to="/"
              className={({ isActive }) => `
     px-3 py-2 relative `}
            >
              Get Involved
            </NavLink>
          </li>
          <li>
            <NavLink
              className="bg-[#FF0077] font-sans text-white w-full py-3 flex gap-3 justify-center items-center rounded"
              to="https://paystack.com/pay/eflxw4vy00"
            >
              Donate Now
              <img src={arrowRight} alt="arrow" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
