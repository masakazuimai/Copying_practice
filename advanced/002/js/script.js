/**
 * Lumiere Studio - Photography
 * jQuery Animations: Header scroll, Fade-in on scroll, Random gallery fade
 */

$(document).ready(function () {
  // ========================================
  // Header Scroll Effect
  // ========================================
  const $header = $('.header');
  let lastScrollTop = 0;

  $(window).on('scroll', function () {
    const scrollTop = $(this).scrollTop();

    if (scrollTop > 100) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }

    lastScrollTop = scrollTop;
  });

  // ========================================
  // Mobile Navigation Toggle
  // ========================================
  const $navToggle = $('.nav-toggle');
  const $navLinks = $('.nav-links');

  $navToggle.on('click', function () {
    $(this).toggleClass('active');
    $navLinks.toggleClass('active');
  });

  // Close menu when link clicked
  $navLinks.find('a').on('click', function () {
    $navToggle.removeClass('active');
    $navLinks.removeClass('active');
  });

  // ========================================
  // Intersection Observer for Fade-in
  // ========================================
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target).addClass('visible');
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with fade-in class
  $('.news-item, .about-visual, .about-content, .cta-card').each(function () {
    fadeInObserver.observe(this);
  });

  // ========================================
  // Gallery Random Order Fade-in
  // ========================================
  const $galleryItems = $('.gallery-item');
  let isGalleryAnimated = false;

  const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isGalleryAnimated) {
        fadeInRandomOrder($galleryItems);
        isGalleryAnimated = true;
        galleryObserver.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
  });

  // Observe gallery section
  const $gallerySection = $('.gallery-section');
  if ($gallerySection.length) {
    galleryObserver.observe($gallerySection[0]);
  }

  // Random order fade-in function
  function fadeInRandomOrder($elements) {
    const shuffled = shuffleArray($elements.toArray());

    $(shuffled).each(function (index) {
      const $item = $(this);
      setTimeout(function () {
        $item.addClass('visible');
      }, index * 200);
    });
  }

  // Fisher-Yates shuffle algorithm
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 80
      }, 800, 'swing');
    }
  });

  // ========================================
  // MV Scroll Bar Animation
  // ========================================
  const $scrollBar = $('.scroll-bar');
  if ($scrollBar.length) {
    // Continuous scroll indicator animation via CSS
    $scrollBar.addClass('animate');
  }

  // ========================================
  // Image Lazy Loading Enhancement
  // ========================================
  $('img').each(function () {
    this.loading = 'lazy';
  });
});
