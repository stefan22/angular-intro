var meApp = angular.module('meApp', []);

var MainController = meApp.controller('MainController', MainController);

MainController.$inject = ['$scope'];


function MainController($scope) {
    $scope.count = 0;            

    $scope.numberOfWatchers = function() {
        console.log('hit watchers');
        console.log('number of watchers: ', $scope.$$watchersCount);
        $scope.count++;

    };

    //watching count
    $scope.$watch('count', function(newvalue,oldvalue) { 
        console.log('old value: ', oldvalue);
        console.log('new value: ', newvalue);

    });


}