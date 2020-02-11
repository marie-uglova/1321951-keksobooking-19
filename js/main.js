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
var mapPinsElement = document.querySelector('.map__pins');
var mapPinsWidth = mapPinsElement.offsetWidth;

var randomizeInteger = function (min, max) {
  var rand = min + Math.random() * (max - min);

  return Math.floor(rand);
};

var generateAdvertisements = function () {
  var advertisements = [];
  for (var i = 0; i < 8; i++) {
    advertisements.push({
      author: {
        avatar: 'img/avatars/user' + (i + 1).toString().padStart(2, '0') + '.png'
      },
      offer: {
        title: titles[i],
        address: [location.x, location.y].toString(),
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
        x: randomizeInteger(0, mapPinsWidth),
        y: randomizeInteger(130, 630)
      }
    });
  }
  return advertisements;
};

var advertisements = generateAdvertisements();

/* клонируем mapPin и создаем свойства */
var createMapPin = function (advertisement) {
  var mapPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');
  var mapPinElement = mapPinTemplate.cloneNode(true);
  mapPinElement.querySelector('img').setAttribute('src', advertisement.author.avatar);
  mapPinElement.querySelector('img').setAttribute('alt', advertisement.offer.title);
  mapPinElement.style.left = advertisement.location.x - PIN_WIDTH / 2 + 'px';
  mapPinElement.style.top = advertisement.location.y - PIN_HEIGHT + 'px';

  return mapPinElement;
};

/* размножаем 8 раз fragment с mapPin внутри и вставляем в mapPinsElement */
var renderAdvertisements = function (array) {
  var fragment = document.createDocumentFragment(); // пустой фрагмент
  for (var i = 0; i < 8; i++) {
    fragment.appendChild(createMapPin(array[i]));
  }
  mapPinsElement.appendChild(fragment);
};

renderAdvertisements(advertisements);
