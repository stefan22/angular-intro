var shopApp = angular.module('shopApp', []);

var ShopController1 = shopApp.controller('ShopController1', ShopController1);


function ShopController1() {
	var shop1 = this;
	var list = [];

	shop1.addItem = function(name,qty) {
		var num;
		var item = {};
		item.name = name;
		item.qty = qty;
		num = String(item.qty);
		//rounded
		if(num.length > 1) {
			item.qty = item.qty;
		}else
		if(num.length == 1) {
			item.qty = String(0) + item.qty;
		}

		list.push(item);
		return list;
	};

	shop1.list = list;

	shop1.removeItem = function($index) {
		list.splice($index,1);
		return list;
	};



}//shop1 fn










var ShopController2 = shopApp.controller('ShopController2', ShopController2);


function ShopController2() {





}



















