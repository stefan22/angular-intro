var meApp = angular.module('meApp', []);

var MainController = meApp.controller('MainController', MainController);

MainController.$inject = ['$scope', '$timeout'];


function MainController($scope,$timeout) {
    $scope.counter = 0;

    $scope.fireOffCounter = function() {
        $timeout(function() {
            $scope.counter++;
            console.log('incremented');
        },2000);
    };

}