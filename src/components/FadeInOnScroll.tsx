import React, { useEffect } from "react";

interface FadeInOnScrollProps {
  children: React.ReactNode;
}

export default function FadeInOnScroll({ children }: FadeInOnScrollProps) {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0,
      rootMargin: "0px 0px 50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-[fadeIn_.7s]");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".fadeIn");

    for (let i = 0; i < elements.length; i++) {
      observer.observe(elements[i]);
    }

    const observerSlow = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-[fadeIn_.9s]");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elementsSlow = document.querySelectorAll(".fadeInSlow");

    for (let i = 0; i < elementsSlow.length; i++) {
      observerSlow.observe(elementsSlow[i]);
    }
  }, []);

  return <div>{children}</div>;
}
