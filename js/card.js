'use strict';

(function () {

  var onLoad = function () {
    generateAdvertisements();
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };



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

  function generateAdvertisements() {
    var advertisements = window.load.loadData(window.load.serverUrl.GET, onLoad, onError);
    /*for (var i = 0; i < 8; i++) {
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
          x: window.utils.randomizeInteger(0, mapPinsWidth),
          y: window.utils.randomizeInteger(130, 630)
        }
      });
    }*/
    return advertisements;
  }

  //var advertisements = generateAdvertisements();

  window.map.renderAdvertisements(advertisements);

})();
