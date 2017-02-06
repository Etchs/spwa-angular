(function() {
	'use strict';

	angular.module('MenuApp')
		.controller('ItemsController', ItemsController);

	// 'items' is injected through state's resolve
	ItemsController.$inject = ['items', '$stateParams']
	function ItemsController(items, $stateParams) {
		var categoriesCtrl = this;
		categoriesCtrl.categoryShortName = $stateParams.categoryShortName;
		categoriesCtrl.items = items;
	}

})();