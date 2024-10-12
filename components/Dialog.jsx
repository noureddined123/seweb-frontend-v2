"use client";
import React, { useEffect, useRef } from "react";

import { RemoveScroll } from "react-remove-scroll";

const Dialog = ({ open, onClose, children }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialogNode = dialogRef.current;
    if (open) {
      dialogNode.showModal();
    } else {
      dialogNode.close();
    }

    const handleBackdropClick = (event) => {
      if (event.target === dialogNode) {
        onClose();
      }
    };

    dialogNode.addEventListener("click", handleBackdropClick);

    return () => {
      dialogNode.removeEventListener("click", handleBackdropClick);
    };
  }, [open, onClose]);

  return (
    <RemoveScroll enabled={open}>
      <dialog
        className="backdrop:bg-black  backdrop:bg-opacity-40 border-none  rounded-md shadow-lg w-full h-screen "
        ref={dialogRef}
        onClose={onClose}
      >
        {children}
      </dialog>
    </RemoveScroll>
  );
};

export default Dialog;
