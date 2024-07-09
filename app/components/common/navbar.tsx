import { Link } from "@remix-run/react";
import logo from "~/assets/logo.svg";
import hamburger from "~/assets/hamburger.svg";
import arrowRight from "~/assets/arrow-right.svg";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleClick = () => setNav(!nav);
  return (
    <nav className="">
      <div className="container mx-auto px-4 h-[103px] flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="hidden md:flex items-center gap-1 text-lg">
            <Link to="/" className="p-3">
              Partners
            </Link>
            <Link to="/" className="p-3">
              Community
            </Link>
            <Link to="/" className="p-3">
              Sponsors
            </Link>
            <Link to="/" className="p-3">
              Contact us
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Link
            to="https://paystack.com/pay/eflxw4vy00"
            className="bg-[#FF0077] font-sans text-white flex justify-center items-center gap-2.5 py-3 w-[180px]"
          >
            Donate Now
            <img src={arrowRight} alt="arrow" />
          </Link>
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
            <Link to="/">Partners</Link>
          </li>
          <li className="mb-6">
            <Link to="/">Community</Link>
          </li>
          <li className="mb-6">
            <Link to="/about">Sponsors</Link>
          </li>
          <li className="mb-6">
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link
              className="bg-[#FF0077] font-sans text-white w-full py-3 flex gap-3 justify-center items-center"
              to="https://paystack.com/pay/eflxw4vy00"
            >
              Donate Now
              <img src={arrowRight} alt="arrow" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
