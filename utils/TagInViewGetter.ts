"use client";

import { useEffect, useState } from "react";

export default function TagInViewGetter() {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveId(visibleSection.target.id);
        }
      },
      {
        threshold: 0.5, 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return { activeId };
}