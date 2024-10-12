import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import PageHeader from "@/components/PageHeading/PageHeader";
import Button from "@/components/Button";
import Link from "next/link";
import FAQ from "@/components/FAQ/FAQ";

const ContactPage = () => {
  return (
    <>
      <Header />
      <section>
        <PageHeader title="Contact" hrefLabel="contact" />

        <div className="max-w-container px-container mx-auto py-20 md:py-section">
          <div className="grid gap-20  lg:grid-cols-2 mb-20 md:mb-20">
            <div>
              <div className="mb-9">
                <h2
                  data-aos="fade-up"
                  className="text-dark mb-6 text-4xl md:text-5xl font-bold font-space_grotesk"
                >
                  Neem Contact Met Ons Op
                </h2>
                <p className="leading-loose text-gray ">
                  We horen graag van u! Vul het contactformulier in of stuur ons een bericht,
                  en we nemen zo snel mogelijk contact met u op.
                </p>
              </div>
              <div>
                <h5 className="text-rose font-bold font-space_grotesk text-2xl mb-6">
                  Contact Info
                </h5>
                <div className="mb-9 flex flex-col gap-5">

                  <div>
                    <h6 className="font-bold mb-1 text-lg text-black">Phone</h6>
                    <div className="text-gray">
                      +316 18 12 46 19
                    </div>
                  </div>
                  <div>
                    <h6 className="font-bold mb-1 text-lg text-black">Email</h6>
                    <div className="text-gray">
                      info@seweb.nl
                    </div>
                  </div>
                </div>

                <Link
                  target="_blank"
                  className="text-lg font-bold text-rose tracking-[6px] hover:underline"
                  href="http://www.seweb.nl"
                >
                  www.seweb.nl
                </Link>
              </div>
            </div>
            <div>
              <form className="bg-sky py-10 p-5  sm:p-10 md:p-16 xl:p-[75px] rounded-2xl">
                <header className="mb-10">
                  <h3
                    data-aos="fade-up"
                    className="text-dark mb-2 text-3xl sm:text-4xl font-bold font-space_grotesk"
                  >
                    Heeft u nog vragen?
                  </h3>
                  <p data-aos="fade-up" className="text-sm text-gray ">
                    Uw e-mailadres wordt niet gepubliceerd. Verplichte velden zijn gemarkeerd met *
                  </p>
                </header>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-col md:flex-row gap-5">
                    <input
                      required
                      type="text"
                      placeholder="Naam*"
                      className="bg-white text-gray w-full focus-visible:outline-blue placeholder:text-gray rounded-2xl  py-5 px-8"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email*"
                      className="bg-white text-gray w-full focus-visible:outline-blue placeholder:text-gray rounded-2xl  py-5 px-8"
                    />
                  </div>
                  <input
                    required
                    type="text"
                    placeholder="Uw Website"
                    className="bg-white text-gray w-full focus-visible:outline-blue placeholder:text-gray rounded-2xl  py-5 px-8"
                  />
                  <textarea
                    required
                    placeholder="Bericht*"
                    className="bg-white text-gray w-full focus-visible:outline-blue h-36 placeholder:text-gray rounded-2xl  py-5 px-8"
                  />
                  <Button className="bg-rose text-white hover:border-rose hover:bg-transparent hover:text-rose">
                    {" "}
                    Verstuur Bericht
                  </Button>
                </div>
              </form>
            </div>

          </div>


        </div>
      </section>
      <FAQ />
      <Footer />
    </>
  );
};
export default ContactPage;