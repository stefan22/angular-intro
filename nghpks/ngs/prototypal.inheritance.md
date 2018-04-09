## prototypal inheritance & Scope Inheritance

- Inheritance is when an object or a class is based on another object or a class (parent)
  using the same implementation and/ or the same values.

```
    ex: 
        Animal object or class
            - properties: number of legs
            - method: walk() 


        Dog object or class             // where dog has access to the number of legs
            - number of legs            // properties and also the walk method.
            - walk


```

> Object oriented inheritance is based on classes

** Prototypal inheritance is based in object instances
    + the original object becomes the prototype for all subsequently created objects.
    + it's called prototype chain because it doesn't have to be limited to just one
      object in its subsequent child, it can have grandchildren and so forth. In other
      words you can create another object that is based on the child object and therefore
      the current parent will then become the grandparent of that newly created object. 

![](../images/protoinheritance.png)


```
    var parent = {
        value: "parentValue",
        obj: {
            objValue: "parentObjValue"
        },
        walk: function() {
            console.log("walking");
        }
    
    };

    var child = Object.create(parent);
    console.log("Child - child.value: ", child.value);
    console.log("Child - child.obj.objValue: ", child.obj.objValue);
    console.log("Parent- parent.value: ", parent.value);
    console.log("Parent- parent.value: ", parent.value);
    console.log("Parent- parent.obj.objValue: ", parent.obj.objValue);
    console.log("Parent: ", parent);
    console.log("Child: ", child);

```

## Scope Inheritance

- It's not common/good practice to have one controller that handles everything in your page.
- It's much easier to code smaller pieces of functionality that are responsible for smaller   
  parts of your page.
- When you declare that a controller is responsible for a part of your page, some natural 
  nesting of controllers will occur.
- Therefore the scope service/ scope of the outer controller, is available to the inner
  controllers.


  ![](../images/scopeInheritance.png)

<br/>

  ![](../images/scope2.png)




<br/>

  ![](../images/scope3.png)


<br/>

  ![](../images/controllersyntax.png)


<br/>

  ![](../images/scope4.png)


  <br/>

  ![](../images/scope5.png)



:checkered_flag:

```
(function() {
'use strict';

angular.module('isApp', [])
.controller('ParentController', ParentController)
.controller('ChildController', ChildController);

ParentController.$inject = ['$scope'];
ChildController.$inject = ['$scope'];

/*

(2) cause when we call the angular.controller method, the function value that is passed to it
	is treated as a function constructor, so there's going to be a 'new' in front and 'this'
	is going to point to the instance of parentController in this case

*/

function ParentController($scope) {
	
	$scope.parentValue = 1;                      //set a property value
	
	$scope.pc = this;                            //sets a parent controller instance (2)
	
	$scope.pc.parentValue = 1;                   //controller value property for controller instance


}


function ChildController($scope) {

	console.log('$scope.parentValue: ', $scope.parentValue);     // it doesnt have a parent value 
                                                                     // of its own; which means is  
                                                                     // going to go up the prototype chain
	console.log('Child $scope: ', $scope);

}



})();


```
	function ParentController($scope) { // $scope only using it for first line, otherwise not needed 
	    $scope.welcome = "Hey Hey!";    // unless i need to log something	
	    var parent = this;             //new instance controller then
	    parent.value = 'parent value';
	    //or without it, just as ref to ParentController here
	    this.value = "parent value";  
	}
	
	<div ng-controller="ParentController as parent">
		{{parent.value}}


```










