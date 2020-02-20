'use strict';

(function () {

  function randomizeInteger(min, max) {
    var rand = min + Math.random() * (max - min);

    return Math.floor(rand);
  }

  window.data = {
    randomizeInteger: randomizeInteger,
  };

})();


