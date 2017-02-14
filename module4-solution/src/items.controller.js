(function() {
	'use strict';

	angular.module('MenuApp')
		.controller('ItemsController', ItemsController);

	// 'items' is injected through state's resolve
	ItemsController.$inject = ['items', '$stateParams']
	function ItemsController(items, $stateParams) {
		var itemsCtrl = this;
		itemsCtrl.categoryShortName = $stateParams.categoryShortName;
		itemsCtrl.items = items.data;
	}

})();