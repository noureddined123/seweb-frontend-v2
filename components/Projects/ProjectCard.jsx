import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  return (
    <article className="overflow-hidden group rounded-2xl">
      <div className="relative isolate">
        <Image
          className="w-full object-cover h-[480px]"
          src={project.image}
          width={370}
          height={480}
          alt={project.title}
        />
        <div className="absolute opacity-100 sm:opacity-0 group-hover:opacity-100 duration-500 transition-all text-white inset-0 bg-gradient-to-t from-blue to-transparent p-7 flex items-end">
          <Link
            href={`projects/${project.id}`}
            className="flex items-center gap-4 opacity-100 sm:opacity-0 sm:translate-y-full translate-y-0 group-hover:translate-y-0  group-hover:opacity-100 duration-500 transition-all will-change-transform"
          >
            <div className="size-12 shrink-0 rounded-full bg-white grid place-items-center text-purple text-lg">
              <FaArrowRightLong />
            </div>
            <div>
              <div className="text-sm uppercase text-ash font-bold">
                {project.category}
              </div>
              <h5 className="text-2xl lg:text-xl line-clamp-1  font-bold font-space_grotesk text-white">
                {project.title}
              </h5>
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};
export default ProjectCard;
