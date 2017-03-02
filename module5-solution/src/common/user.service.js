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

    service.getUserInfo = function() {
      return {
        firstname: service.firstname,
        lastname: service.lastname,
        email: service.email,
        phone: service.phone,
        favorite: service.favorite
      };
    };

  }



})();