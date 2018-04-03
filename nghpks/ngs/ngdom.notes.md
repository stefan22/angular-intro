### angular js

- in angular controllers serve the function of `ViewModel`
    + is where view data lives, view presentation logic lives

####  `angular module`
- module function returns a `module instance` 

``` ex:
        angular.module('AppOne', []);

```

#### .controller
- .controller funtion is the way to `define` the view model of our `view`

- .controller()
    + it takes `two` things:
    + the `name` of the `view` model or name of the `controller` and
    + a `function` that is `bound` to a `view`

```
    .controller('MyController', function() {


    });

```

#### sharing data with view through scope

- $ is reserved by angular => $scope
- $scope can have properties that are going to be exposed to view.

#### ng-model
- looks for any changes to the properties on $scope variable


### how to select ng dom

- ng-app, and ng-controller

```

    ex:

        var ap = document.querySelector('[ng-app]');
        ap.getAttribute('ng-app');


        var co = document.querySelectorAll('[ng-controller]');
        
        co[2].textContent;
        
        co[1].getAttribute('ng-controller');   //=> controller name
        
```



































