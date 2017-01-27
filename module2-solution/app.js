(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var ctrl1 = this;

  ctrl1.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  ctrl1.itemBought = function (itemIndex) {
    ShoppingListCheckOffService.itemBought(itemIndex);
  };
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var ctrl2 = this;

  ctrl2.itemsBought = ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy shopping items
  var itemsToBuy = [
    {
      name: 'cookies',
      quantity: '10'
    },
    {
      name: 'cheese',
      quantity: '2 packets of'
    },
    {
      name: 'apples',
      quantity: '4'
    },
    {
      name: 'oranges',
      quantity: '6'
    },
    {
      name: 'coffee',
      quantity: '1 cup of'
    }
  ];
  // List of bought shopping items
  var itemsBought = [];

  service.itemBought = function (itemIdex) {
    var boughtItems = itemsToBuy.splice(itemIdex, 1);
    itemsBought.push(boughtItems[0]);
  };

  service.getItemsToBuy = function () {
    return itemsToBuy;
  };
  service.getItemsBought = function () {
    return itemsBought;
  };
}

})();
