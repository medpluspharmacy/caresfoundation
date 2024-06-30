import React from "react";
import health from "~/assets/health.svg";
import arrowRight from "~/assets/arrow-right.svg";
import { Link } from "@remix-run/react";

const About = () => {
  return (
    <div className="text-center pb-10 sm:pb-20 font-light">
      <div className="text-4xl mb-4">What we do</div>
      <div className="text-lg sm:text-2xl max-w-[809px] mx-auto text-[#484848] font-sans relative px-4">
        At Medplus Cares Foundation, we work towards enriching and empowering
        individuals by providing access to healthcare, education, and
        skill-building programs. Our goal is to promote self-sufficiency, secure
        sustainable income generation opportunities, and cultivate a bright
        future for all.
        <svg
          width="45"
          height="33"
          viewBox="0 0 45 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -right-20 -bottom-6"
        >
          <path
            d="M2 16.2147C2 24.4372 8.56408 24.5565 14.1253 19.0492C18.2401 14.9744 21.0949 8.81874 23.7705 3.73508C25.7583 -0.0416999 24.0947 3.23803 23.3374 5.19169C20.5372 12.4163 18.6614 19.4701 18.3377 27.2378C18.1519 31.6971 19.7129 31.3491 23.1012 28.4975C29.3701 23.2218 34.0152 16.1663 39.7933 10.3883C41.2117 8.96985 41.6003 8.37855 43.1002 9.12849"
            stroke="#FF0077"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <svg
          width="45"
          height="33"
          viewBox="0 0 45 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-5 -left-20"
        >
          <path
            d="M2 16.2147C2 24.4372 8.56408 24.5565 14.1253 19.0492C18.2401 14.9744 21.0949 8.81874 23.7705 3.73508C25.7583 -0.0416999 24.0947 3.23803 23.3374 5.19169C20.5372 12.4163 18.6614 19.4701 18.3377 27.2378C18.1519 31.6971 19.7129 31.3491 23.1012 28.4975C29.3701 23.2218 34.0152 16.1663 39.7933 10.3883C41.2117 8.96985 41.6003 8.37855 43.1002 9.12849"
            stroke="#FFB899"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="mt-7">
        <Link
          to="https://paystack.com/pay/caresfoundation"
          className="bg-[#FF0077] font-sans text-white flex justify-center items-center gap-2.5 py-3 mx-auto w-[180px]"
        >
          Donate Now
          <img src={arrowRight} alt="arrow" />
        </Link>
      </div>
      <div className="mt-20 py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-5xl sm:text-6xl max-w-[426px] mx-auto font-light mb-10">
            Get to know about our focus
          </div>
          <div className="text-left grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#9FFFCB] border-[1.77px] border-black rounded-[8.85px] px-4 py-6">
              <img src={health} alt="health" />
              <div className="py-5 text-3xl">Health</div>
              <div className="font-sans">
                Our organisation strives to establish and maintain affordable
                primary healthcare by organising community outreaches,
                advocating for health-related policies, and implementing
                initiatives that promote a healthier lifestyle for our
                beneficiaries.
              </div>
            </div>
            <div className="bg-[#F9C74F] border-[1.77px] border-black rounded-[8.85px] px-4 py-6">
              <img src={health} alt="health" />
              <div className="py-5 text-3xl">Empowerment</div>
              <div className="font-sans">
                We are dedicated to closing the gender inequality gap by
                creating opportunities that uplift and improve the lives of
                women in our society.
              </div>
            </div>
            <div className="bg-[#FF9698] border-[1.77px] border-black rounded-[8.85px] px-4 py-6">
              <img src={health} alt="health" />
              <div className="py-5 text-3xl">Education</div>
              <div className="font-sans">
                We strongly believe that literacy is a catalyst for positive
                change. Therefore, we advocate for basic education for every
                child by providing scholarships and educational resources.
              </div>
            </div>
            <div className="bg-[#ABC4FF] border-[1.77px] border-black rounded-[8.85px] px-4 py-6">
              <img src={health} alt="health" />
              <div className="py-5 text-3xl">Welfare</div>
              <div className="font-sans">
                We deeply care about the well-being of our society and
                acknowledge that some individuals struggle to meet their basic
                needs. In response, we offer free medication, health check-ups,
                food items, clothing, and financial assistance to the
                communities we serve.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
