(function() {
	"use strict";

	angular.module('public')
		.controller('MyInfoController', MyInfoController);

	MyInfoController.$inject = ['UserService', 'ApiPath'];

	function MyInfoController(UserService, ApiPath) {
		var $ctrl = this;
		$ctrl.basePath = ApiPath;
		
		$ctrl.$onInit = function() {
			$ctrl.userInfo = UserService.getUserInfo();
		};
	}


})();