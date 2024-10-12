"use client";

import { process, services } from "@/utils/data";

const Process = () => {
    return (
        <div className="py-20  md:py-section bg-sky bg-cover bg-center bg-no-repeat">
            <div className="max-w-container mx-auto px-container">
                <header className="text-center text-black flex items-center justify-center flex-col mb-28">
                    <div
                        data-aos="fade-up"
                        className="text-rose mb-5 font-bold  flex  justify-center gap-5"
                    >
                        <div>{"//"}</div>
                        Seweb Process
                    </div>
                    <h2
                        data-aos="fade-up"
                        className="text-4xl sm:text-4xl  max-w-xl mb-9 font-bold font-space_grotesk sm:leading-snug"
                    >
                        Het proces dat we volgen voor het beste resultaat!
                    </h2>
                </header>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    {process.map((service) => (
                        <article
                            className="bg-white group hover:bg-rose duration-700 transition-all shadow-card rounded-2xl text-center flex flex-col items-center justify-between mb-16 sm:mb-20 lg:mb-0 pb-10 px-5"
                            key={service.id}
                        >
                            <div className="relative z-10 size-[110px] rounded-full bg-rose grid place-content-center text-white group-hover:bg-white group-hover:text-dark text-4xl sm:text-5xl duration-700 transition-all -translate-y-1/2">
                                <service.Icon />
                            </div>
                            <div className="flex flex-col flex-grow items-center">
                                <h5 className="text-xl font-bold font-space_grotesk mb-2">
                                    {service.title}
                                </h5>
                                <p className="text-gray group-hover:text-white duration-500 transition-all leading-loose">
                                    {service.text}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Process;
