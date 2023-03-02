document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.header__burger')
  const menu = document.querySelector('.nav-menu')

  burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
  })
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
