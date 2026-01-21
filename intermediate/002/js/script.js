/**
 * Image Gallery Slideshow
 * Handles automatic image transitions with fade effects
 */
(function () {
  "use strict";

  const CONFIG = {
    fadeDuration: 1000,
    intervalDuration: 6000,
    rightImageDelay: 3000,
    leftImages: ["./img/img1.jpg", "./img/img2.jpg", "./img/img3.jpg"],
    rightImages: ["./img/img4.jpg", "./img/img5.jpg", "./img/img6.jpg"],
  };

  let leftIndex = 0;
  let rightIndex = 0;

  /**
   * Fade transition for an image element
   */
  function fadeTransition(element, newSrc) {
    element.style.opacity = "0";

    setTimeout(() => {
      element.src = newSrc;
      element.style.opacity = "1";
    }, CONFIG.fadeDuration);
  }

  /**
   * Start the left image slideshow
   */
  function startLeftSlideshow() {
    const leftImage = document.querySelector(".gallery-image--left");
    if (!leftImage) return;

    setInterval(() => {
      leftIndex = (leftIndex + 1) % CONFIG.leftImages.length;
      fadeTransition(leftImage, CONFIG.leftImages[leftIndex]);
    }, CONFIG.intervalDuration);
  }

  /**
   * Start the right image slideshow with delay
   */
  function startRightSlideshow() {
    const rightImage = document.querySelector(".gallery-image--right");
    if (!rightImage) return;

    setTimeout(() => {
      setInterval(() => {
        rightIndex = (rightIndex + 1) % CONFIG.rightImages.length;
        fadeTransition(rightImage, CONFIG.rightImages[rightIndex]);
      }, CONFIG.intervalDuration);
    }, CONFIG.rightImageDelay);
  }

  /**
   * Initialize slideshows on DOM ready
   */
  function init() {
    startLeftSlideshow();
    startRightSlideshow();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
