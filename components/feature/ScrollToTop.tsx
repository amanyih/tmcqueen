"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { ArrowUpToLine } from "lucide-react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          className="fixed bottom-10 right-10 opacity-90 shadow-md rounded-full p-4 "
          size={"icon"}
        >
          <ArrowUpToLine className="w-8 h-8" />
        </Button>
      )}
    </>
  );
};
