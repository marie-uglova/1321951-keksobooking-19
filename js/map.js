'use strict';

(function () {

  var MOUSE_KEY_LEFT = 0;

  var allInputsAndSelects = document.querySelectorAll('.ad-form fieldset');
  var mapFilterElement = document.querySelector('.map');
  var mainFormElement = document.querySelector('.ad-form');

  disableInputsAndSelects();

  window.form.mapPinMainElement.addEventListener('mousedown', function (evt) {
    if (evt.button === MOUSE_KEY_LEFT) {
      activateForm();
    }
  });

  window.form.mapPinMainElement.addEventListener('keydown', function (evt) {
    if (evt.code === 'Enter') {
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
    window.form.activateMapPinMainCoordinates();
    mapFilterElement.classList.remove('map--faded');
    mainFormElement.classList.remove('ad-form--disabled');
  }

  function activateInputsAndSelects() {
    allInputsAndSelects.forEach(function (el) {
      el.removeAttribute('disabled');
    }
    );
  }

})();
