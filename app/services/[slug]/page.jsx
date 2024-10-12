export const runtime = 'edge';

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeading/PageHeader";
import ServiceSidebar from "../_components/ServiceSidebar";
import ServiceFeed from "../_components/ServiceFeed";
import { services } from "@/utils/data";

const ServiceDetails = ({params}) => {


  const { slug } = params;
  const service = services.find((service) => service.slug.toString() === slug);

  return (
    <>
      <Header />
      <section>
        <PageHeader title={service.title} hrefLabel="Services Details" />
        <div className="max-w-container px-container mx-auto py-24 md:py-section">
          <section className="flex flex-col-reverse lg:flex-row gap-14">
            <div className="basis-[370px]">
              <ServiceSidebar service={service} />
            </div>
            <div className="flex-1">
              <ServiceFeed service={service} />
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ServiceDetails;
