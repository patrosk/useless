// HERO IMAGE SPIN ON MOUSEOVER
const heroImage = document.querySelector('.hero picture img');

heroImage.addEventListener('mouseover', () => {
  heroImage.classList.add('spin-animation');

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  delay(2000).then(() => heroImage.classList.remove('spin-animation'));
});

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
});

// TEXT FADE OUT/IN
const arrow = document.querySelector('.arrow');
const scrollToPlay = document.querySelector('.scrollToPlay');
const whereIsB = document.querySelector('.where');

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    scrollToPlay.classList.add('hidden');
    arrow.classList.add('hidden');
    whereIsB.classList.remove('hidden');
  }
  if (window.scrollY < 150) {
    scrollToPlay.classList.remove('hidden');
    arrow.classList.remove('hidden');
    whereIsB.classList.add('hidden');
  }
});

// RANDOM NUMBER GENERATOR
const randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

// LOOK FOR BAMFORD / CLICK ON HIDING PLACE
const hidingPlaces = document.querySelectorAll('.game-container div');
const questions = document.querySelector('.questions');

hidingPlaces.forEach((hidingPlace) => {
  const image = hidingPlace.querySelector('img');
  const id = hidingPlace.querySelector('img').id;
  const congrats = document.querySelector('.congrats');
  const fail = document.querySelector('.fail p');

  image.addEventListener('click', () => {
    if (id == randomNumber) {
      console.log('Hooray!');
      gameContainer.classList.add('hidden');
      questions.classList.add('hidden');
      congrats.classList.remove('hidden');
      congrats.classList.add('bringtofront');
      fail.classList.add('hidden');
    } else {
      const i = Math.floor(Math.random() * 6);
      const failMessage = failMessages[i];

      fail.textContent = failMessage;
      fail.classList.add('fail-animation');

      function delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }
      delay(500).then(() => fail.classList.remove('fail-animation'));

      console.log('Booo');
    }
  });
});

// MAKE SURE YOU'RE SENT TO TOP OF PAGE ON RELOAD
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
