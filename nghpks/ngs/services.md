## services

- controllers are the view model in our model view viewmodel design pattern
- the job of the viewmodel is to represent the state of the view
- the way we represent that state if through the data within the controller's instance.
- which happens through the dollar sign scope object
- the controller should not contain much if any business logic itself, but instead..

it should pass on the responsibility of handling business logic to some other components.

#### controllers should not be used to:
- handle business login directly   [X]
- share code or state across controllers  [X]

But with multiple controllers in the same App, it's inevitable that some data will have     
to be shared across some controllers. Controllers shouldn't be used for this type of sharing.

#### the answer: to use a custom Service.

- how to register a custom service:
    + it's very similar to the way a controller is register.
    + using the module instance method called service.
    + it takes the name of the service and the function Constructor used to create service

```
    ex:
        angular.module('app',[])
        .controller('ctrl', Ctrl)
        .service('CustomService', CustomService);

```


![](../images/service.png)

    + the service angularJS creates using this method is always a Singleton.


![](../images/singleton.png)

That allows for sharing data between multiple controllers.        
So if you place some data into the service of one controller, you can immediately    
retrieve it in another controller injected with the same service.

<br/>

### example using two separate controllers with one service to create a shopping list adder

app.js
index.html

```
app.js

    //ShoppingListAddController
    var ShoppingListAddController = myApp
    .controller('ShoppingListAddController', ShoppingListAddController);

     //ShoppingListShowController
    var ShoppingListShowController = myApp
    .controller('ShoppingListShowController', ShoppingListShowController);

    //service
    var ShoppingListService = myApp.service('ShoppingListService', ShoppingListService);

    ShoppingListAddController.$inject = ['ShoppingListService'];
    ShoppingListShowController.$inject = ['ShoppingListService'];
    
    
    /*
            //adds things to array 
           //calls the service addItem and passes input field bound items 
    */

    function ShoppingListAddController(ShoppingListService) { 
        var itemAdder = this;
        itemAdder.itemName = '';
        itemAdder.itemQuantity = '';
        itemAdder.addItem = function() {  
            ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
        }
    }
    
    
    
    /*
        //also injects the service and since it's
        //the same instance, getItems returns items in array
        //so whatever was inserted to array by other 
        //controller its going to be exposed by this one.
    
    */


    function ShoppingListShowController(ShoppingListService) {  
        var showList = this;                                    
        showList.items = ShoppingListService.getItems();  
        
        //to be called from index page
        showList.removeItem = function(index) {
            ShoppingListService.removeItem(index);
        };
    }                                                                       

    /*
        //ShoppingListService function
        ------------------------------
        and it's being used as a function constructor, so we can attach things to the 
        'this' variable in order to expose them to the global scope.
    */    

    function ShoppingListService() {
        var service = this;
        //List of shopping items
        var items = [];
        service.addItem = function(itemName,quantity) { //takes to args and creates an object
            //item obj
            var item = {
                name: itemName,
                quantity: quantity
            };
            //add to arr
            items.push(item);
        };

        service.getItems = function() { //getItems exposes items array as it returns items
            return items;
        };
        
        //remove an item using its index
        
        service.removeItem = function(index) {
            items.splice(index,1);
        };
    }

```

index.html

```
index.html

    <h1>Custom Service</h1>
    <div ng-controller="ShoppingListAddController as itemAdder">
        
        <input type="text" ng-model="itemAdder.itemName" placeholder="item name" />
        <input type="number" ng-model="itemAdder.itemQuantity" placeholder="quantity" />
        <button ng-click="itemAdder.addItem();">Add Item to Shopping List</button>
        
    </div>
    <!-- ShoppingListController -->

    <div ng-controller="ShoppingListShowController as showList">
        <ol>
            <li ng-repeat="item in showList.items">
               <table>
                  <tr>
                    <td>Name: {{item.name}}</td>
                    <td>Quantity: {{item.quantity}}</td>
                    <!-- a remove button  -->
                    <td class="remove" ng-click="showList.removeItem($index);">Remove item</td>
                  </tr>
               </table>
            </li>
        </ol>

    </div>


```







