/**
 * STUDIO NEXUS - Creative Digital Agency
 * Animations: Custom cursor, Loading, Scroll reveal,
 * Horizontal scroll, Color transition, Glitch effect
 */

document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('loading-wrapper');
  const body = document.body;

  body.classList.add('loading');

  // Preloader completion
  setTimeout(() => {
    loader.classList.add('completed');
    body.classList.remove('loading');
    initializeAnimations();
  }, 3000);

  // Custom cursor
  initCursor();
});

// ========================================
// Custom Cursor
// ========================================
function initCursor() {
  const cursor = document.getElementById('cursor');
  if (!cursor) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseover', () => cursor.classList.add('cursor--hover'));
    el.addEventListener('mouseout', () => cursor.classList.remove('cursor--hover'));
  });
}

// ========================================
// Initialize All Animations
// ========================================
function initializeAnimations() {
  initScrollMagic();
  initGsapScrollTrigger();
  initIntersectionObservers();
  initVisualParallax();
}

// ========================================
// ScrollMagic - Text Reveal Animations
// ========================================
function initScrollMagic() {
  const controller = new ScrollMagic.Controller();

  // Text reveal animations
  ['#t-anime1', '#t-anime2', '#t-anime3'].forEach((selector) => {
    new ScrollMagic.Scene({
      triggerElement: selector,
      triggerHook: 0.8,
      reverse: false,
    })
    .setClassToggle(selector, 'show')
    .addTo(controller);
  });

  // Project fade-in animations
  ['#project01', '#project02', '#project03'].forEach((selector) => {
    new ScrollMagic.Scene({
      triggerElement: selector,
      triggerHook: 0.75,
      reverse: false,
    })
    .setClassToggle(selector, 'fade-in')
    .addTo(controller);
  });
}

// ========================================
// GSAP ScrollTrigger - Horizontal Scroll
// ========================================
function initGsapScrollTrigger() {
  gsap.registerPlugin(ScrollTrigger);

  const area = document.querySelector('.js-area');
  const track = document.querySelector('.js-wrap');
  const items = document.querySelectorAll('.js-item');
  const num = items.length;

  if (!area || !track || !items.length) return;

  // Set track width
  gsap.set(track, { width: num * 100 + 'vw' });
  gsap.set(items, { width: 100 / num + '%' });

  // Horizontal scroll animation
  gsap.to(items, {
    xPercent: -100 * (num - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: area,
      start: 'center center',
      end: '+=1500',
      pin: true,
      scrub: 1,
    },
  });
}

// ========================================
// Intersection Observer - Color Shift
// ========================================
function initIntersectionObservers() {
  const projects = [
    { selector: '#project01', threshold: 0.5 },
    { selector: '#project02', threshold: 0.6 },
    { selector: '#project03', threshold: 0.5 },
  ];

  projects.forEach(({ selector, threshold }) => {
    const project = document.querySelector(selector);
    if (!project) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('color-shift');
          }
        });
      },
      { threshold }
    );

    observer.observe(project);
  });

  // Hero section show class
  const heroSection = document.getElementById('t-anime1');
  if (heroSection) {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.3 }
    );
    heroObserver.observe(heroSection);
  }
}

// ========================================
// Visual Section Parallax
// ========================================
function initVisualParallax() {
  const visualBg = document.querySelector('.visual-bg');
  if (!visualBg) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const offsetY = scrollY * 0.3;
    visualBg.style.transform = `translateY(${offsetY}px)`;
  });
}
