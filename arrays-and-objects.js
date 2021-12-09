const objects = [
  {
    id: 0,
    object: 'drums',
    imageUrl: '/images/drums.png',
    alt: 'red drumset',
  },
  {
    id: 1,
    object: 'car',
    imageUrl: '/images/car.png',
    alt: 'green and blue car',
  },
  {
    id: 2,
    object: 'waste-bin',
    imageUrl: '/images/waste.png',
    alt: 'symbol of person throwing waste in a bin',
  },
  {
    id: 3,
    object: 'record-player',
    imageUrl: '/images/record.png',
    alt: 'red and orange record player',
  },
  {
    id: 4,
    object: 'radioactive',
    imageUrl: '/images/radioactive.png',
    alt: 'yellow radioactive symbol',
  },
  {
    id: 5,
    object: 'teapot',
    imageUrl: '/images/teapot.png',
    alt: 'blue teapot',
  },
  {
    id: 6,
    object: 'donut',
    imageUrl: '/images/donut.png',
    alt: 'pink and purple donut',
  },
  {
    id: 7,
    object: 'flower',
    imageUrl: '/images/flower.png',
    alt: 'red and pink flower',
  },
];

// console.log(objects);

const gameContainer = document.querySelector('.game-container');

objects.forEach((object) => {
  const div = document.createElement('div');
  const img = document.createElement('img');
  const id = object['id'];

  const imageUrl = object['imageUrl'];
  const alt = object['alt'];

  img.src = imageUrl;
  img.setAttribute('id', id);
  div.appendChild(img);

  // console.log(id);

  gameContainer.appendChild(div);
});
