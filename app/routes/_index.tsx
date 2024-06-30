import type { MetaFunction } from "@remix-run/node";
import Construction from "~/components/common/construction";
import Footer from "~/components/common/footer";
import Navbar from "~/components/common/navbar";
import About from "~/components/home/about";
import Donation from "~/components/home/donation";
import Hero from "~/components/home/hero";
import ImageGallery from "~/components/home/image_gallery.tsx";

export const meta: MetaFunction = () => {
  return [
    { title: "Medplus Cares Foundation" },
    { name: "description", content: "Medplus Cares Foundation" },
  ];
};

export default function Index() {
  return (
    <div className="bg-[#F1F1F1] overflow-x-hidden">
      <Navbar />
      <Construction />
      <Hero />
      <About />
      <Donation />
      <Footer />
    </div>
  );
}
