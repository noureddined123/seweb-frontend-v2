import Footer from "@/components/Footer";
import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Blog from "@/components/Blog/Blog";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Service from "@/components/Service/Service";;
import Customers from "@/components/Customers/Customers";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Service />
        <Benefits />
        <Customers />
        <Blog />
        <Footer />
      </main>
    </>
  );
};
