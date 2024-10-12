"use client";
import { faq } from "@/utils/data";
import { Disclosure, DisclosureButton } from "@headlessui/react";

import { FaMinus, FaPlus } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
const FAQContainer = () => {
  return (
    <div className="flex flex-col gap-3">
      {faq.map((faq) => (

        <Collapsible key={faq.id}
          defaultOpen={false}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};
export default FAQContainer;

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
