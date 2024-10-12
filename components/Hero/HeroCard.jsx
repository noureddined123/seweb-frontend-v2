import Button from "@/components/Button";
import VideoButtonWrapper from "@/components/VideoButtonWrapper";

const HeroCard = ({ hero }) => {
  const heroImageStyle = {
    backgroundImage: `url(${hero.cover})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover ",
  };

  return (
    <article
      style={heroImageStyle}
      className="relative md:mt-20  bg-cover  isolate"
    >
      <div className="absolute z-10 inset-0 bg-light-purple/40"></div>
      <div className=" flex items-center">
        <div className="max-w-container relative min-h-[820px] flex items-center text-white w-full mx-auto px-container z-10">
          <div className="md:mt-10 2xl:mt-20">
            <span className="block text-sm text-[#e5e5e5] uppercase font-bold mb-7">
            SEO & Webdesign - seweb
            </span>
            <h1 className="font-bold leading-snug sm:leading-snug md:leading-snug lg:leading-tight text-5xl sm:text-6xl md:text-7xl font-space_grotesk lg:text-[90px] max-w-4xl mb-12">
              {hero.title}
            </h1>
            <div className="">
              <VideoButtonWrapper>
                <Button className="bg-rose text-white  hover:bg-white hover:text-rose hover:border-white">
                  Bekijk alle Diensten
                </Button>
              </VideoButtonWrapper>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
export default HeroCard;
