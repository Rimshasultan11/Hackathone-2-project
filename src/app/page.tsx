import Image from "next/image";
import Navbar from "./components/Home/Navbar";
import Hero from "./components/Home/Hero";
import Brandes from "./components/Home/Brandes";
import Products from "./components/Home/Products";
import PopProduct from "./components/Home/PopProduct";
import Join from "./components/Home/Join";
import Banner from "./components/Home/Banner";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Brandes/>
    <Products/>
    <PopProduct/>
    <Join/>
    <Banner/>
   <Footer/>
   </div>
  );
}
