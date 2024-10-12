import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const BlogCard = ({ blog }) => {
  return (
    <article className="text-black group">
      <div className="relative  isolate">
        <Image
          className="w-full object-cover h-60 rounded-2xl"
          width={370}
          height={240}
          src={blog.image}
          alt={blog.title}
        />
        <div className="absolute inset-0 bg-[#03051a] bg-opacity-0 group-hover:bg-opacity-40 rounded-2xl px-[60px] py-[50px]  text-white font-bold text-sm uppercase flex items-end duration-500 transition-all">
          <div>{blog.publishAt}</div>
        </div>
      </div>
      <div className="relative isolate -translate-y-7 min-h-56">
        <div className="absolute top-0 bottom-0 right-0 left-7 bg-white rounded-s-2xl rounded-ee-2xl px-7 pt-7 pb-11 h-fit group-hover:bg-rose duration-500 transition-all group-hover:text-white">
          <span className="text-sm text-gray group-hover:text-white duration-500 transition-all block mb-6">
            {blog.category}
          </span>
          <h3 className="text-[26px] hover:underline font-bold font-space_grotesk leading-snug line-clamp-2 mb-10">
            {blog.title}
          </h3>

          <Link
            href={`/blog/${blog.id}`}
            className="h-[60px] text-sm font-bold uppercase grid place-content-center px-12 rounded-2xl   hover:bg-transparent text-nowrap transition-all duration-500 bg-rose text-white w-fit group-hover:bg-black"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};
export default BlogCard;
