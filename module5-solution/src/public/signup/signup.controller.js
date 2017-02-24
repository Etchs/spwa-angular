(function() {
	"use strict";

	angular.module('public')
		.controller('SignupController', SignupController);

	SignupController.$inject = ['MenuService'];

	function SignupController(MenuService) {
		var $ctrl = this;

		$ctrl.submit = function() {
			var response = MenuService.getMenuItem($ctrl.shortname);
			if (response.error) {
				$ctrl.invalidShortname = true;
			} else {
				// TODO: use UserService to save user information
				$ctrl.completed = true;
			}
		};
	}


})();