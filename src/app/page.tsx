import { Banner } from "./sections/Banner";
import { NavigationBar } from "./sections/NavigationBar";
import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { ProductShowcase } from "./sections/ProductShowcase";

export default function Home() {
  return (
    <>
   {/* <Banner/> */}
   <NavigationBar/>
   <Hero/>
   <Features/>
   <ProductShowcase/>
   </>
  );
}
