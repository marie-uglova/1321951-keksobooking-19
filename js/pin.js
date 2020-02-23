'use strict';

(function () {

  var PIN_WIDTH = 50;
  var PIN_HEIGHT = 70;

  var mapPinsElement = document.querySelector('.map__pins');
  var mapPinTemplate = document.querySelector('#pin').content.querySelector('.map__pin');

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
    createMapPin: createMapPin,
  };

})();
