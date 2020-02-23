'use strict';

(function () {

  var PIN_HEIGHT_TAIL = 84;

  var mapPinMainElement = document.querySelector('.map__pin--main');
  var inputAddress = document.querySelector('#address');
  var mapPinMainPositionLeft = Math.floor(mapPinMainElement.offsetLeft + mapPinMainElement.offsetWidth / 2);
  var mapPinMainPositionTop = Math.floor(mapPinMainElement.offsetTop - mapPinMainElement.offsetHeight / 2);
  var mapPinMainPositionTopTail = Math.floor(mapPinMainElement.offsetTop + PIN_HEIGHT_TAIL);
  var submitButton = document.querySelector('.ad-form__submit');
  var selectRoomNumber = document.querySelector('#room_number');
  var selectCapacity = document.querySelector('#capacity');

  inputAddress.value = mapPinMainPositionLeft + ', ' + mapPinMainPositionTop;

  submitButton.addEventListener('click', function () {
    validateRoomsAndCapacity(selectRoomNumber);
  });

  function validateRoomsAndCapacity(select) {
    if (selectRoomNumber.value >= selectCapacity.value) {
      select.setCustomValidity('');
    } else {
      select.setCustomValidity('Что-то тут не так');
    }
  }

  function setMapPinMainCoordinates() {
    inputAddress.value = mapPinMainPositionLeft + ', ' + mapPinMainPositionTopTail;
  }

  window.form = {
    mapPinMainElement: mapPinMainElement,
    setMapPinMainCoordinates: setMapPinMainCoordinates,
  };

})();
