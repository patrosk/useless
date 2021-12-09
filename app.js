// HERO IMAGE FADE OUT/IN
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

// TEXT FADE OUT/IN
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

// RANDOM NUMBER GENERATOR
const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

// CLICK ON HIDING PLACE
const hidingPlaces = document.querySelectorAll('.game-container div');
const questions = document.querySelector('.questions');

hidingPlaces.forEach((hidingPlace) => {
  const image = hidingPlace.querySelector('img');
  const id = hidingPlace.querySelector('img').id;
  const congrats = document.querySelector('.congrats');

  image.addEventListener('click', () => {
    if (id == randomNumber) {
      console.log('Hooray!');
      gameContainer.classList.add('hidden');
      questions.classList.add('hidden');
      congrats.classList.remove('hidden');
    } else {
      console.log('Booo');
    }
  });
});
