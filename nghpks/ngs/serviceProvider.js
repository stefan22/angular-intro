var myApp = angular.module('myApp', []);

//controller
var ShoppingListController = myApp
.controller('ShoppingListController', ShoppingListController);

//serviceProvider
var ShoppingListServiceProvider = myApp
.provider('ShoppingListService', ShoppingListServiceProvider);

// provider config values 
ShoppingListServiceProvider.config(Config);

Config.$inject = ['ShoppingListServiceProvider'];

//Config fn
function Config(ShoppingListServiceProvider) {
    ShoppingListServiceProvider.defaults.maxItems = 5;

}//Config fn


ShoppingListController.$inject = ['ShoppingListService'];

function ShoppingListController(ShoppingListService) {
    var list = this;

    list.items = ShoppingListService.getItems();

    list.itemName = '';
    list.itemQuantity = '';

    list.addItem = function() {
        try {
            ShoppingListService.addItem(list.itemName, list.itemQuantity);
        }
        catch(error) {
            list.errorMessage = error.message;
        }
    };

    list.removeItem = function(index) {
        ShoppingListService.removeItem(index);
    };


}//ShoppingListController


function ShoppingListService(maxItems) {
    var service = this;
    //list of shopping items
    var items = [];

    service.addItem = function(itemName,itemQuantity) {
        console.log(itemName,itemQuantity);
        if((maxItems === undefined) ||
           (maxItems !== undefined) && (items.length < maxItems)) {
            var item = {
                name: itemName,
                quantity: itemQuantity
            };
            items.push(item); 
            
        }//if maxItem
        else {
            throw new Error("Max items (" + maxItems + ") reached.");
        }
    };

    service.removeItem =  function(index) {
        items.splice(index,1);
    }

    service.getItems = function() {
        console.log(items);
        return items;
    }

}//ShoppingListService fn



function ShoppingListServiceProvider() {
    var provider = this;

    provider.defaults = {
        maxItems: 10
    };

    provider.$get = function() {
        var shoppingList = new ShoppingListService(provider.defaults.maxItems);
        return shoppingList;
    };






}//ShoppingListServiceProvider






/*

html
-----


<!Doctype html>
<html ng-app="myApp">
<head>
    <script type="text/javascript" src="angular/angular.js"></script>
    <script src="angular/angular-route.js"></script>
    <script src="angular/angular-loader.js"></script>
    <script src="./appfactory.js"></script>
    <link rel="stylesheet" href="main.css" />
    <title>Provider</title>
</head>
<body>   
  <div class="shop">
    <h1>Custom Service Provider</h1>
    <div class="addlist" ng-controller="ShoppingListController as list">
        <h3>Shopping list 1</h3>

        <input type="text" id="item" class="inputfield" ng-model="list.itemName" placeholder="item name" />

        <input type="number" id="qty" class="inputfield" ng-model="list.itemQuantity" placeholder="quantity" />

        <button ng-click="list.addItem();">Add Item</button>
<br/>
<br/>
<br/>
{{list.itemName}}  {{list.itemQuantity}}

        <ul>
            <li ng-repeat="item in list.items">
                {{item.name}}, qty: {{item.quantity}}
            <button ng-click="list.removeItem($index);">Remove item</button>
            </li>
           
        </ul>
        <div class="error">Error: {{list.errorMessage}}</div>

    </div>
    <!-- endof controller -->

  </div>
<!-- endof shop -->










  
</body>
</html>








*/























