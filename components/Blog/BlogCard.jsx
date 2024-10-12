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
        <div className="absolute inset-0  px-5 flex items-end justify-end">
          <div className="px-3 rounded-2xl py-2 text-sm font-bold uppercase  bg-black text-white group-hover:bg-rose duration-500 transition-all translate-y-1/2">
            <div>{blog.day}</div>
            <div>{blog.month}</div>
          </div>
        </div>
      </div>
      <div className=" pt-8">
        <Link href={`/blog/${blog.id}`}>
          <span className="text-sm text-dim-gray   block mb-6">
            By seweb {blog.category}
          </span>
          <h3 className="text-[26px] hover:underline font-bold font-space_grotesk leading-snug line-clamp-2 mb-10">
            {blog.title}
          </h3>
          <div className="flex group-hover:text-rose duration-500 transition-all items-center gap-3 text-dim-gray">
            <span className="uppercase hover:underline text-sm font-bold">
              Lees Verder
            </span>
            <FaArrowRightLong className="text-lg will-change-transform duration-500 transition-all group-hover:translate-x-3" />
          </div>
        </Link>
      </div>
    </article>
  );
};
export default BlogCard;
