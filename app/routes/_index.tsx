import type { LinksFunction, MetaFunction } from "@remix-run/node";
import Construction from "~/components/common/construction";
import Footer from "~/components/common/footer";
import Navbar from "~/components/common/navbar";
import About from "~/components/home/about";
import Donation from "~/components/home/donation";
import Hero from "~/components/home/hero";
import ImageGallery from "~/components/home/image_gallery.tsx";
import OurFocus from "~/components/home/our_focus";

export const meta: MetaFunction = () => {
  return [
    { title: "Medplus Cares Foundation" },
    { name: "description", content: "Medplus Cares Foundation" },
  ];
};

export const links: LinksFunction = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <OurFocus />
      <Donation />
    </>
  );
}
