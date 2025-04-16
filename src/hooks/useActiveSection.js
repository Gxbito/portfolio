import { useEffect, useState } from "react";

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const headers = Array.from(document.querySelectorAll("h4[id^='section-']"));

      const scrollPos = window.scrollY;
      let closestId = null;
      let closestOffset = Infinity;

      headers.forEach((header) => {
        const offsetTop = header.getBoundingClientRect().top + window.scrollY;
        const distance = Math.abs(scrollPos + window.innerHeight / 2 - offsetTop);

        if (distance < closestOffset) {
          closestOffset = distance;
          const id = header.getAttribute("id");
          if (id) closestId = parseInt(id.replace("section-", ""), 10);
        }
      });

      if (closestId !== null) setActiveSection(closestId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};
