"use client";

import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

import ReactDOM from "react-dom";
import useKey from "@/hooks/useKey";

const Search = ({ onClose, isSearchOpen }) => {
  // This will close the search when user pres Escape key
  useKey("Escape", onClose);

  return ReactDOM.createPortal(
    <RemoveScroll enabled={isSearchOpen}>
      <div className="fixed isolate inset-0 z-[9999]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isSearchOpen ? 1 : 1,
            transition: { duration: 0.5 },
          }}
          onClick={onClose}
          className="absolute z-0 inset-0 bg-dark-gray bg-opacity-50 backdrop-blur-sm"
        ></motion.div>
        <FocusLock disabled={!isSearchOpen} returnFocus={true}>
          <motion.dev
            initial={{ y: "-100%" }}
            animate={{
              y: isSearchOpen ? "0%" : "-100%",
              transition: {
                duration: 0.4,
              },
            }}
            className="relative will-change-transform px-4 flex items-center h-[90px] z-10 bg-black gap-5 "
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onClose();
              }}
              className="flex  rounded-2xl h-11 bg-rose  w-full "
            >
              <input
                placeholder="Search"
                className="flex-1  text-white placeholder:text-white text-sm px-5 h-11 focus-visible:outline-none bg-transparent"
                type="search"
              />
            </form>

            <button onClick={onClose} className="text-white text-2xl">
              <IoMdClose />
            </button>
          </motion.dev>
        </FocusLock>
      </div>
    </RemoveScroll>,
    document.body
  );
};
export default Search;
