import React, { useState } from "react";
import children_smiling from "app/assets/initiatives/children_smiling.png";
import foundation_at_work from "app/assets/initiatives/foundation_at_work.png";
import foundation_at_work2 from "app/assets/initiatives/foundation_at_work2.png";
import ceo_with_reporters from "app/assets/initiatives/ceo_with_reporters.png";

const Initiatives = () => {
  const [currInitiative, setCurrInitiative] = useState(0);
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 relative">
        <div className="text-primary text-3xl md:text-4xl mb-6 font-bold">
          Initiatives
        </div>
        <div className="xl:absolute max-w-[328px] font-bold text-lg border-l-[0.5px] border-l-[#BDBDBD] mb-7 xl:mb-0">
          <div
            onClick={() => setCurrInitiative(0)}
            className={`${
              currInitiative === 0
                ? "text-black border-l-[3px] border-l-primary"
                : "text-[#BDBDBD]"
            } pl-4 cursor-pointer`}
          >
            Love in the Slums: Empowering the Sogunro Community
          </div>
          <div
            onClick={() => setCurrInitiative(1)}
            className={`${
              currInitiative === 1
                ? "text-black border-l-[3px] border-l-primary"
                : "text-[#BDBDBD]"
            } my-3 pl-4 cursor-pointer`}
          >
            Hope4CP Project: Empowering Nigerian Children with Cerebral Palsy
          </div>
          <div
            onClick={() => setCurrInitiative(2)}
            className={`${
              currInitiative === 2
                ? "text-black border-l-[3px] border-l-primary"
                : "text-[#BDBDBD]"
            } pl-4 cursor-pointer`}
          >
            Oyo State Senior Citizens Outreach: Empowering Retirees Through
            Healthcare
          </div>
        </div>
        <div
          className={`flex flex-col-reverse lg:flex-row lg:items-center gap-9 ${
            currInitiative === 2 ? "block" : "hidden"
          }`}
        >
          <div className="font-poppins lg:w-2/5">
            <div className="mb-4">
              The Medplus Cares Foundation was glad to partner with the First
              Lady of Oyo State and the Omituntun for Life Foundation, for the
              impactful initiative "Senior Citizens Outreach." This initiative
              was designed to provide essential healthcare services to retirees.
            </div>
            <div>
              Medplus Cares Foundation offered free medical check-ups,
              medication, and valuable health advice. Through the Senior
              Citizens Outreach, we successfully supported and empowered 292
              retirees, providing them with essential healthcare services and
              valuable health advice. This support aimed to ensure that they
              received the necessary healthcare services and guidance to
              maintain their well-being in their retirement years.
            </div>
          </div>
          <div className="lg:w-3/5">
            <img
              src={ceo_with_reporters}
              alt="ceo with reporters"
              className="rounded-lg w-full"
            />
          </div>
        </div>
        <div className={`${currInitiative === 1 ? "block" : "hidden"}`}>
          <div className="flex lg:flex-row flex-col-reverse lg:items-end gap-4 mb-12">
            <div className="font-poppins lg:w-2/5">
              The Medplus Cares Foundation was proud to partner with Tosin Ajose
              and Angel 4 Life Foundation for the
              <span className="font-bold">"Hope4CP Project."</span> This
              initiative was conceived to support 40 Nigerian children living
              with Cerebral Palsy, coinciding with Cerebral Palsy Awareness
              Month. The project focused on providing tailored monetary,
              medical, and wellness interventions to make a meaningful impact on
              the lives of these children and their primary caregivers.
            </div>
            <div className="lg:w-3/5">
              <img
                src={foundation_at_work}
                alt="foundation at work"
                className="rounded-lg w-full"
              />
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-4">
            <div>
              <img
                src={foundation_at_work2}
                alt="foundation at work"
                className="rounded-lg"
              />
            </div>
            <div className="font-poppins lg:w-3/5">
              <div className="mb-4">
                As part of the Hope4CP Project, Medplus Cares Foundation
                provided the 40 beneficiaries with medical vouchers valued at
                30,000 naira each, to be exclusively used at Medplus Pharmacy.
                This support aimed to alleviate the financial burden associated
                with accessing essential medications, ensuring that the children
                receive the necessary medical care.
              </div>
              <div>
                As we continue to advocate for inclusive care and support for
                individuals with special needs, we strive to create a more
                inclusive and compassionate society for all. Together, let's
                foster hope and empowerment for children with Cerebral Palsy in
                Nigeria.
              </div>
            </div>
          </div>
        </div>

        <div className={`${currInitiative === 0 ? "block" : "hidden"}`}>
          <div className="flex xl:justify-end">
            <img
              src={children_smiling}
              alt="children smiling"
              className="md:w-3/5"
            />
          </div>
          <div className="md:w-2/5 font-poppins mb-6 mt-4 xl:mt-0">
            The Medplus Cares Foundation, in collaboration with Slum2School, was
            proud to present the "Love in the Slums" outreach initiative in the
            vibrant Sogunro community. This comprehensive program addressed the
            community's pressing needs by providing medical aid and empowering
            its residents.
          </div>
          <div>
            <div className="font-poppins md:w-1/4 mb-4 md:mb-12 lg:mb-[95px] relative">
              The Sogunro outreach initiative focused on the following key
              objectives:
              <svg
                width="67"
                height="67"
                viewBox="0 0 67 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-8 xl:top-9 hidden lg:block"
              >
                <path
                  d="M2.11899 0.405554C1.29057 0.405554 0.618994 1.07713 0.618994 1.90555C0.618994 2.73398 1.29057 3.40555 2.11899 3.40555L2.11899 0.405554ZM66.2594 55.88C66.7975 55.2501 66.7231 54.3033 66.0932 53.7652L55.8289 44.9963C55.199 44.4582 54.2522 44.5326 53.7141 45.1625C53.176 45.7923 53.2504 46.7392 53.8802 47.2773L63.0041 55.0718L55.2095 64.1957C54.6714 64.8255 54.7458 65.7724 55.3757 66.3105C56.0056 66.8486 56.9524 66.7742 57.4905 66.1443L66.2594 55.88ZM2.11899 3.40555C6.08859 3.40555 8.78944 4.2702 10.7041 5.6311C12.6193 6.99242 13.9093 8.96479 14.8459 11.4831C15.7904 14.0226 16.3413 17.0211 16.8334 20.345C17.3181 23.6184 17.7477 27.2294 18.4611 30.7648C19.8963 37.877 22.5545 45.1258 29.5809 50.1637C36.5676 55.1733 47.5831 57.7881 65.2364 56.4011L65.0014 53.4103C47.6547 54.7732 37.4828 52.138 31.329 47.7256C25.2147 43.3417 22.7792 36.9967 21.4019 30.1714C20.709 26.738 20.3028 23.2943 19.8011 19.9056C19.3068 16.5674 18.7211 13.2963 17.6577 10.4374C16.5866 7.55727 14.9976 5.00229 12.4421 3.18587C9.88606 1.36904 6.52441 0.405554 2.11899 0.405554L2.11899 3.40555Z"
                  fill="#FF0077"
                />
              </svg>
            </div>
            <div className="flex md:flex-row flex-col gap-6">
              <div className="font-poppins">
                <div className="mb-3">
                  Through the Love in the Slums outreach initiative in Sogunro,
                  we have been able to impact the lives of 420 beneficiaries.
                </div>
                <div>
                  With our comprehensive services, we strive to make a positive
                  change and uplift the community, ensuring everyone has access
                  to quality healthcare and education.
                </div>
              </div>
              <div className="lg:flex gap-2 capitalize">
                <div className="relative lg:-top-16 border border-black bg-[#9FFFCB] rounded-2xl py-12 px-8">
                  <div className="mb-2 text-xl font-bold">
                    Provision of school supplies
                  </div>
                  <div className="font-poppins">
                    Education is a powerful tool for transformation. Therefore,
                    we supported the children in the Sogunro community by
                    providing them with essential school supplies.
                  </div>
                </div>
                <div className="relative -top-6 md:-top-10 lg:-top-32 border border-black bg-[#F9C74F] rounded-2xl py-12 px-8">
                  <div className="mb-2 text-xl font-bold">
                    Free medical checkups & comprehensive medical aid
                  </div>
                  <div className="font-poppins">
                    We offered free medical checkups to the residents of
                    Sogunro. Our team of healthcare experts provided
                    comprehensive checkups and offered necessary advice for
                    further treatment.
                  </div>
                </div>
                <div className="relative -top-12 md:-top-20 lg:-top-60 border border-black bg-[#ABC4FF] rounded-2xl py-12 px-8">
                  <div className="mb-2 text-xl font-bold">
                    Distribution of medicines
                  </div>
                  <div className="font-poppins">
                    We provided essential medicines to the residents with the
                    sole aim of alleviating the financial burden associated with
                    healthcare which enabled the community to lead healthier
                    lives.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initiatives;
