'use strict';

(function () {

  var MOUSE_KEY_LEFT = 0;
  var ENTER_CODE = 'Enter';

  function randomizeInteger(min, max) {
    var rand = min + Math.random() * (max - min);

    return Math.floor(rand);
  }

  window.utils = {
    MOUSE_KEY_LEFT: MOUSE_KEY_LEFT,
    ENTER_CODE: ENTER_CODE,
    randomizeInteger: randomizeInteger,
  };

})();
