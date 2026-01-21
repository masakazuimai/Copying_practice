/**
 * Scroll Animation Controller
 * Handles fade-in animations for testimonials on scroll
 */
(function () {
  "use strict";

  const SELECTORS = {
    testimonials: ".testimonial",
  };

  const CONFIG = {
    triggerRatio: 0.7,
    visibleClass: "visible",
  };

  /**
   * Check if elements are in viewport and add visible class
   */
  function handleScrollAnimation() {
    const elements = document.querySelectorAll(SELECTORS.testimonials);
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const triggerPoint = windowHeight * CONFIG.triggerRatio;

      if (rect.top < triggerPoint) {
        element.classList.add(CONFIG.visibleClass);
      }
    });
  }

  /**
   * Initialize scroll animations
   */
  function init() {
    handleScrollAnimation();
    window.addEventListener("scroll", handleScrollAnimation, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
