export const runtime = 'edge';

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeading/PageHeader";
import BlogSideBar from "../_components/BlogSideBar";
import { IoShareSocialSharp } from "react-icons/io5";
import { blogsData } from "@/utils/data";
import Link from "next/link";
import Tag from "@/components/Tag";
import Image from "next/image";

const BlogDetails = ({params}) => {

  const { id } = params;
  const blog = blogsData.find((blog) => blog.id.toString() === id);


  return (
    <>
      <Header />
      <section>
        <PageHeader title="Blog Details" hrefLabel="Blog Details" />
        <div>
          <div className="py-24 md:py-section max-w-container px-container mx-auto">
            <div className="flex flex-col gap-12 lg:flex-row">
              <div className="flex-1 mb-14">
                <header>
                  <Image
                    width={740}
                    src={blog.image}
                    height={450}
                    alt={blog.title}
                    className="w-full mb-10 md:mb-12 h-auto"
                  />
                  <h2 className="text-4xl font-space_grotesk font-bold leading-snug mb-6">
                    {blog.title}
                  </h2>
                  <div className="text-sm uppercase font-bold text-rose mb-8">
                    {blog.publishAt}, {blog.author}
                  </div>
                </header>

                <article>
                  <div className="mb-14">
                    <p className="text-gray leading-normal max-w-3xl">
                      With worldwide annual spend on digital advertising
                      surpassing $325 billion, it’s no surprise that different
                      approaches to online marketing are becoming available. One
                      of these new approaches is performance marketing or
                      digital performance marketing. Keep reading to learn all
                      about performance marketing, from how it works to how it
                      compares to digital marketing. Plus, get insight into the
                      benefits and risks of performance marketing and how it can
                      affect your company’s long-term success and profitability.
                      Performance marketing is an approach to digital marketing
                      or advertising where businesses only pay when a specific
                      result occurs. This result could be a new lead, sale, or
                      other outcome agreed upon by the advertiser and business.
                      Performance marketing involves channels such as affiliate
                      marketing, online advertising.
                    </p>
                  </div>
            
                  <div className="flex mb-14 md:mb-16 items-center  gap-5 border-light-gray justify-between">
                    <div className="flex items-center gap-3">
                      <h5 className="hidden sm:block text-[22px] font-bold">
                        Posted in:
                      </h5>
                      <div className="flex flex-wrap items-center gap-2">
                        <Tag href="#">Development</Tag>
                        <Tag href="#">Design</Tag>

                        <Tag href="#">Tech</Tag>
                      </div>
                    </div>
                    <Link
                      className="size-[38px] shrink-0 rounded-full bg-black text-white hover:bg-blue duration-500 transition-all grid place-content-center"
                      href="#"
                    >
                      <IoShareSocialSharp className="text-2xl" />
                    </Link>
                  </div>
                </article>
              </div>
              <div className="basis-[370px]">
                <BlogSideBar />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default BlogDetails;

export const metadata = {
  title: "Title of the blog",
  description: "Blog details page",
};
