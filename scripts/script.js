window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});
document.querySelector('.animation').addEventListener('click', function() {
const aboutusSECTION = document.querySelector('.about-us');
aboutusSECTION.classList.toggle('show');
});
document.querySelector('.abt-us-btn').addEventListener('click', function() {
const aboutusSECTION = document.querySelector('.about-us');
aboutusSECTION.classList.toggle('show');
});
document.addEventListener('DOMContentLoaded', function() {
const swiper = new Swiper('.swiper-container', {
loop: true,
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},
pagination: {
  el: '.swiper-pagination',
  clickable: true,
},
autoplay: {
  delay: 2500,
  disableOnInteraction: false,
},
});
});
window.onscroll = function() {
  var btn = document.getElementById('scrollToTopBtn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = 'block';
  } else {
      btn.style.display = 'none';
  }
};

document.getElementById('scrollToTopBtn').onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}; 