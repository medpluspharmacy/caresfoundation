import { Link } from "@remix-run/react";
import logo from "~/assets/logo.svg";
import whatsapp from "~/assets/whatsapp.svg";

const Footer = () => {
  return (
    <footer className="bg-white mt-20 py-6 sm:py-0">
      <div className="container mx-auto px-4 sm:h-[103px] flex flex-col md:flex-row gap-2 sm:items-center justify-between">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div>
          <Link to="" className="flex items-center gap-4 text-xl underline">
            Speak to our agent via whatsapp
            <img src={whatsapp} alt="arrow" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
