(function() {
  'use strict';

  angular.module('data')
    .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$http', 'ApiBasePath'];

  function MenuDataService($http, ApiBasePath) {
    var service = this;

    // List of category items
    var items = [];

    service.getAllCategories = function() {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });
    };

    service.getItemsForCategory = function(categoryShortName) {
      var response = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      });

      return response;
    };
  }

})();