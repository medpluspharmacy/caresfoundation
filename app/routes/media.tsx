import React from "react";
import two_volunteers from "app/assets/media/two_volunteers.svg";
import ceo_speech from "app/assets/media/ceo_speech.png";
import ceo_distributing from "app/assets/media/ceo_distributing.svg";
import volunteers from "app/assets/media/volunteers.png";
import ceo_and_staffs from "app/assets/media/ceo_and_staffs.png";

const Media = () => {
  return (
    <div className="container mx-auto px-4 grid lg:grid-cols-[350px_1fr] gap-4 py-16">
      <div>
        <div className="text-primary text-4xl font-bold">Our Media</div>
        <div className="my-5 text-lg font-poppins">
          Catch a glimpse of the impact we have made so far through a visual
          journey, showcasing our noteworthy achievements.
        </div>
        <div>
          <img src={two_volunteers} alt="Two ladies volunteering" className="object-cover" />
        </div>
      </div>
      <div className="flex justify-between flex-wrap gap-4">
        <div className="xl:w-[60%] w-[100%] 2xl:w-[68%] sm:h-[300px]">
          <img src={ceo_speech} alt="" className="h-full w-full object-fit" />
        </div>
        <div className="xl:w-[38%] w-[50%] 2xl:w-[30%] sm:h-[300px] order-1 xl:order-none">
          <img src={ceo_distributing} alt="" className="w-full h-full object-fit" />
        </div>
        <div className="xl:w-[65%] sm:h-[317px]">
          <img src={volunteers} alt="" className="w-full h-full object-fit" />
        </div>
        <div className="xl:w-[33%] w-[40%] sm:h-[300px] xl:h-[317px]">
          <img src={ceo_and_staffs} alt="" className="w-full h-full object-fit" />
        </div>
      </div>
    </div>
  );
};

export default Media;
