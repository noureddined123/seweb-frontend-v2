import PageHeader from "@/components/PageHeading/PageHeader";
import Header from "@/components/Header/Header";


import Footer from "@/components/Footer";
import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Process from "@/components/About/Process";

const AboutPage = () => {
  return (
    <>
      <Header />
      <section>
        <PageHeader title="Over Ons" hrefLabel="over ons" />
        <div>
          <About />
          <Process />
          <Benefits />


        </div>
      </section>
      <Footer />
    </>
  );
};
export default AboutPage;

export const metadata = {
  title: "Over Ons - Seweb",
  description: "Over Ons",
};
