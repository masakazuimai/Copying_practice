/**
 * VERTEX DIGITAL - Creative Agency
 * pagePiling.js + Shutter Opening Animation
 */

$(document).ready(function () {
  // ========================================
  // pagePiling.js Initialization
  // ========================================
  $('#pagepiling').pagepiling({
    menu: null,
    direction: 'vertical',
    verticalCentered: true,
    sectionsColor: [],
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
    scrollingSpeed: 700,
    easing: 'swing',
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      textColor: '#fff',
      bulletsColor: '#fff',
      position: 'right',
      tooltips: false
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: false,

    // Callbacks
    afterLoad: function (anchorLink, index) {
      // Add animation class to current section
      $('.section').eq(index - 1).addClass('active');
    },
    onLeave: function (index, nextIndex, direction) {
      // Remove active class from leaving section
      $('.section').eq(index - 1).removeClass('active');
    }
  });

  // ========================================
  // Header Navigation Active State
  // ========================================
  $('.header-nav a').on('click', function (e) {
    e.preventDefault();
    const anchor = $(this).attr('href');
    $.fn.pagepiling.moveTo(anchor.replace('#', ''));
  });

  // ========================================
  // Section Content Animations
  // ========================================
  // Add staggered animation to service items
  $('.service-item').each(function (index) {
    $(this).css('animation-delay', (index * 0.1) + 's');
  });

  // Add staggered animation to work items
  $('.work-item').each(function (index) {
    $(this).css('animation-delay', (index * 0.15) + 's');
  });

  // Add staggered animation to stats
  $('.stat').each(function (index) {
    $(this).css('animation-delay', (index * 0.1) + 's');
  });

  // Add staggered animation to team roles
  $('.team-roles span').each(function (index) {
    $(this).css('animation-delay', (index * 0.1) + 's');
  });

  // ========================================
  // Smooth scroll for internal links
  // ========================================
  $('a[href^="#page"]').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href').replace('#', '');
    $.fn.pagepiling.moveTo(target);
  });
});
