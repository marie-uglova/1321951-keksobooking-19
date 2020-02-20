'use strict';

(function () {

  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;

  var mapPinsElement = document.querySelector('.map__pins');
  var mapPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

  /* размножаем 8 раз fragment с mapPin внутри и вставляем в mapPinsElement */
  function renderAdvertisements(array) {
    var fragment = document.createDocumentFragment(); // пустой фрагмент
    for (var i = 0; i < 8; i++) {
      fragment.appendChild(createMapPin(array[i]));
    }
    mapPinsElement.appendChild(fragment);
  }

  /* клонируем mapPin и создаем свойства */
  function createMapPin(advertisement) {
    var mapPinElement = mapPinTemplate.cloneNode(true);
    mapPinElement.querySelector('img').setAttribute('src', advertisement.author.avatar);
    mapPinElement.querySelector('img').setAttribute('alt', advertisement.offer.title);
    mapPinElement.style.left = advertisement.location.x - PIN_WIDTH / 2 + 'px';
    mapPinElement.style.top = advertisement.location.y - PIN_HEIGHT + 'px';

    return mapPinElement;
  }

  window.pin = {
    mapPinsElement: mapPinsElement,
    renderAdvertisements: renderAdvertisements,
  };

})();
