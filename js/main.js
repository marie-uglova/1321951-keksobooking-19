'use strict';

var PIN_WIDTH = 50;
var PIN_HEIGHT = 70;
var PIN_HEIGHT_TAIL = 84;
var MOUSE_KEY = 0;
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
var mapPinTemplateElement = document.querySelector('#pin').content.querySelector('.map__pin');
var mapPinMainElement = document.querySelector('.map__pin--main');
var mapFilterElement = document.querySelector('.map');
var mainFormElement = document.querySelector('.ad-form');
var allInputsAndSelects = document.querySelectorAll('.ad-form fieldset');
var inputAddress = document.querySelector('#address');
var submit = document.querySelector('.ad-form__submit');
var selectRoomNumber = document.querySelector('#room_number');
var selectCapacity = document.querySelector('#capacity');
var mapPinMainPositionLeft = Math.floor(mapPinMainElement.offsetLeft + mapPinMainElement.offsetWidth / 2);
var mapPinMainPositionTop = Math.floor(mapPinMainElement.offsetTop - mapPinMainElement.offsetHeight / 2);
var mapPinMainPositionTopTail = Math.floor(mapPinMainElement.offsetTop + PIN_HEIGHT_TAIL);

var disableInputsAndSelects = function () {
  for (var i = 0; i < allInputsAndSelects.length; i++) {
    allInputsAndSelects[i].setAttribute('disabled', 'disabled');
  }
};
disableInputsAndSelects();

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
  var mapPinElement = mapPinTemplateElement.cloneNode(true);
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

var activateInputsAndSelects = function () {
  allInputsAndSelects.forEach(function (el) {
    el.removeAttribute('disabled');
  }
  );
};

inputAddress.value = mapPinMainPositionLeft + ', ' + mapPinMainPositionTop;

var getMapPinMainCoors = function () {
  inputAddress.value = mapPinMainPositionLeft + ', ' + mapPinMainPositionTopTail;
};

var activateForm = function () {
  activateInputsAndSelects();
  getMapPinMainCoors();
  mapFilterElement.classList.remove('map--faded');
  mainFormElement.classList.remove('ad-form--disabled');
};

mapPinMainElement.addEventListener('mousedown', function (evt) {
  if (evt.button === MOUSE_KEY) {
    activateForm();
  }
});

mapPinMainElement.addEventListener('keydown', function (evt) {
  if (evt.code === 'Enter') {
    activateForm();
  }
});

var validateRoomsAndCapacity = function (sel) {
  if (selectRoomNumber.value >= selectCapacity.value) {
    sel.setCustomValidity('');
  } else {
    sel.setCustomValidity('Что-то тут не так');
  }
};

submit.addEventListener('click', function () {
  validateRoomsAndCapacity(selectRoomNumber);
});
