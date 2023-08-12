import '../scss/style.scss'
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
import $ from './jquery.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.js';
import { webpClass } from './utils.js';

webpClass();
$(document).ready(function () {
  $('.owl-carousel').owlCarousel();
});
