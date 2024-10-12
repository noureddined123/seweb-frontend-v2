import { blogsData } from "@/utils/data";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className="py-24 md:py-section max-w-container px-container  mx-auto">
      <header className="text-center px-container text-black flex items-center justify-center flex-col mb-14 md:mb-16">
        <div
          data-aos="fade-up"
          className="flex text-rose mb-5 items-center gap-2 "
        >
          <div className="">{"//"}</div>
          <div className="text-sm font-bold  uppercase">Lees onze nieuwste blogs</div>
        </div>
        <h2
          data-aos="fade-up"
          className="text-4xl sm:text-5xl max-w-2xl mb-9 font-bold font-space_grotesk sm:leading-snug"
        >
          Recente Blogs & Nieuws
        </h2>
      </header>
      <div className="grid gap-8 md:gap-7 md:grid-cols-2 lg:grid-cols-3">
        {blogsData.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};
export default Blog;
