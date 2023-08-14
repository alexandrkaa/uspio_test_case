import '../scss/style.scss'
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import $ from './jquery-import.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.js';
import { webpClass, noJs, startServiceWorker } from './utils.js';
import { SLIDER_1_ITEM_SIZE, SLIDER_2_ITEMS_SIZE, SLIDER_LOOP } from './consts';

webpClass();
noJs();
startServiceWorker();

$(document).ready(function () {
  // popup
  $('.get-appointment').click(function (evt) {
    evt.stopPropagation();
  });

  const popup = $('.popup');
  $('.btn-get-appointment').click(function (evt) {
    evt.preventDefault();
    popup.css({ display: 'flex' });
  });

  popup.click(function (evt) {
    evt.preventDefault();
    popup.css({ display: 'none' });
  });

  $('.close').click(function (evt) {
    evt.preventDefault();
    popup.css({ display: 'none' });
  });

  // subscribe
  $('.btn-subscribe').click(function (evt) {
    evt.preventDefault();
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      type: 'GET',
      data: {
        email: $('.subscribe__input').val()
      },
      success: function (data) {
        $('.subscribe__input').val('');
        evt.target.innerHTML = data.title;
      }
    });
  });

  //menu
  var mainMenu = document.querySelector('.main-navigation');
  mainMenu.classList.remove('main-navigation_opened');
  mainMenu.classList.add('main-navigation_closed');

  var mainMenuToggler = document.querySelector('.main-navigation__toggle');
  mainMenuToggler.addEventListener('click', function (e) {
    e.preventDefault();
    if (mainMenu.classList.contains('main-navigation_closed')) {
      mainMenu.classList.remove('main-navigation_closed');
      mainMenu.classList.add('main-navigation_opened');
    } else {
      mainMenu.classList.remove('main-navigation_opened');
      mainMenu.classList.add('main-navigation_closed');
    }
  });

  let items = 3;
  if (window.innerWidth <= SLIDER_2_ITEMS_SIZE) {
    items = 2;
  }
  if (window.innerWidth <= SLIDER_1_ITEM_SIZE) {
    items = 1;
  }

  const owl = $('.owl-carousel');
  owl.owlCarousel({
    items: items,
    loop: true,
    nav: false,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: SLIDER_LOOP
  });

  window.addEventListener('resize', function () {

    if (window.innerWidth <= 1024) {
      owl.trigger("destroy.owl.carousel");
      owl.owlCarousel({
        items: 2,
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000
      });
    }

    if (window.innerWidth <= 768) {
      owl.trigger("destroy.owl.carousel");
      owl.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplayTimeout: 5000
      });
    }
  })
});
