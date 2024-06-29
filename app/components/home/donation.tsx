import { Link } from "@remix-run/react";
import arrowRight from "~/assets/arrow-right.svg";
import donation from "~/assets/donationimg.png";

const Donation = () => {
  return (
    <div className="max-w-6xl mx-auto p-16 flex justify-between items-end font-light bg-white rounded-[20px]">
      <div className="w-[498px] flex flex-col mb-6">
        <div className="text-6xl">Do you want to be a part of the donation chain?</div>
        <div className="text-xl font-sans my-10">
          Make your free donation and experience the pleasure of impacting lives
          every day
        </div>
        <div>
          <Link
            to=""
            className="bg-[#FF0077] font-sans text-white flex justify-center items-center gap-2.5 py-3 w-[180px]"
          >
            Donate Now
            <img src={arrowRight} alt="arrow" />
          </Link>
        </div>
      </div>
      <div className="">
        <img src={donation} alt="donation" />
      </div>
    </div>
  );
};

export default Donation;
