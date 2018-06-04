(function() {

    var shopApp = angular.module('shopApp', []);

    var ShopController1 = shopApp.controller('ShopController1', ShopController1);
    var ShopController2 = shopApp.controller('ShopController2', ShopController2);

    var ShoppingListService = shopApp.service('ShoppingListService',ShoppingListService);
    var ShoppingListFactory = shopApp.factory('ShoppingListFactory',ShoppingListFactory);

    ShopController1.$inject = ['ShoppingListService', 'ShoppingListFactory'];



    function ShopController1(ShoppingListFactory) {
        var shop = this;
        var list = [];
        
        shop.addItem = function(name,qty) {
            ShoppingListFactory.addItemL1(name,qty);
        };

        shop.list = ShoppingListFactory.getList();

        shop.removeItem = function($index) {
            ShoppingListFactory.removeItemL1($index);
        };

    
    } //shop fn


    function ShoppingListFactory() {
       
        var list = [];
        var list2 = [];

        return {

            addItemL1: function(name,qty) {
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

            },//addItemL1

            addItemL2: function(name,qty) {
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

                list2.push(item);
                return list2;
            },

            removeItemL1: function($index) {
                list.splice($index, 1);
                return list;
            },

            removeItemL2: function($index) {
                list2.splice($index, 1);
                return list2;
            },

            getList: function() {
                return list;
            },

            getList2: function() {
                return list2;
            }


        }//return

    }//ShoppingListFactory





    function ShoppingListService() {
        var service = this;
        var list = [];
        var list2 = [];

        service.addItemL1 = function(name,qty) {
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

        },

        service.addItemL2 = function(name,qty) {
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

            list2.push(item);
            return list2;

        },

        service.removeItemL1 = function($index) {
            list.splice($index, 1);
            return list;
        },

        service.removeItemL2 = function($index) {
            list2.splice($index, 1);
            return list2;
        },


        service.getList = function() {
            return list;
        },

        service.getList2 = function() {
            return list2;
        };

    }//ShoppingListService

    


    function ShopController2(ShoppingListService) {
        var shop = this;
        var list = [];
       
        shop.addItem = function(name,qty) {
            ShoppingListService.addItemL2(name,qty);
        };

        shop.list = ShoppingListService.getList2();

        shop.removeItem = function($index) {
            ShoppingListService.removeItemL2($index);
        };


    }



})();