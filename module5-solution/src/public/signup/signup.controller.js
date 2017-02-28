(function() {
	"use strict";

	angular.module('public')
		.controller('SignupController', SignupController);

	SignupController.$inject = ['MenuService', 'UserService'];

	function SignupController(MenuService, UserService) {
		var $ctrl = this;

		$ctrl.submit = function() {
			MenuService.getMenuItem($ctrl.shortname).then(function(response) {
				UserService.saveUserInfo({
					firstname: $ctrl.firstname,
					lastname: $ctrl.lastname,
					email: $ctrl.email,
					phone: $ctrl.phone,
					favorite: response.data
				});
				$ctrl.completed = true;
			}).catch(function(error){
				$ctrl.invalidShortname = true;
			});
		};
	}


})();