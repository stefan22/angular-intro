var meApp = angular.module('meApp', []);

var MainController = meApp.controller('MainController', MainController);

MainController.$inject = ['$scope'];

function MainController($scope) {
    $scope.firstName = "Stefano";
    //$scope.fullName = "";

    //#of watchers in digest cycle
    $scope.showNumberOfWatchers = function() {
        console.log("number of watchers: ", $scope.$$watchersCount);


    }; // showNumberOfWatchers

    //fullname
    $scope.setFullName = function() {
        //fullname added to scope obj
        $scope.fullName = $scope.firstName + " " + "Orandomlast";

    }; //setFullname

    //log firstname
    $scope.logFirstName = function() {
        console.log("first name is: ", $scope.firstName);
    };

    //log fullname
    $scope.logFullName = function() {
        console.log("full name is: ", $scope.fullName);
    };
   





}// MainController