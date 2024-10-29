import React from "react";
import what_we_do from "~/assets/what_we_do.png";
import what_we_do_sm from "~/assets/what_we_do_sm.svg";
import arrowRight from "~/assets/arrow-right.svg";
import { Link } from "@remix-run/react";
import Button from "../common/button";

const About = () => {
  return (
    <div className="py-10 sm:py-20 font-light bg-white">
      <div className="container mx-auto px-4 flex md:flex-row flex-col gap-6 items-center">
        <div className="text-center md:text-left">
          <div className="md:text-4xl text-2xl mb-4 capitalize">What we do</div>
          <div className="text-sm sm:text-xl max-w-[809px] text-[#484848] font-poppins relative">
            At Medplus Cares Foundation, we work towards enriching and
            empowering individuals by providing access to healthcare, education,
            and skill-building programs.
            <br /> Our goal is to promote self-sufficiency, secure sustainable
            income generation opportunities, and cultivate a bright future for
            all.
          </div>
          <div className="mt-6 flex justify-center md:justify-start">
            <Button>
              Donate Now
              <img src={arrowRight} alt="arrow" />
            </Button>
          </div>
        </div>
        <div>
          <img src={what_we_do} alt="what we do" className="hidden md:block" />
          <img src={what_we_do_sm} alt="what we do" className="md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default About;
