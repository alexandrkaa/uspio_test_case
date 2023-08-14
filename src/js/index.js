import '../scss/style.scss'
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import $ from './jquery-import.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.js';
import { webpClass } from './utils.js';

webpClass();
$(document).ready(function () {

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

  $('.owl-carousel').owlCarousel({
    items: 3,
    loop: true,
    nav: false,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 5000
  });
});
