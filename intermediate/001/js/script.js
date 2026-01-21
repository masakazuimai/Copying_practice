/**
 * Scroll Animation Controller
 * Handles fade-in animations on scroll
 */
(function () {
  "use strict";

  const ANIMATION_SELECTORS = ".animation-target, .text-animation";
  const SHOW_CLASS = "show";
  const TRIGGER_RATIO = 0.5;

  /**
   * Check if element is in viewport and add show class
   */
  function handleScrollAnimation() {
    const elements = document.querySelectorAll(ANIMATION_SELECTORS);

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const triggerPoint = rect.top + rect.height * TRIGGER_RATIO;

      if (window.innerHeight > triggerPoint) {
        element.classList.add(SHOW_CLASS);
      }
    });
  }

  /**
   * Split text into animated spans for character animation
   */
  function initTextAnimation() {
    const textElements = document.querySelectorAll(".text-animation");

    textElements.forEach((element) => {
      const text = element.textContent.trim();
      const paragraph = element.querySelector("p");

      if (!paragraph) return;

      paragraph.innerHTML = "";

      text.split("").forEach((char, index) => {
        if (char === " ") {
          paragraph.innerHTML += " ";
        } else {
          const delay = (index * 0.1 + 0.1).toFixed(1);
          paragraph.innerHTML += `<span><span style="animation-delay: ${delay}s;">${char}</span></span>`;
        }
      });
    });
  }

  /**
   * Initialize on DOM ready
   */
  function init() {
    initTextAnimation();
    handleScrollAnimation();
    window.addEventListener("scroll", handleScrollAnimation, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
