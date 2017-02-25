(function() {
  "use strict";

  angular.module('common')
    .service('UserService', UserService);


  UserService.$inject = [];

  function UserService() {
    var service = this;

    service.saveUserInfo = function(userInfo) {
      service.firstname = userInfo.firstname;
      service.lastname = userInfo.lastname;
      service.email = userInfo.email;
      service.phone = userInfo.phone;
      service.favorite = userInfo.favorite;
    };

  }



})();