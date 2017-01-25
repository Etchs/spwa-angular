(function() {
	'use strict';

	angular.module('LunchCheck', [])
		.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {
		$scope.input = '';
		$scope.message = '';
		$scope.msgColor = 'redmsg';
		$scope.boxBorder = {
			green: false,
			red: false
		};

		function isNotEmpty(string) {
			return (string.replace(/\s/g, '').length > 0);
		}

		$scope.checkIfTooMuch = function() {
			var items = $scope.input.split(',').filter(isNotEmpty);
			var n = items.length;
			if (n == 0) {
				$scope.message = 'Please enter data first';
				$scope.boxBorder.green = false;
				$scope.boxBorder.red = true;
				$scope.msgColor = 'redmsg';
			} else if (n <= 3) {
				$scope.message = 'Enjoy!';
				$scope.boxBorder.red = false;
				$scope.boxBorder.green = true;
				$scope.msgColor = 'greenmsg';
			} else {
				$scope.message = 'Too much!';
				$scope.boxBorder.red = false;
				$scope.boxBorder.green = true;
				$scope.msgColor = 'greenmsg';
			}
		};
	}
})();