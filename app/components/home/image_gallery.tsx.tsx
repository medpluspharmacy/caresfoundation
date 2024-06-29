import React from "react";
import gallery_one from "~/assets/gallery_one.png";
import gallery_two from "~/assets/gallery_two.png";
import gallery_three from "~/assets/gallery_three.png";
import gallery_four from "~/assets/gallery_four.png";

const ImageGallery = () => {
  return (
    <div className="flex -rotate-6">
      <div className="transform rotate-6">
        <img src={gallery_one} alt="gallery" />
      </div>
      <div className="transform rotate-6">
        <img src={gallery_two} alt="gallery" />
      </div>
      <div className="transform rotate-6">
        <img src={gallery_three} alt="gallery" />
      </div>
      <div className="transform rotate-6">
        <img src={gallery_four} alt="gallery" />
      </div>
    </div>
  );
};

export default ImageGallery;
