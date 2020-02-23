'use strict';

(function () {

  var allInputsAndSelects = document.querySelectorAll('.ad-form fieldset');
  var mapFilterElement = document.querySelector('.map');
  var mainFormElement = document.querySelector('.ad-form');

  disableInputsAndSelects();

  window.form.mapPinMainElement.addEventListener('mousedown', function (evt) {
    if (evt.button === window.utils.MOUSE_KEY_LEFT) {
      activateForm();
    }
  });

  window.form.mapPinMainElement.addEventListener('keydown', function (evt) {
    if (evt.code === window.utils.ENTER_CODE) {
      activateForm();
    }
  });

  function disableInputsAndSelects() {
    for (var i = 0; i < allInputsAndSelects.length; i++) {
      allInputsAndSelects[i].setAttribute('disabled', 'disabled');
    }
  }

  function activateForm() {
    activateInputsAndSelects();
    window.form.setMapPinMainCoordinates();
    mapFilterElement.classList.remove('map--faded');
    mainFormElement.classList.remove('ad-form--disabled');
  }

  function activateInputsAndSelects() {
    allInputsAndSelects.forEach(function (el) {
      el.removeAttribute('disabled');
    }
    );
  }

  /* размножаем 8 раз fragment с mapPin внутри и вставляем в mapPinsElement */
  function renderAdvertisements(array) {
    var fragment = document.createDocumentFragment(); // пустой фрагмент
    for (var i = 0; i < 8; i++) {
      fragment.appendChild(window.pin.createMapPin(array[i]));
    }
    window.pin.mapPinsElement.appendChild(fragment);
  }

  window.map = {
    renderAdvertisements: renderAdvertisements,
  };

})();
