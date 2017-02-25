(function() {
	"use strict";

	angular.module('public')
		.controller('SignupController', SignupController);

	SignupController.$inject = ['MenuService', 'UserService'];

	function SignupController(MenuService, UserService) {
		var $ctrl = this;

		$ctrl.submit = function() {
			var response = MenuService.getMenuItem($ctrl.shortname);
			if (response.error) {
				$ctrl.invalidShortname = true;
			} else {
				UserService.saveUserInfo({
					firstname: $ctrl.firstname,
					lastname: $ctrl.lastname,
					email: $ctrl.email,
					phone: $ctrl.phone,
					favorite: response
				});
				$ctrl.completed = true;
			}
		};
	}


})();