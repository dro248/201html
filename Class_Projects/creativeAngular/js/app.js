(function() {
  var app = angular.module('storeFront', []);

  app.controller('StoreController', function(){
    this.flavors = flavors;
  });

  var flavors = [
    { name: 'Banana Nut', price: 2, thumbnail: 'img/iceCream.jpg' },
    { name: 'Bishop\'s Bash', price: 2, thumbnail: 'img/iceCream.jpg' },
    { name: 'Bronco\'s Cocoa Bean', price: 2, thumbnail: 'img/iceCream.jpg' },
    { name: 'Brownie Nut Fudge', price: 2, thumbnail: 'img/iceCream.jpg' },
    { name: 'Butter Pecan', price: 2, thumbnail: 'img/iceCream.jpg' },
    { name: 'Caramel Cashew', price: 2, thumbnail: 'img/iceCream.jpg' },
    { name: 'Cherry Cordial', price: 2, thumbnail: 'img/iceCream.jpg' },
    { name: 'Cherry Nut Divinity', price: 2, thumbnail: 'img/iceCream.jpg' },
    { name: 'Chocolate Chip Cookie Dough', price: 2, thumbnail: 'img/iceCream.jpg' },
    { name: 'Chocolate Fudge Mousse', price: 2, thumbnail: 'img/iceCream.jpg' }
  ];
})();