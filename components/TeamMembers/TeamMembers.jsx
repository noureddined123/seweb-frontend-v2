import { teamMembers } from "@/utils/data";
import TeamMemberCard from "./TeamMemberCard";

const TeamMembers = () => {
  return (
    <div className="max-w-container mx-auto px-container pb-24 md:pb-section ">
      <header className="text-center mb-14 flex items-center justify-center flex-col">
        <div data-aos="fade-up" className="flex mb-7  items-center gap-2">
          <div className="w-5 h-[2px] bg-black"></div>
          <div className="text-sm font-bold text-blue uppercase">
            Meet With Our Specialist
          </div>
          <div className="w-5 h-[2px] bg-black"></div>
        </div>
        <h2
          data-aos="fade-up"
          className="text-4xl sm:text-5xl max-w-2xl mb-9 font-bold font-space_grotesk sm:leading-snug"
        >
          Team that Builds Ideas Driven by the Future
        </h2>
      </header>
      <div className="grid gap-20 lg:gap-8  md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};
export default TeamMembers;
