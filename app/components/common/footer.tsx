import { Link } from "@remix-run/react";
import logo from "~/assets/logo.svg";
import instagram from "~/assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="md:bg-white pt-6 sm:pt-20 rounded-t-[140px]">
      <div className="">
        <div className="container mx-auto px-4 flex gap-4 md:flex-row flex-col justify-center items-center md:justify-between">
          <div className="text-4xl lg:text-7xl bg-dark bg-clip-text text-transparent text-center">
            I want to Volunteer
          </div>
          <div className="md:max-w-[438px] text-center md:text-right">
            <div className="text-sm lg:text-lg font-poppins">
              Be a part of the Medplus Cares Community by joining us for our
              outreaches and campaigns.
            </div>
            <div className="mt-6">
              <Link
                to="https://paystack.com/pay/eflxw4vy00"
                className="bg-[#FF0077] font-sans text-white flex justify-center items-center gap-2.5 py-3 w-[165px] mx-auto md:mx-0 md:ml-auto rounded">
                Send Request
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[3px] md:w-4/5 w-[90%] bg-primary ml-auto mt-7 lg:mt-14 mb-8 lg:mb-24"></div>
        <div className="text-[#BDBDBD] container mx-auto px-4 flex md:flex-row flex-col-reverse gap-6 justify-between">
          <div>
            <div className="text-black mb-5 lg:mb-9 text-base lg:text-4xl">Contact us</div>
            <div className="text-sm lg:text-lg font-poppins mb-3 md:mb-5">
              <span>Phone Number: </span>
              <a href="tel:+23408059397504">0805 939 7504</a>
            </div>
            <div className="text-sm lg:text-lg font-poppins">
              <span>Email Address: </span>
              <a href="mailto:info@medpluscaresfoundation.com">
                info@medpluscaresfoundation.com
              </a>
            </div>
          </div>
          <div className="flex justify-between md:justify-normal gap-12 max-w-[550px] text-sm lg:text-lg">
            <div>
              <div className="text-base lg:text-4xl text-black mb-3 lg:mb-5">Navigation</div>
              <div className="font-poppins grid gap-3">
                <Link to="/" className="block">
                  About Us
                </Link>
                <Link to="/" className="block">
                  Media
                </Link>
                <Link to="/" className="block">
                  Initiatives
                </Link>
                <Link to="/" className="block">
                  Get Involved
                </Link>
                <Link to="/" className="block">
                  Contact us
                </Link>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-6">
              <div>
                <div className="text-base lg:text-4xl text-black mb-3 lg:mb-5">Location</div>
                <div className="font-poppins capitalize max-w-[156px]">
                  45 saka tinubu Victoria Island, Lagos, nigeria.
                </div>
              </div>
              <div>
                <div className="text-base lg:text-4xl text-black mb-3 lg:mb-5">Socials</div>
                <div className="font-poppins">
                  <a href="/" className="flex items-center gap-3">
                    <img src={instagram} alt="instagram" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[3px] border-t-[#D3D1D1] py-9 mt-16">
          <div className="container mx-auto px-4 ">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
