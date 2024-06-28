import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

export default function Home() {
  return (
  <div>

   <Navbar/>
   <Header/>
   <Section1/>
   <Section2/>

  </div>
  );
}
