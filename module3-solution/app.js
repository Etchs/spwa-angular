(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  var ddo = {
    restrict: "E",
    templateUrl: 'foundItems.html',
    scope: {
      foundItems: '<',
      onRemove: '&'
    },
    controller: function(){},
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  ctrl.searchTerm = '';
  ctrl.found = [];

  ctrl.search = function () {
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

    promise.then(function (foundItems) {
      ctrl.found = foundItems;
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  ctrl.removeItem = function (itemIndex) {
    ctrl.found.splice(itemIndex, 1);
  };

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function(result){
      var foundItems = [];
      if(result.data) {
        result.data.menu_items.forEach(function(item, index) {
          if (item.description && item.description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(item);
          }
        });
      }
      return foundItems;
    });

    return response;
  };
}

})();
