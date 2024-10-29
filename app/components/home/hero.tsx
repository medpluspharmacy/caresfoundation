import React from "react";
import ImageGallery from "./image_gallery.tsx";

const Hero = () => {
  return (
    <div className="py-10 sm:py-20 font-light">
      <div className="text-center flex flex-col items-center relative">
        <div className="text-5xl sm:text-6xl max-w-[645px] font-light mb-7 px-4">
          We Use donations to create new donors
        </div>
        <ImageGallery />
      </div>
    </div>
  );
};

export default Hero;
