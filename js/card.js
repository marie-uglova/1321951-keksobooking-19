'use strict';

(function () {

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
  var mapPinsWidth = window.pin.mapPinsElement.offsetWidth;

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
          x: window.data.randomizeInteger(0, mapPinsWidth),
          y: window.data.randomizeInteger(130, 630)
        }
      });
    }
    return advertisements;
  };

  var advertisements = generateAdvertisements();

  window.pin.renderAdvertisements(advertisements);

})();
