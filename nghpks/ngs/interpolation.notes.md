## dependency injection (DI)

- angular service responsible for dependency injection is  `$injector`
- it's a design pattern that implements inversion of control (IoC) for resolving dependencies
- Client gets called with the dependency by some system, here the system is AngularJS
- Client is not responsible for instantiating the dependency.

```
    ex:
                                            depends on
    ShoppingCart()                          ---------------->         CardProcessing()
    //instance
    cardProc = new CardProcessing();

    //inversion of Control

    the shopping card accepts a credit card processing module as an argument

    shoppingCart(cardProc1)                                           cardProc1 = new 
                                                                      CardProcessing();


    The Shopping Cart module no longer call the card processing module, but it's
    now the cardProcessing system that calls the shopping cart module.

```


### Protecting Dependency injection
- from minification

```
    error:

    Error: $injector:unpr
    Unknown Provider

    Unknown provider: nProvider <- n -> MainController

    $scope is no longer there after minification, and that's what angular
    is looking for
    Adding [] because arrays allow for different items to exist within an array

```

### expressions  {{exp}}
 - something that evaluates to some value
 - angular expressions are tied to the scope
 - in angular similar to `eval(some_js)`
 - executed in the context of the `scope` & has access to properties on `$scope`
 - doesn't throw errors if it results in a TypeError or Reference Error
 - control flow functions (eg: `if` statements etc) are `not allowed`
 - accepts a filter or filter chain

### interpolation
- process of evaluating a string literal containing one or more placeholders,
  which are replaced with values

```
    ex:
        Message is {{ message }}

        //provided message = "hello"
        //then is interpolated into this string:

        Message is hello

        //if `$scope.message` changes, so will the interpolation result


```

#### notes

- lets say i was interpolating an image instead of 'good morning' etc    
  then i would get a 404 image error eventhough if the image exists somewhere     
  the image is likely to be fetch.      
  To prevent the error from happening and telling the browser not to fetch    
  the image at page load use `ng-src`



















