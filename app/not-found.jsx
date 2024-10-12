import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import PageHeader from "@/components/PageHeading/PageHeader";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <section>
        <PageHeader title="Error" hrefLabel="Error" />
        <div className="py-24 flex justify-center items-center flex-col md:py-section max-w-container px-container mx-auto ">
          <Image
            width={800}
            height={800}
            alt="404"
            src="/error/404.png"
            className="w-full max-w-[800px] flex-auto mb-16 md:mb-20 2xl:mb-[90px]"
          />
          <div className="text-center text-black text-lg font-medium mb-10 md:mb-[60px]">
            De pagina die u zoekt, bestaat niet. Mogelijk is deze verplaatst of verwijderd.
          </div>
          <Button
            href="/"
            className="bg-rose text-white hover:border-rose hover:bg-transparent hover:text-rose"
          >
            Terug naar homepagina
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default NotFoundPage;

export const metadata = {
  title: "Not Found - Meetup",
  description: "404 page",
};
