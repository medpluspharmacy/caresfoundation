import { Link } from "@remix-run/react";
import logo from "~/assets/logo.svg";
import arrowRight from "~/assets/arrow-right.svg";

const Navbar = () => {
  return (
    <nav className="">
      <div className="container mx-auto px-4 h-[103px] flex items-center justify-between">
        <div className="flex items-center gap-5">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex items-center gap-1 text-lg">
            <Link to="/" className="p-3">Partners</Link>
            <Link to="/" className="p-3">Community</Link>
            <Link to="/" className="p-3">Sponsors</Link>
            <Link to="/" className="p-3">Contact us</Link>
          </div>
        </div>
        <div>
          <Link to="https://paystack.com/pay/caresfoundation" className="bg-[#FF0077] font-sans text-white flex justify-center items-center gap-2.5 py-3 w-[180px]">
            Donate Now
            <img src={arrowRight} alt="arrow" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
