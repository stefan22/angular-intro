
var myApp = angular.module('myApp', []);

var ShoppingListController1 = myApp
.controller('ShoppingListController1', ShoppingListController1);

var ShoppingListService = myApp.service('ShoppingListService', ShoppingListService);

ShoppingListController1.$inject = ['ShoppingListService'];


function ShoppingListController1(ShoppingListService) {

	var list1 = this;

	// list1 addItem
	list1.addItem = function() {
		ShoppingListService.addItem(list1.itemName,list1.itemQty);
		
	};

	list1.shoppingList = ShoppingListService.showList();

}


function ShoppingListService() {

	var service = this;

	var shoppingList = [];

	service.addItem = function(itemName,itemQty) {
		console.log(itemName,itemQty);
		var item = {
			name: itemName,
			qty: itemQty
		};

		console.log(item);
		// add to array
		shoppingList.push(item);
		console.log(shoppingList);

	};

	service.showList = function() {
		return shoppingList;
	};

	
		



}
