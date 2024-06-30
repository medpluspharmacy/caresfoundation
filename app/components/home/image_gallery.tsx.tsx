import React from "react";
import gallery_one from "~/assets/gallery_one.png";
import gallery_two from "~/assets/gallery_two.png";
import gallery_three from "~/assets/gallery_three.png";
import gallery_four from "~/assets/gallery_four.png";
import Marquee from "react-fast-marquee";

const ImageGallery = () => {
  return (
    <div className="-rotate-6">
      <div className="flex mt-10 sm:mt-16 mb-12 sm:mb-20">
        <Marquee pauseOnHover={true}>
          <div className="ml-4 sm:ml-7">
            <img src={gallery_one} alt="gallery" className="w-[300px] sm:w-[450px]" />
          </div>
          <div className="ml-4 sm:ml-7">
            <img src={gallery_two} alt="gallery" className="w-[300px] sm:w-[450px]" />
          </div>
          <div className="ml-4 sm:ml-7">
            <img src={gallery_three} alt="gallery" className="w-[300px] sm:w-[450px]" />
          </div>
          <div className="ml-4 sm:ml-7">
            <img src={gallery_four} alt="gallery" className="w-[300px] sm:w-[450px]" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ImageGallery;
