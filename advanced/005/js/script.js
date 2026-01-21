/**
 * NOIR STYLE - Fashion Magazine LP
 * GSAP ScrollTrigger Animations
 */

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// DOM Elements
const preloader = document.getElementById('preloader');
const header = document.getElementById('header');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// ========================================
// Preloader
// ========================================
window.addEventListener('load', () => {
  // Preloader animation
  gsap.to('.preloader-text', {
    opacity: 0,
    y: -20,
    duration: 0.5,
    delay: 1
  });

  gsap.to('.preloader-line', {
    width: 0,
    duration: 0.5,
    delay: 1.2
  });

  gsap.to(preloader, {
    opacity: 0,
    duration: 0.5,
    delay: 1.5,
    onComplete: () => {
      preloader.classList.add('hidden');
      initAnimations();
    }
  });
});

// ========================================
// Initialize All Animations
// ========================================
function initAnimations() {
  heroAnimations();
  scrollAnimations();
  headerScrollEffect();
  parallaxEffects();
  counterAnimations();
  marqueeAnimation();
}

// ========================================
// Hero Section Animations
// ========================================
function heroAnimations() {
  const heroTl = gsap.timeline();

  // Hero background scale
  heroTl.to('.hero-bg', {
    scale: 1,
    duration: 1.5,
    ease: 'power2.out'
  });

  // Subtitle fade in
  heroTl.to('.hero-subtitle', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.8');

  // Title words reveal
  heroTl.to('.hero-title .word', {
    y: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out'
  }, '-=0.5');

  // Description fade in
  heroTl.to('.hero-description', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5');

  // CTA button fade in
  heroTl.to('.hero-cta', {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.5');

  // Scroll indicator
  heroTl.to('.scroll-indicator', {
    opacity: 1,
    duration: 0.8,
    ease: 'power3.out'
  }, '-=0.3');

  // Hero parallax on scroll
  gsap.to('.hero-bg', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });

  // Hero content fade out on scroll
  gsap.to('.hero-content', {
    opacity: 0,
    y: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'center center',
      end: 'bottom top',
      scrub: true
    }
  });
}

// ========================================
// Scroll-triggered Animations
// ========================================
function scrollAnimations() {
  // Fade up animations
  const fadeUpElements = document.querySelectorAll('[data-animate="fade-up"]');
  fadeUpElements.forEach(el => {
    const delay = parseFloat(el.dataset.delay) || 0;

    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Fade right animations (sidebar)
  const fadeRightElements = document.querySelectorAll('[data-animate="fade-right"]');
  fadeRightElements.forEach(el => {
    gsap.fromTo(el,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Featured cards animation
  const featuredCards = document.querySelectorAll('.featured-card');
  featuredCards.forEach((card, index) => {
    const delay = parseFloat(card.dataset.delay) || 0;

    gsap.fromTo(card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Collection items - reveal left
  const revealLeftElements = document.querySelectorAll('[data-animate="reveal-left"]');
  revealLeftElements.forEach(el => {
    const image = el.querySelector('.collection-image');
    const info = el.querySelector('.collection-info');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    tl.fromTo(el,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    tl.fromTo(image,
      { clipPath: 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0)',
        duration: 1,
        ease: 'power3.inOut'
      },
      '-=0.1'
    );

    tl.fromTo(info.children,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      },
      '-=0.5'
    );
  });

  // Collection items - reveal right
  const revealRightElements = document.querySelectorAll('[data-animate="reveal-right"]');
  revealRightElements.forEach(el => {
    const image = el.querySelector('.collection-image');
    const info = el.querySelector('.collection-info');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    tl.fromTo(el,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    );

    tl.fromTo(image,
      { clipPath: 'inset(0 0 0 100%)' },
      {
        clipPath: 'inset(0 0 0 0%)',
        duration: 1,
        ease: 'power3.inOut'
      },
      '-=0.1'
    );

    tl.fromTo(info.children,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      },
      '-=0.5'
    );
  });

  // Editorial section text animation
  const editorialText = document.querySelector('.editorial-text');
  if (editorialText) {
    gsap.fromTo(editorialText,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: editorialText,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  }

  // Stagger animations (stats)
  const staggerElements = document.querySelectorAll('[data-animate="stagger"]');
  staggerElements.forEach(container => {
    const items = container.children;

    gsap.fromTo(items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Lifestyle articles
  const lifestyleArticles = document.querySelectorAll('.lifestyle-article');
  lifestyleArticles.forEach(article => {
    const delay = parseFloat(article.dataset.delay) || 0;

    gsap.fromTo(article,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: article,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Footer animations
  const footerElements = document.querySelectorAll('.footer [data-animate]');
  footerElements.forEach(el => {
    const delay = parseFloat(el.dataset.delay) || 0;

    gsap.fromTo(el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
}

// ========================================
// Header Scroll Effect
// ========================================
function headerScrollEffect() {
  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: (self) => {
      if (self.direction === 1 && self.scroll() > 80) {
        header.classList.add('scrolled');
      } else if (self.scroll() <= 80) {
        header.classList.remove('scrolled');
      }
    }
  });
}

// ========================================
// Parallax Effects
// ========================================
function parallaxEffects() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  parallaxElements.forEach(el => {
    const speed = parseFloat(el.dataset.parallax) || 0.3;

    gsap.to(el, {
      yPercent: speed * 100,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
}

// ========================================
// Counter Animations
// ========================================
function counterAnimations() {
  const counters = document.querySelectorAll('[data-count]');

  counters.forEach(counter => {
    const target = parseInt(counter.dataset.count);

    gsap.fromTo(counter,
      { innerText: 0 },
      {
        innerText: target,
        duration: 2,
        ease: 'power2.out',
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: counter,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
}

// ========================================
// Marquee Animation
// ========================================
function marqueeAnimation() {
  const marqueeContent = document.querySelector('.marquee-content');

  if (marqueeContent) {
    // Clone content for seamless loop
    marqueeContent.innerHTML += marqueeContent.innerHTML;

    // Speed up on scroll
    ScrollTrigger.create({
      trigger: '.marquee-section',
      start: 'top bottom',
      end: 'bottom top',
      onUpdate: (self) => {
        const speed = 1 + Math.abs(self.getVelocity() / 3000);
        gsap.to('.marquee-content', {
          animationDuration: `${25 / speed}s`,
          duration: 0.5,
          ease: 'power2.out'
        });
      }
    });
  }
}

// ========================================
// Mobile Menu Toggle
// ========================================
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
  });
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target,
          offsetY: 80
        },
        ease: 'power3.inOut'
      });

      // Close mobile menu if open
      if (menuToggle && menuToggle.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    }
  });
});

// ========================================
// Image Lazy Loading Enhancement
// ========================================
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.loading = 'lazy';
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
