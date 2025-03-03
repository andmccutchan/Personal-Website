import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ScrollToTop = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setShowGoTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {showGoTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 rounded-full p-3 text-gray-950 bg-stone-50"
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 70, opacity: 0 }}
            key="modal"
          >
            <img src="/upArrow.svg" alt="Up arrow" width="24" height="24" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollToTop;
