import Link from "next/link";

const PageHeader = ({ title, hrefLabel }) => {
  return (
    <header className="relative text-white bg-black bg-cover">
      <div className="max-w-container relative z-10 min-h-[420px] px-container mx-auto flex items-center sm:justify-between justify-center gap-5 flex-col sm:flex-row">
        <div>
          <h2
            data-aos="fade-up"
            className="text-4xl md:text-5xl font-space_grotesk font-bold "
          >
            {title}
          </h2>
        </div>
        <div className="flex uppercase text-sm font-bold items-center gap-2">
          <Link
            href="/"
            className="text-[#999cbb] hover:text-rose duration-500 transition-all"
          >
            Home
          </Link>{" "}
          - <div>{hrefLabel}</div>
        </div>
      </div>
      <div className="absolute z-0 inset-0 bg-black/50"></div>
    </header>
  );
};
export default PageHeader;
