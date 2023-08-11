import '../scss/style.scss'
import javascriptLogo from '../assets/javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import $ from './jquery.js';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

$(document).ready(function () {
  $('.owl-carousel').owlCarousel();
});

setupCounter(document.querySelector('#counter'))
