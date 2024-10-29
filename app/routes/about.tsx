import React from "react";
import media_gallery from "app/assets/about/media_gallery.svg";
import media_gallery_one from "app/assets/about/media_gallery_one.svg";
import Donation from "~/components/home/donation";

const About = () => {
  return (
    <div className="py-16 text-center md:text-left">
      <div className="container mx-auto px-4">
        <div className="text-primary text-3xl md:text-4xl mb-6 font-bold">
          Who we are
        </div>
        <div className="max-w-5xl text-sm md:text-lg font-poppins">
          <div>
            The Medplus Cares Foundation was officially launched on November 5,
            2023, as the Founder's Legacy Project by Mrs Joke Bakare, the
            esteemed CEO/MD of Medplus Limited. This philanthropic endeavor,
            unveiled during the grand commemoration of Medplus's 30th
            anniversary, embodies Mrs. Joke Bakare's unwavering vision to
            revolutionize healthcare accessibility for all and champion the
            empowerment of women in fulfilling their aspirations.
          </div>
          <div className="my-5">
            Medplus Cares Foundation is founded on a firm dedication to creating
            a measurable impact in the lives of individuals, with a particular
            focus on women, children, and special needs individuals. We are
            committed to enhancing and empowering them through health,
            education, and skill development, fostering self-sufficiency, and
            ensuring a sustainable source of income throughout their lifetime.
          </div>
          <div>
            Our foundation strongly aligns with the United Nations' Sustainable
            Development Goals, advocating for a better world. We concentrate our
            efforts on addressing significant challenges, including poverty
            alleviation, empowering women, improving healthcare, promoting
            quality education, advancing gender equality, and reducing
            disparities.
          </div>
        </div>
      </div>
      <div className="md:leftsided_wrapper my-10">
        <img src={media_gallery_one} alt="" />
      </div>
      <div className="container mx-auto px-4 mb-10">
        <div className="text-primary text-3xl md:text-4xl mb-6">
          Why do this
        </div>
        <div className="max-w-5xl text-sm md:text-lg font-poppins">
          We believe in creating the change we want to see in the world. So we
          will play our part towards improving health, particularly mother and
          child, reducing gender inequality, and providing quality education and
          skills to underprivileged groups to enable them to make a sustainable
          living.
        </div>
      </div>
      <div>
        <img src={media_gallery} alt="" />
      </div>
      <div className="md:hidden">
        <Donation />
      </div>
    </div>
  );
};

export default About;
