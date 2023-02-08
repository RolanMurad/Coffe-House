$(function () {

  if (window.innerWidth > 770) {
    // !Anchors
    $('.nav__link').on('click', function (event) {
      event.stopPropagation();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + "px"
      }, {
        duration: 1000,
        easing: "swing",
      });
      return false;
    });

    $('.header__content-btn').on('click', function () {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + "px"
      }, {
        duration: 1000,
        easing: "swing",
      });
      return false;
    });
  };

  //!Menu
  const burger = document?.querySelector('[data-burger]');
  const navbar = document?.querySelector('[data-navbar]');
  const body = document.body;
  const navItems = document?.querySelectorAll('.nav__list-item');
  const header = document?.querySelector('.header');
  const headerHeight = header.offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);


  // //!Click on burger
  burger?.addEventListener('click', function () {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    navbar?.classList.toggle('navbar--visible');
  });

  // //!Close by click on menu Item
  navItems.forEach(function (e) {
    e.addEventListener('click', function () {
      body.classList.remove('stop-scroll');
      burger?.classList.remove('burger--active');
      navbar?.classList.remove('navbar--visible');
    });
  });
  //!Tabs
  // !Vars
  const tabBtns = Array.from(document.querySelectorAll('[data-tab]'));
  const tabsContents = document.querySelectorAll('[data-tab-content]');
  //!Adding class
  tabBtns[0].classList.add('active');
  let activeBtn = tabBtns[0];

  tabBtns.forEach(el => {
    el.addEventListener('click', onTabBtnClick);
    el.addEventListener('click', function () {
      tabsContents.forEach(function (el) {
        el.classList.add('hidden');
      })
      const tabsContent = document.querySelector('#' + this.dataset.tab);
      tabsContent.classList.remove('hidden');
    });
  });

  function onTabBtnClick(e) {
    e.preventDefault;
    const btn = e.target
    changeBtn(btn)
  };

  function changeBtn(btn) {
    if (btn.classList.contains('active')) {
      return;
    }
    activeBtn.classList.remove('active');
    btn.classList.add('active');
    activeBtn = btn;
  };

  //!Slick-slider
  $('.reviews__slider').slick({
    //!Main settings
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  });
});






