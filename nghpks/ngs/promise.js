/*
   enter chocolates to the list and it throws a message: "Stay away from chocolates man!"
   
   enter more than 7 items and you get a message: "Alright, slow down speed racer!"

*/


var myApp = angular.module('myApp', []);

//controller
var ShoppingListController = myApp
.controller('ShoppingListController', ShoppingListController);

//shoppinglistservice
var ShoppingListService = myApp
.service('ShoppingListService', ShoppingListService);
//weightlossfilter service
var WeigthLossFilterService = myApp
.service('WeightLossFilterService', WeightLossFilterService);

//controller injects
ShoppingListController.$inject = ['ShoppingListService'];

//shoppinglist controller fn
function ShoppingListController(ShoppingListService) {
    var list = this;

    list.items = ShoppingListService.getItems();
    list.itemName = '';
    list.itemQuantity = 0;
    
    list.addItem = function() {
        ShoppingListService.addItem(list.itemName, list.itemQuantity);
    };

    list.removeItem = function(index) {
        ShoppingListService.removeItem(index);
    };




}//ShoppingListController



//service inject
ShoppingListService.$inject = ['$q', 'WeightLossFilterService'];

function ShoppingListService($q, WeightLossFilterService) {
    var service = this;
    //list items
    var items = [];

    service.addItem = function(name, quantity) {
        // checking the name to make sure it can be added to the list  
        var promise = WeightLossFilterService.checkName(name);

        //before using the response, making sure quantity is likewise acceptable
        promise.then(function(response) {//inside of success response function
            var nextPromise = WeightLossFilterService.checkQuantity(quantity);

            nextPromise.then(function(result) {
                //only here if everything checksout push to array
                var item = {
                    name:name,
                    quantity:quantity
                };
                items.push(item);

            }, function(errorResponse) {
                //if above promise fails,error message
                console.log(errorResponse.message);
            });

        }, function (errorResponse) {
            //if above that promise fails, error message
            console.log(errorResponse.message);
            
        });

    };//addItem

    service.removeItem = function(index) {
        items.splice(index,1);
    
    };// removeItenm

    service.getItems = function() {
        return items;

    };// getItems



}//ShoppingListService


//filter injects
WeightLossFilterService.$inject = ['$q', '$timeout']; //same at setTimeout js

//weightlossfilter fn
function WeightLossFilterService($q, $timeout) {
    var service = this;

    service.checkName = function(name) {
        //checkname first acquires the deferred object that contains the async environ
        //and sets up the result obj with a simple message(empty atm)
        var deferred = $q.defer();

        var result = {
            message:""
        };

        //timeout function that is going to simulate async behaviour    
        $timeout(function() {
            //check for chocolates
            if(name.toLowerCase().indexOf('chocolates') === -1) {
                //successful
                deferred.resolve(result);
            }
            else {
                result.message = "Stay away from chocolates man!";
                deferred.reject(result);
            }
            

        }, 3000);

        // returns promise back to caller of function, in order to make rejection/or resolution
        // of async behaviour by resolve or reject method 
        return deferred.promise;
    
    };// checkName method

    service.checkQuantity = function(quantity) {
        var deferred = $q.defer();

        var result = {
            message: ''
        };

        $timeout(() => {
            //check for max
            if(quantity < 7) {
                deferred.resolve(result);
            }
            else {
                result.message = "Alright, slow down speed racer!";
                deferred.reject(result);
            }

        },1000);

        return deferred.promise;




    };// checkQuantity method






}//WeightLossFilter fn





