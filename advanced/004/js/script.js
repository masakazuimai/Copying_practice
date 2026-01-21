/**
 * AKIRA TANAKA - Creative Developer Portfolio
 * GSAP ScrollTrigger Animations
 * - MV Image Fade Out
 * - Section Image Page Flip (rotateY)
 * - Text Split Animation
 */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ========================================
// MV Image Fade Out on Scroll
// ========================================
gsap.to('#mv-img', {
  opacity: 0,
  scrollTrigger: {
    trigger: '.main-visual',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
});

// ========================================
// Section Images Page Flip Animation
// ========================================
const sectionImages = [
  '#about-img',
  '#works-img',
  '#works-img2',
  '#works-img3',
  '#skills-img',
  '#contact-img'
];

sectionImages.forEach((selector) => {
  const element = document.querySelector(selector);
  if (!element) return;

  // Forward animation: Flip in (bottom → 50%)
  gsap.fromTo(
    selector,
    { opacity: 0, rotateY: 50 },
    {
      opacity: 1,
      rotateY: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: selector,
        start: 'top bottom',
        end: 'top 50%',
        scrub: true,
      },
    }
  );

  // Reverse animation: Flip out (30% → top)
  gsap.fromTo(
    selector,
    { opacity: 1, rotateY: 0 },
    {
      opacity: 0,
      rotateY: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: selector,
        start: 'top 30%',
        end: 'top top',
        scrub: true,
      },
    }
  );
});

// ========================================
// Text Split Function
// ========================================
function splitText(element) {
  const text = element.textContent;
  element.textContent = '';
  const chars = [...text];
  chars.forEach((char) => {
    const span = document.createElement('span');
    span.classList.add('char');
    // Preserve whitespace
    if (char === ' ') {
      span.innerHTML = '&nbsp;';
    } else {
      span.textContent = char;
    }
    element.appendChild(span);
  });
}

// ========================================
// MV Title Animation (One-time trigger)
// ========================================
const mvTitle = document.querySelector('.mv-title');
if (mvTitle) {
  splitText(mvTitle);
  gsap.to(mvTitle.querySelectorAll('.char'), {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: 'power1.out',
    stagger: {
      each: 0.1,
      from: 'start',
    },
    scrollTrigger: {
      trigger: mvTitle,
      start: 'top 80%',
      end: 'top 20%',
      scrub: false,
    },
  });
}

// MV Label Animation
const mvLabel = document.querySelector('.mv-label');
if (mvLabel) {
  gsap.fromTo(
    mvLabel,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.3,
    }
  );
}

// MV Description Animation
const mvDescription = document.querySelector('.mv-description');
if (mvDescription) {
  gsap.fromTo(
    mvDescription,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.8,
    }
  );
}

// ========================================
// Section Titles Animation (Scroll-synced)
// ========================================
const sectionTitles = document.querySelectorAll('.section-title');
sectionTitles.forEach((el) => {
  splitText(el);
  gsap.to(el.querySelectorAll('.char'), {
    opacity: 1,
    y: 0,
    ease: 'power3.out',
    stagger: {
      each: 0.02,
      from: 'start',
    },
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
    },
  });
});

// ========================================
// Section Text Animation (Scroll-synced)
// ========================================
const textElements = document.querySelectorAll(
  '.about-intro, .about-desc, .section-lead, .work-title, .work-desc, .skill-category-title, .skill-items li, .contact-lead'
);

textElements.forEach((el) => {
  splitText(el);
  gsap.to(el.querySelectorAll('.char'), {
    opacity: 1,
    y: 0,
    ease: 'power3.out',
    stagger: {
      each: 0.02,
      from: 'start',
    },
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      end: 'top 20%',
      scrub: true,
    },
  });
});

// ========================================
// Section Number Animation
// ========================================
const sectionNumbers = document.querySelectorAll('.section-number');
sectionNumbers.forEach((el) => {
  gsap.fromTo(
    el,
    { opacity: 0, x: -20 },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
});

// ========================================
// Work Cards Stagger Animation
// ========================================
const workCards = document.querySelectorAll('.work-card');
workCards.forEach((card, index) => {
  gsap.fromTo(
    card,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  );
});

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target,
          offsetY: 80,
        },
        ease: 'power3.inOut',
      });
    }
  });
});

// ========================================
// Refresh ScrollTrigger on Window Resize
// ========================================
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});
