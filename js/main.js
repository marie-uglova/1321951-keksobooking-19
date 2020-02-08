'use strict';

document.querySelector('.map').classList.remove('map--faded');

var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;
var titles = [
  'Заголовок объявления 1',
  'Заголовок объявления 2',
  'Заголовок объявления 3',
  'Заголовок объявления 4',
  'Заголовок объявления 5',
  'Заголовок объявления 6',
  'Заголовок объявления 7',
  'Заголовок объявления 8'
];
var advertisements = [];
var fragment = document.createDocumentFragment(); // пустой фрагмент
var mapPins = document.querySelector('.map__pins');
var mapPin = document.querySelector('#pin').content.querySelector('.map__pin');
var mapPinsWidth = mapPins.offsetWidth;
var mapPinsHeight = mapPins.offsetHeight;

var randomizeInteger = function (min, max) {
  var rand = min + Math.random() * (max - min);

  return Math.floor(rand);
};

var pushMapPinsPropety = function () {
  for (var i = 0; i < 8; i++) {
    advertisements.push({
      author: {
        avatar: 'img/avatars/user' + (i + 1).toString().padStart(2, '0') + '.png'
      },
      offer: {
        title: titles[i],
        address: [location.x, location.y],
        price: 500,
        type: 'palace',
        rooms: 5,
        guests: 20,
        checkin: '12:00',
        checkout: '12:00',
        features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
        description: 'строка с описанием',
        photos: ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
      },
      location: {
        x: randomizeInteger(mapPinsWidth, mapPinsHeight),
        y: randomizeInteger(130, 630)
      }
    });
  }
};

/* клонируем mapPin */
var cloneMapPin = function (advertisement) {
  var mapPinElement = mapPin.cloneNode(true);
  mapPinElement.querySelector('img').setAttribute('src', advertisement.author.avatar);
  mapPinElement.querySelector('img').setAttribute('alt', advertisement.offer.title);
  mapPinElement.style.left = advertisement.location.x + PIN_WIDTH / 2 + 'px';
  mapPinElement.style.top = advertisement.location.y + PIN_HEIGHT + 'px';

  return mapPinElement;
};

/* размножаем 8 раз fragment с mapPin внутри */
var cloneFragment = function () {
  for (var i = 0; i < 8; i++) {
    fragment.appendChild(cloneMapPin(advertisements[i]));
  }
};

pushMapPinsPropety();

cloneFragment();

/* вставляем фрагмент в mapPins */
mapPins.appendChild(fragment);

