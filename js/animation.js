// !Animation
const tlLoader = gsap.timeline()

// !Loader
tlLoader
  .set('.loader__item', { yPercent: -100 })
  .set('.loader__title', { opacity: 0 })
  .to('.loader__item', {
    yPercent: 0,
    duration: 0.5,
    stagger: 0.25,
  })
  .to('.loader__item', {
    yPercent: 100,
    duration: 0.5,
    stagger: 0.25,
  })
  .to('.loader__title', {
    opacity: 1,
    duration: 1,
    scale: 1.2,
  })
  .set('.loader__item', {
    yPercent: -100,
  })
  .to('.loader__title', {
    opacity: 0,
    duration: 1,
    scale: 0.8,
  })
  .to('.loader', {
    yPercent: -100,
    duration: 1,
  })

// !Timeline
const tl = gsap.timeline()

tl
  .fromTo('.logo', {
    x: -100,
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
  }, 5)

  .fromTo('.nav__list', {
    x: 200,
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
    duration: 0.5,
  }, 5.3)

  .fromTo('.header__content-btn', {
    y: 300,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 1,
  }, 5.3)


  .fromTo('.header__content-title', {
    x: 200,
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
    duration: 1,
  }, 5.5)

  .fromTo('.header__content-subtitle', {
    x: -200,
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
    duration: 1,
  }, 5.5)

gsap.registerPlugin(ScrollTrigger);
const laptopScreen = window.matchMedia('(min-width:992px)');

if (laptopScreen.matches) {

  // !Hero scroll Animation
  gsap.to('.header__content', {
    scrollTrigger: {
      trigger: '.header__content',
      start: 'top top',
      scrub: true,

    },
    yPercent: 0,
    scale: 0.5,
    xPercent: 0,
    opacity: 0,
  })

  // !Benefits scroll Animation
  gsap.to('.benefits__item--first', {
    scrollTrigger: {
      trigger: '.benefits',
      start: 'top top',
      scrub: true,

    },
    yPercent: 50,
    scale: 0.5,
    xPercent: -100,
    opacity: 0,
  })

  gsap.to('.benefits__item--second', {
    scrollTrigger: {
      trigger: '.benefits',
      start: 'top top',
      scrub: true,

    },
    yPercent: 0,
    scale: 0.5,
    xPercent: 0,
    opacity: 0,
  })

  gsap.to('.benefits__item--third', {
    scrollTrigger: {
      trigger: '.benefits',
      start: 'top top',
      scrub: true,

    },
    yPercent: 50,
    scale: 0.5,
    xPercent: 100,
    opacity: 0,
  })

  // !Reviews scroll Animation
  gsap.to('.reviews-title', {
    scrollTrigger: {
      trigger: '.section__reviews',
      start: 'top top',
      scrub: true,

    },
    yPercent: 80,
    scale: 0.5,
    xPercent: -80,
    opacity: 0,
  })

  gsap.to('.reviews__slider-review', {
    scrollTrigger: {
      trigger: '.section__reviews',
      start: 'top top',
      scrub: true,

    },
    yPercent: -80,
    scale: 0.5,
    xPercent: 80,
    opacity: 0,
  })

  gsap.to('.reviews__slider-author', {
    scrollTrigger: {
      trigger: '.section__reviews',
      start: 'top top',
      scrub: true,

    },
    yPercent: 200,
    scale: 0.5,
    xPercent: 0,
    opacity: 0,
  })
  // !Menu scroll Animation
  gsap.to('.section__title', {
    scrollTrigger: {
      trigger: '.section__menu',
      start: 'top top',
      scrub: true,

    },
    yPercent: -200,
    scale: 0.5,
    xPercent: 0,
    opacity: 0,
  })

  gsap.to('.section__subtitle', {
    scrollTrigger: {
      trigger: '.section__menu',
      start: 'top top',
      scrub: true,

    },
    yPercent: -200,
    scale: 0.5,
    xPercent: 0,
    opacity: 0,
  })
  gsap.to('.tabs__header', {
    scrollTrigger: {
      trigger: '.section__menu',
      start: 'top top',
      scrub: true,

    },
    yPercent: -200,
    scale: 0.5,
    xPercent: 0,
    opacity: 0,
  })

  gsap.to('.food__list--first', {
    scrollTrigger: {
      trigger: '.food',
      start: 'top top',
      scrub: true,

    },
    yPercent: 50,
    scale: 0.5,
    xPercent: -100,
    opacity: 0,
  })

  gsap.to('.food__list--second', {
    scrollTrigger: {
      trigger: '.food',
      start: 'top top',
      scrub: true,

    },
    yPercent: 50,
    scale: 0.5,
    xPercent: 100,
    opacity: 0,
  })

  gsap.to('.drinks__list--first', {
    scrollTrigger: {
      trigger: '.food',
      start: 'top top',
      scrub: true,

    },
    yPercent: 50,
    scale: 0.5,
    xPercent: -100,
    opacity: 0,
  })

  gsap.to('.drinks__list--second', {
    scrollTrigger: {
      trigger: '.food',
      start: 'top top',
      scrub: true,

    },
    yPercent: 50,
    scale: 0.5,
    xPercent: 100,
    opacity: 0,
  })

  // !Booking scroll Animation
  gsap.to('.booking__title', {
    scrollTrigger: {
      trigger: '.section__booking',
      start: 'top top',
      scrub: true,

    },
    yPercent: 80,
    scale: 0.5,
    xPercent: -80,
    opacity: 0,
  })

  gsap.to('.booking__text', {
    scrollTrigger: {
      trigger: '.section__booking',
      start: 'top top',
      scrub: true,

    },
    yPercent: -80,
    scale: 0.5,
    xPercent: 80,
    opacity: 0,
  })

  gsap.to('.booking__btn', {
    scrollTrigger: {
      trigger: '.section__booking',
      start: 'center top',
      scrub: true,

    },
    yPercent: 250,
    scale: 0.5,
    xPercent: 0,
    opacity: 0,
  })

  // !News scroll Animation
  gsap.to('.news__title', {
    scrollTrigger: {
      trigger: '.news',
      start: 'top top',
      scrub: true,

    },
    yPercent: -200,
    scale: 0.5,
    xPercent: 0,
    opacity: 0,
  })

  gsap.to('.news__subtitle', {
    scrollTrigger: {
      trigger: '.news',
      start: 'top top',
      scrub: true,

    },
    yPercent: -200,
    scale: 0.5,
    xPercent: 0,
    opacity: 0,
  })

  gsap.to('.news__wrapper', {
    scrollTrigger: {
      trigger: '.news',
      start: 'center  bottom',
      scrub: true,

    },
    yPercent: 50,
    scale: 0.5,
    xPercent: 100,
    opacity: 0,
  })

  // !Location scroll Animation
  gsap.to('.location__title', {
    scrollTrigger: {
      trigger: '.location',
      start: 'top top',
      scrub: true,

    },
    yPercent: -200,
    scale: 0.5,
    xPercent: 0,
    opacity: 0,
  })

  gsap.to('.location__subtitle', {
    scrollTrigger: {
      trigger: '.location',
      start: 'top top',
      scrub: true,

    },
    yPercent: -200,
    scale: 0.5,
    xPercent: 0,
    opacity: 0,
  })

  gsap.to('.location__wrapper', {
    scrollTrigger: {
      trigger: '.location',
      start: 'top top',
      scrub: true,
    },
    yPercent: 50,
    scale: 0.5,
    xPercent: -100,
    opacity: 0,
  })
}

