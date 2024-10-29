import { NavLink } from "@remix-run/react";
import logo from "~/assets/logo.png";
import hamburger from "~/assets/hamburger.svg";
import arrowRight from "~/assets/arrow-right.svg";
import { useState } from "react";
import Button from "./button";

const nav_links = [
  { name: "About Us", slug: "/about" },
  { name: "Media", slug: "/media" },
  { name: "Initiatives", slug: "/initiatives" },
  { name: "Get Involved", slug: "/get-involve" },
  { name: "Contact Us", slug: "#contact", isInternalLink: true },
];

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="bg-white">
      <div className="container mx-auto px-4 h-[103px] flex items-center justify-between">
        <div className="flex items-center gap-7">
          <NavLink to="/">
            <img src={logo} alt="logo" className="max-w-[183px]" />
          </NavLink>
          <div className="hidden lg:flex items-center gap-3 text-xl">
            {nav_links.map((item) => (
              <NavLink
                key={item.slug}
                to={item.slug}
                className={({ isActive }) => `
     px-3 py-2 relative 
    ${
      isActive && !item?.isInternalLink
        ? "after:absolute after:left-3 after:w-1/2 after:h-[2px] after:bg-[#FF0077] after:bottom-0 text-primary"
        : ""
    }`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="hidden lg:block text-lg">
          <Button>
            Donate Now
            <img src={arrowRight} alt="arrow" />
          </Button>
        </div>
        <div onClick={handleClick} className="cursor-pointer lg:hidden">
          <img src={hamburger} alt="hamburger" />
        </div>
      </div>
      <div
        className={
          !nav
            ? "hidden"
            : "absolute top-[100px] lg:hidden left-0 w-full bg-white z-10 p-10"
        }
      >
        <ul className="container mx-auto px-4">
          {nav_links.map((item) => (
            <li key={item.slug} className="mb-6">
              <NavLink
                to={item.slug}
                className={({ isActive }) => `
     px-3 py-2 relative 
    ${
      isActive && !item?.isInternalLink
        ? "after:absolute after:left-3 after:w-1/2 after:h-[2px] after:bg-[#FF0077] after:bottom-0 text-primary"
        : ""
    }`}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
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
