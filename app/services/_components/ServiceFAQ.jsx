"use client";
import { Disclosure, DisclosureButton } from "@headlessui/react";

import { FaMinus, FaPlus } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
const ServiceFAQ = () => {
  return (
    <div className="flex flex-col gap-3">
      <Collapsible
        defaultOpen
        question="I'm a total beginner. Can I still follow along?"
        answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
      />
      <Collapsible
        question="Which technical skills would you improve?"
        answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
      />
      <Collapsible
        question="What do Logical Drives do?"
        answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
      />
      <Collapsible
        question="What about our safety measures? "
        answer="Your applicant may have limited help desk wexperience. In that case, look for applicants who are motivated to grow and have some transferable nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit moles accumsan  "
      />
    </div>
  );
};
export default ServiceFAQ;

const Collapsible = ({ question, answer, defaultOpen = false }) => {
  return (
    <Disclosure
      as="div"
      className="px-7 py-4  shadow-card-2 rounded-2xl bg-white"
      defaultOpen={defaultOpen}
    >
      {({ open }) => (
        <>
          <DisclosureButton className="group gap-4 text-black text-lg font-medium flex w-full items-center text-start">
            <span className="size-6 shrink-0 rounded-full text-white grid place-content-center bg-rose text-sm">
              {open ? <FaMinus /> : <FaPlus />}
            </span>
            <span className="text-lg font-bold font-space_grotesk">
              {question}
            </span>
          </DisclosureButton>
          <div
            className={twMerge(
              "overflow-hidden transition-all duration-500",
              open ? "h-auto" : "h-0"
            )}
          >
            <div className="pt-5 text-dim-gray leading-loose border-gray mt-4  border-t">
              {answer}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
};
