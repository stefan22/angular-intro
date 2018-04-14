/*
    another example of a service between two controllers to extract function's methods
    and accessing them without $scope just with 'var name = this' to access the global scope
    for a method, function, array, variable or property.
*/


var myApp = angular.module('myApp', []);

//AddToListController controller
var AddToListController = myApp.controller('AddToListController', AddToListController);

//NeedListController controller
var NeedListController = myApp.controller('NeedListController', NeedListController);

// Service list
var ServiceList = myApp.service('ServiceList', ServiceList);

AddToListController.$inject = ['ServiceList'];

function AddToListController(ServiceList) {
    var addlist = this;
    //pass something
    if(addlist.itemName !== undefined && addlist.itemName !== "") {
        console.log(addlist.itemName);
        //add to list
        ServiceList.addToList(addlist.itemName,addlist.itemQty);

    };
}

function NeedListController(ServiceList) {
    var needlist = this;
    //items
    needlist.items = ServiceList.showTime();
    
    //remove by index (function cause i'm using a fn in index unlike items)
    needlist.remove = function(index) {
        ServiceList.remove(index)
    }

}


function ServiceList() {
    var service = this;
    var items = [];

    service.addToList = function(name,quantity) {
        var item = {
            name: name,
            quantity: quantity
        };
        items.push(item);
        console.log(items);
        console.log(item);
    }

    service.showTime = function() {
        console.log(items);
        return items;
    }
    
    service.remove = function(index) {
        //position,amount    
        items.splice(index,1);
       
    }

}


//html

/*

  <body>   
  <div class="shop">
    <h1>Shopping List</h1>
    <div class="addlist" ng-controller="AddToListController as addlist">
        <p>Enter items to your shopping list:</p>
        <input type="text" id="item" class="inputfield" ng-model="addlist.itemName" placeholder="enter item to list" />

        <p>Enter the quantity:</p>
        <input type="number" id="qty" class="inputfield" ng-model="addlist.itemQty" placeholder="enter quantity" />

        <button ng-click="addlist.addItem();">Add to List</button>
    <br/>
    <br/>
    <br/>

    {{addlist.itemName}} <br/><br/>

    {{addlist.itemQty}}

    </div>
    <!-- endof addlist -->

    <div class="needlist" ng-controller="NeedListController as needlist">
        <h2>List Items:</h2>
        <!-- list items here -->
        
        <ul>
            <li ng-repeat="item in needlist.items">{{item.name}}, qty: {{item.quantity}}
                <button ng-click="needlist.remove($index);">remove</button>
            </li>
        </ul>

    </div>

  </div>
  
  
</body>



//endof html

*/

