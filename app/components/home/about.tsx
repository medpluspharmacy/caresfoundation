import React from "react";
import health from "~/assets/health.svg";
import empowerment from "~/assets/empowerment.svg";
import education from "~/assets/education.svg";
import shield from "~/assets/shield.svg";

const About = () => {
  return (
    <div className="text-center py-20 font-light">
      <div className="text-4xl mb-4">What we do</div>
      <div className="text-2xl w-[809px] mx-auto text-[#484848] font-sans">
        At Medplus Cares Foundation, we work towards enriching and empowering
        individuals by providing access to healthcare, education, and
        skill-building programs. Our goal is to promote self-sufficiency, secure
        sustainable income generation opportunities, and cultivate a bright
        future for all.
      </div>
      <div className="mt-20 py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-6xl w-[426px] mx-auto font-light mb-10">
            Get to know about our focus
          </div>
          <div className="text-left grid grid-cols-4 gap-4">
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
            <div className="bg-[#9FFFCB] border-[1.77px] border-black rounded-[8.85px] px-4 py-6">
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
