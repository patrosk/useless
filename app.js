const hero = document.querySelector('.hero');
const body = document.querySelector('body');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    hero.classList.add('hidden');
  }
  if (window.scrollY < 100) {
    hero.classList.remove('hidden');
  }
  // console.log('Scrolling...');
  // console.log(window.scrollY);
});

const arrow = document.querySelector('.arrow');
const scrollToPlay = document.querySelector('.scrollToPlay');
const whereIsB = document.querySelector('.where');

window.addEventListener('scroll', () => {
  if (window.scrollY > 230) {
    scrollToPlay.classList.add('hidden');
    arrow.classList.add('hidden');
    whereIsB.classList.remove('hidden');
  }
  if (window.scrollY < 230) {
    scrollToPlay.classList.remove('hidden');
    arrow.classList.remove('hidden');
    whereIsB.classList.add('hidden');
  }
});
