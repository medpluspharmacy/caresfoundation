import React from "react";
import hero_img from "~/assets/hero_img.png";
import ImageGallery from "./image_gallery.tsx";

const Hero = () => {
  return (
    <div className="py-10 sm:py-20 font-light">
      <div className="text-center flex flex-col items-center relative">
        <div className="text-5xl sm:text-6xl max-w-[645px] font-light mb-7 px-4">
          We Use donations to create new donors
        </div>
        <ImageGallery />
        <div className="relative px-4">
          <div className="max-w-[504px] relative">
            <img src={hero_img} alt="hero" className="w-full" />
            <svg
              width="45"
              height="32"
              viewBox="0 0 45 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-16 right-0"
            >
              <path
                d="M2.36133 16.0841C2.36133 24.3066 8.9254 24.4259 14.4867 18.9186C18.6014 14.8438 21.4562 8.68813 24.1318 3.60446C26.1196 -0.172315 24.456 3.10741 23.6988 5.06107C20.8985 12.2857 19.0227 19.3395 18.699 27.1071C18.5132 31.5665 20.0742 31.2185 23.4626 28.3669C29.7314 23.0911 34.3766 16.0357 40.1546 10.2576C41.573 8.83924 41.9616 8.24794 43.4615 8.99787"
                stroke="#FF0077"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <svg
            width="121"
            height="128"
            viewBox="0 0 121 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -right-60 top-0"
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
            className="absolute -left-60 top-80"
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
    </div>
  );
};

export default Hero;
