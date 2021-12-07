// const drums = {
//   object: 'drums',
//   imageUrl: '/images/drums.png',
//   alt: 'red drumset',
// };
// const car = {
//   object: 'car',
//   imageUrl: '/images/car.png',
//   alt: 'green and blue car',
// };
// const wasteBin = {
//   object: 'waste-bin',
//   imageUrl: '/images/waste.png',
//   alt: 'symbol of person throwing waste in a bin',
// };
// const recordPlayer = {
//   object: 'record-player',
//   imageUrl: '/images/record.png',
//   alt: 'red and orange record player',
// };
// const radioactive = {
//   object: 'radioactive',
//   imageUrl: '/images/radioactive.png',
//   alt: 'yellow radioactive symbol',
// };
// const teapot = {
//   object: 'teapot',
//   imageUrl: '/images/teapot.png',
//   alt: 'blue teapot',
// };
// const donut = {
//   object: 'donut',
//   imageUrl: '/images/donut.png',
//   alt: 'pink and purple donut',
// };
// const flower = {
//   object: 'flower',
//   imageUrl: '/images/flower.png',
//   alt: 'red and pink flower',
// };

const objects = [
  {
    object: 'drums',
    imageUrl: '/images/drums.png',
    alt: 'red drumset',
  },
  {
    object: 'car',
    imageUrl: '/images/car.png',
    alt: 'green and blue car',
  },
  {
    object: 'waste-bin',
    imageUrl: '/images/waste.png',
    alt: 'symbol of person throwing waste in a bin',
  },
  {
    object: 'record-player',
    imageUrl: '/images/record.png',
    alt: 'red and orange record player',
  },
  {
    object: 'radioactive',
    imageUrl: '/images/radioactive.png',
    alt: 'yellow radioactive symbol',
  },
  {
    object: 'teapot',
    imageUrl: '/images/teapot.png',
    alt: 'blue teapot',
  },
  {
    object: 'donut',
    imageUrl: '/images/donut.png',
    alt: 'pink and purple donut',
  },
  {
    object: 'flower',
    imageUrl: '/images/flower.png',
    alt: 'red and pink flower',
  },
];

// console.log(objects[0]['imageUrl']);

const gameContainer = document.querySelector('.game-container');

objects.forEach((object) => {
  const div = document.createElement('div');
  const img = document.createElement('img');

  const imageUrl = object['imageUrl'];
  const alt = object['alt'];

  img.src = imageUrl;
  div.appendChild(img);

  gameContainer.appendChild(div);
});
