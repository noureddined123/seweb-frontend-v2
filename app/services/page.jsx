import PageHeader from "@/components/PageHeading/PageHeader";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/Service/ServiceCard";

import { services } from "@/utils/data";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <>
      <Header />
      <section>
        <PageHeader title="Diensten" hrefLabel="Diensten" />

        <div className="max-w-container px-container mx-auto py-24 md:py-section">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link 
              href={`/services/${service.slug}`} 
              key={service.id}>
                <ServiceCard service={service} />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default ServicesPage;

export const metadata = {
  title: "Diensten - Seweb",
  description: "Seweb Diensten",
};
