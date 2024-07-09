import { Link } from "@remix-run/react";
import arrowRight from "~/assets/arrow-right.svg";
import donation from "~/assets/donationimg.png";

const Donation = () => {
  return (
    <div className="max-w-6xl mx-4 xl:mx-auto px-6 sm:px-16 py-10 md:pt-32 md:pb-20 flex justify-between items-end font-light bg-white rounded-[20px]">
      <div className="w-[498px] flex flex-col md:mb-6">
        <div className="text-5xl sm:text-6xl">
          Do you want to be a part of the donation chain?
        </div>
        <div className="text-xl font-sans my-10">
          Make your free donation and experience the pleasure of impacting lives
          every day
        </div>
        <div>
          <Link
            to="https://paystack.com/pay/eflxw4vy00"
            className="bg-[#FF0077] font-sans text-white flex justify-center items-center gap-2.5 py-3 md:w-[180px]"
          >
            Donate Now
            <img src={arrowRight} alt="arrow" />
          </Link>
        </div>
      </div>
      <div className="relative hidden md:block">
        <img src={donation} alt="donation" className="relative z-20" />
        <svg
          width="121"
          height="128"
          viewBox="0 0 121 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-16 right-5"
        >
          <path
            d="M118.371 26.5232C121.86 22.5668 121.51 16.4721 117.14 13.5164C103.546 4.32069 87.2119 -0.188922 70.6551 0.850093C50.9021 2.08967 32.4505 11.1253 19.3596 25.9693C6.26859 40.8133 -0.389454 60.2497 0.850129 80.0027C1.88914 96.5596 8.40543 112.202 19.2284 124.54C22.7072 128.505 28.7979 128.091 32.2871 124.135C35.7763 120.178 35.3188 114.184 32.0181 110.069C24.9072 101.204 20.6372 90.3015 19.9158 78.8063C18.9935 64.1098 23.9472 49.6489 33.687 38.6048C43.4269 27.5607 57.155 20.838 71.8515 19.9157C83.3467 19.1944 94.6978 22.0679 104.382 28.0147C108.878 30.7751 114.882 30.4797 118.371 26.5232Z"
            fill="#FFB899"
          />
        </svg>

        <svg
          width="72"
          height="61"
          viewBox="0 0 72 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -left-4 -bottom-5 z-10"
        >
          <rect
            x="-5"
            y="45.178"
            width="82.9288"
            height="25.9153"
            rx="12.9576"
            transform="rotate(-37.2341 -5 45.178)"
            fill="#38B000"
          />
        </svg>
      </div>
    </div>
  );
};

export default Donation;
