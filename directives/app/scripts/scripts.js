(function() {

    var shopApp = angular.module('shopApp', []);

    var ShopController1 = shopApp.controller('ShopController1', ShopController1);
    var ShopController2 = shopApp.controller('ShopController2', ShopController2);

    var ShoppingListService = shopApp.service('ShoppingListService',ShoppingListService);

    //ShopController1.$inject = ["ShoppingListService"];


    function ShopController1() {
        var shop = this;
        var list = [];
        //var shoplist = ShoppingListFactory();

        shop.addItem = function(name, qty) {
            var num;
            var item = {};
            item.name = name;
            item.qty = qty;
            num = String(item.qty);
            //rounded
            if (num.length > 1) {
                item.qty = item.qty;
            } else
            if (num.length == 1) {
                item.qty = String(0) + item.qty;
            }

            list.push(item);
            return list;
        };

        shop.list = list;
        

        shop.removeItem = function($index) {
            list.splice($index, 1);
            return list;
        };



    } //shop fn



    function ShoppingListFactory() {
    		


    }//ShoppingListFactory



    


    function ShopController2() {

        var shop2 = this;
        var list = [];

        shop2.addItem = function(name, qty) {
            var num;
            var item = {};
            item.name = name;
            item.qty = qty;
            num = String(item.qty);
            //rounded
            if (num.length > 1) {
                item.qty = item.qty;
            } else
            if (num.length == 1) {
                item.qty = String(0) + item.qty;
            }

            list.push(item);
            return list;
        };

        shop2.list = list;

        shop2.removeItem = function($index) {
            list.splice($index, 1);
            return list;
        };

    }



})();