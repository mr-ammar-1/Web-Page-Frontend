import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import MADServiceProcess from "./components/MADServiceProcess";
import TechandFram from "./components/TechandFram";
import OurLatestProjects from "./components/OurLatestProjects";
import BlogsAndArticles from "./components/BlogsAndArticles";
import ReadyToStart from "./components/ReadyToStart";
import Footer from "./components/Footer";

export default function Home() {
  return (
  <div>

   <Navbar/>
   <Header/>
   <Section1/>
   <Section2/>
   <Section3/>
   <Section4/>
   <Section5/>
   <Section6/>
   <MADServiceProcess/>
   <TechandFram/>
   <OurLatestProjects/>
   <BlogsAndArticles/>
   <ReadyToStart/>
   <Footer/>
   

  </div>
  );
}
