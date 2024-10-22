import React from "react";
import Marquee from "react-fast-marquee";
import smiling_kids from "app/assets/smiling_kids.svg";
import { ActionFunctionArgs } from "@remix-run/node";
import { ClientOnly } from "remix-utils/client-only";

export async function action({ request }: ActionFunctionArgs) {
  return null;
}

const GetInvolve = () => {
  return (
    <div className="py-10 md:py-16">
      <ClientOnly>
        {() => (
          <Marquee pauseOnHover={true}>
            {Array.from([0, 1, 2, 3]).map((_, i) => (
              <div key={i} className="flex items-center ml-6">
                <div className="text-xl sm:text-6xl">PARTNER & SPONSOR</div>
                <svg
                  width="92"
                  height="92"
                  viewBox="0 0 92 92"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.5291 1.2333C44.9468 -0.252649 47.0532 -0.252647 47.4709 1.2333L52.1624 17.9256C52.4762 19.042 53.8705 19.4156 54.7004 18.6056L67.1095 6.49546C68.2142 5.41742 70.0385 6.47065 69.6572 7.96634L65.374 24.7681C65.0875 25.8918 66.1082 26.9125 67.2319 26.626L84.0337 22.3428C85.5294 21.9615 86.5826 23.7858 85.5045 24.8905L73.3944 37.2996C72.5844 38.1295 72.958 39.5238 74.0744 39.8376L90.7667 44.5291C92.2526 44.9468 92.2526 47.0532 90.7667 47.4709L74.0744 52.1624C72.958 52.4762 72.5844 53.8705 73.3944 54.7004L85.5045 67.1095C86.5826 68.2142 85.5294 70.0385 84.0337 69.6572L67.2319 65.374C66.1082 65.0875 65.0875 66.1082 65.374 67.2319L69.6572 84.0337C70.0385 85.5294 68.2142 86.5826 67.1095 85.5045L54.7004 73.3944C53.8705 72.5844 52.4762 72.958 52.1624 74.0744L47.4709 90.7667C47.0532 92.2526 44.9468 92.2526 44.5291 90.7667L39.8376 74.0744C39.5238 72.958 38.1295 72.5844 37.2996 73.3944L24.8905 85.5045C23.7858 86.5826 21.9615 85.5294 22.3428 84.0337L26.626 67.2319C26.9125 66.1082 25.8918 65.0875 24.7681 65.374L7.96634 69.6572C6.47065 70.0385 5.41742 68.2142 6.49546 67.1095L18.6056 54.7004C19.4156 53.8705 19.042 52.4762 17.9256 52.1624L1.2333 47.4709C-0.252649 47.0532 -0.252647 44.9468 1.2333 44.5291L17.9256 39.8376C19.042 39.5238 19.4156 38.1295 18.6056 37.2996L6.49546 24.8905C5.41742 23.7858 6.47065 21.9615 7.96634 22.3428L24.7681 26.626C25.8918 26.9125 26.9125 25.8918 26.626 24.7681L22.3428 7.96634C21.9615 6.47065 23.7858 5.41742 24.8905 6.49546L37.2996 18.6056C38.1295 19.4156 39.5238 19.042 39.8376 17.9256L44.5291 1.2333Z"
                    fill="#FEB72F"
                  />
                </svg>
              </div>
            ))}
          </Marquee>
        )}
      </ClientOnly>

      <div className="mx-auto text-center font-poppins text-base md:text-xl max-w-5xl px-4 mt-5 mb-12">
        We recognize that to achieve a life-changing impact in the lives of our
        beneficiaries we cannot do it alone. We require the assistance of
        like-minded individuals and organizations to achieve our goals.
      </div>
      <div className="container mx-auto bg-white rounded-3xl flex lg:flex-row flex-col gap-5 md:gap-12 md:py-20 py-7 md:px-16 px-6">
        <div className="max-w-[456px]">
          <div className="text-4xl md:text-6xl font-normal">
            For Partnership & Sponsorships{" "}
          </div>
          <div className="font-poppins font-normal text-base md:text-xl mt-5 mb-3">
            Kindly fill out the form and we will contact you as soon as
            possible.
          </div>
          <div className="hidden lg:block">
            <img src={smiling_kids} alt="smiling kids" />
          </div>
        </div>
        <form className="w-full">
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="text-[#6C7275] block mb-2 uppercase font-bold text-xs font-poppins">
                Full name *
              </label>
              <input
                type="text"
                placeholder="First name"
                className="w-full border border-[#CBCBCB] h-10 rounded-md px-4 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="text-[#6C7275] block mb-2 uppercase font-bold text-xs font-poppins">
                Email *
              </label>
              <input
                type="text"
                placeholder="Your Email"
                className="w-full border border-[#CBCBCB] h-10 rounded-md px-4 focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div>
              <label className="text-[#6C7275] block mb-2 uppercase font-bold text-xs font-poppins">
                Phone number *
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border border-[#CBCBCB] h-10 rounded-md px-4 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="text-[#6C7275] block mb-2 uppercase font-bold text-xs font-poppins">
                Organisation
              </label>
              <input
                type="text"
                placeholder="Organisation Name"
                className="w-full border border-[#CBCBCB] h-10 rounded-md px-4 focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="text-[#6C7275] block mb-2 uppercase font-bold text-xs font-poppins">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              className="w-full border border-[#CBCBCB] rounded-md p-4 focus:outline-none"
            ></textarea>
          </div>
          <div className="mt-6">
            <button className="bg-[#FF0077] font-sans text-white flex justify-center items-center rounded-md gap-2.5 py-3 w-full md:w-[165px] mx-auto md:mx-0 md:ml-auto">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetInvolve;
