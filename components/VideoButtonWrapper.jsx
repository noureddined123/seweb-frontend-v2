"use client";

import { useState } from "react";
import Dialog from "./Dialog";
import ReactPlayer from "react-player/lazy";
import { FiX } from "react-icons/fi";

const VideoButtonWrapper = ({ children, url }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <div onClick={openDialog}>{children}</div>

      <Dialog open={isDialogOpen} onClose={closeDialog}>
        {isDialogOpen && (
          <div className="h-[calc(100%)] relative">
            <button
              className="text-2xl size-10 text-white rounded-full bg-purple grid place-content-center absolute top-5 right-5 hover:bg-ash duration-500 transition-all"
              onClick={closeDialog}
            >
              <FiX />
            </button>
            <ReactPlayer width={"100%"} height={"100%"} url={url} />
          </div>
        )}
      </Dialog>
    </>
  );
};
export default VideoButtonWrapper;
