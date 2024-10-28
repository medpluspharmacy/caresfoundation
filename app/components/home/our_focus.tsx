import React from "react";
import health from "~/assets/health.svg";
import empowerment from "~/assets/empowerment.svg";
import education from "~/assets/education.svg";
import welfare from "~/assets/welfare.svg";

const OurFocus = () => {
  return (
    <div className="py-20 bg-[#FFFEF6] text-center">
      <div className="container mx-auto px-4">
        <div className="text-2xl sm:text-6xl max-w-[162px] md:max-w-[426px] mx-auto font-normal mb-10">
          Get to know about our focus
        </div>
        <div className="text-left grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#9FFFCB] border-[1.77px] border-black rounded-[8.85px] px-4 py-6">
            <img
              src={health}
              alt="health"
              className="text-right ml-auto -mb-5"
            />
            <div className="pb-5 text-3xl">Health</div>
            <div className="font-poppins text-sm/[26px]">
              Our organisation strives to establish and maintain affordable
              primary healthcare by organising community outreaches, advocating
              for health-related policies, and implementing initiatives that
              promote a healthier lifestyle for our beneficiaries.
            </div>
          </div>
          <div className="bg-[#F9C74F] border-[1.77px] border-black rounded-[8.85px] px-4 py-6">
            <img
              src={empowerment}
              alt="empowerment"
              className="text-right ml-auto -mb-5"
            />
            <div className="pb-5 text-3xl">Empowerment</div>
            <div className="font-poppins text-sm/[26px]">
              We are dedicated to closing the gender inequality gap by creating
              opportunities that uplift and improve the lives of women in our
              society.
            </div>
          </div>
          <div className="bg-[#FF9698] border-[1.77px] border-black rounded-[8.85px] px-4 py-6">
            <img
              src={education}
              alt="education"
              className="text-right ml-auto -mb-5"
            />
            <div className="pb-5 text-3xl">Education</div>
            <div className="font-poppins text-sm/[26px]">
              We strongly believe that literacy is a catalyst for positive
              change. Therefore, we advocate for basic education for every child
              by providing scholarships and educational resources.
            </div>
          </div>
          <div className="bg-[#ABC4FF] border-[1.77px] border-black rounded-[8.85px] px-4 py-6">
            <img
              src={welfare}
              alt="welfare"
              className="text-right ml-auto -mb-5"
            />
            <div className="pb-5 text-3xl">Welfare</div>
            <div className="font-poppins text-sm/[26px]">
              We deeply care about the well-being of our society and acknowledge
              that some individuals struggle to meet their basic needs. In
              response, we offer free medication, health check-ups, food items,
              clothing, and financial assistance to the communities we serve.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFocus;
