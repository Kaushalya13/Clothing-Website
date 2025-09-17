import Brands from "@/sections/Brands";
import Categories from "@/sections/Categories";
import FeaturedProducts from "@/sections/FeaturedProducts";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import PromoSection from "@/sections/PromoSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <PromoSection />
      <Brands />
      <Footer />
    </>
  );
}
