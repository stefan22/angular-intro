/*
    shoppinglist except this time are two separate/independent shoppinglist, unlike the other
    one with two controllers and one service or just one controller and no service/scope
    Now shoppinglist sitting side-by-side.
    I'm using a shoppinglist service but can't be a singleton because dont want to use the
    same one for both lists. Each independent from each other.
    2 separate controllers: one for shoppinglist1 & another controller responsible for
    shoppinglist2. One for max-item limit and no limit.

    We dont need to register the service, cause we dont want angular to create the 
    shoppinglist service for us.
*/


var myApp = angular.module('myApp', []);

//AddToListController controller
var ShoppingListController1 = myApp
.controller('ShoppingListController1', ShoppingListController1);

var ShoppingListController2 = myApp
.controller('ShoppingListController2', ShoppingListController2);

var ShoppingListFactory = myApp.factory('ShoppingListFactory', ShoppingListFactory);

ShoppingListController1.$inject = ['ShoppingListFactory'];
ShoppingListController2.$inject = ['ShoppingListFactory'];

//list1 controller
function ShoppingListController1(ShoppingListFactory) {
    var list1 = this;

    //use factory to create new shopping list service
    var shoppingList = ShoppingListFactory();//max number is undefined here

    list1.items = shoppingList.getItems();

    list1.itemName = '';
    list1.itemQuantity = 0;

    list1.addItem = function() {
        shoppingList.addItem(list1.itemName, list1.itemQuantity);
    };

    list1.removeItem = function(index) {
        shoppingList.removeItem(index);
    };


}

function ShoppingListController2(ShoppingListFactory) {
    var list2 = this;

    //use factory to create new shopping list service
    var shoppingList = ShoppingListFactory(3);

    list2.items = shoppingList.getItems();

    list2.itemName = '';
    list2.itemQuantity = 0;

    list2.addItem = function() {
        try {
            shoppingList.addItem(list2.itemName, list2.itemQuantity);
        }
        catch(error) {
            list2.errorMessage = error.message;
        }   
    };

    list2.removeItem = function(index) {
        shoppingList.removeItem(index);
    };

}


//shoppinglist service -when not specified assumed unlimited
function ShoppingListService(maxItems) {
    var service = this;

    //shopping list
    var items = [];

    service.addItem = function(itemName, quantity) {
        //if no maxItems defined,assumed there's none so unlimited
        if((maxItems === undefined) ||
           (maxItems !== undefined) && (items.length < maxItems)) {

           var item = {
               name: itemName,
               quantity: quantity
           };
           items.push(item);
        
        }//if
        else {//not met conditions then throw an error
            throw new Error("Max items (" + maxItems + ") reached.");
        }
    
    };

    service.removeItem = function(index) {
        items.splice(index,1);
    };

    service.getItems = function() {
        return items;
    };

}


/*
    factory fn that takes the max number of items, and it will return
    a new shopping list service, passing it the max number of items.
    So it returns a function that takes an argument(max number of items)
    that returns the shoppinglist service

*/


//shoppinglist factory
function ShoppingListFactory() {
    var factory = function(maxItems) {
        return new ShoppingListService(maxItems);
    };
    return factory;
}




























