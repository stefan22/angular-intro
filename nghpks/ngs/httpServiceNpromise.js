/*
    this is very easy...$http service in order to grab some json data from either a public api or some local json file.
    
    I'm using a controller that uses ng-repeat to go through the list of categories
    This file calls a method inside of controller to get categories on a service function
    The service function then uses $http to get & return this data
    
    Last (but not on a executional order) is that this time I'm using a promise to make a call to this service method
    
    So, json call grab categories and display categories - the end.

*/


var myApp = angular.module('myApp', []);

var MenuCategoriesController = myApp
.controller('MenuCategoriesController', MenuCategoriesController);

var MenuCategoriesService = myApp
.service('MenuCategoriesService', MenuCategoriesService);

MenuCategoriesController.$inject = ['MenuCategoriesService'];

function MenuCategoriesController(MenuCategoriesService) {
    var menu = this;

    var promise = MenuCategoriesService.getMenuCategories();
    promise.then((res) => {
        menu.categories = res.data;

    })
    .catch((res) => {
        console.log('something went wrong');
    });

}//fn

MenuCategoriesService.$inject = ['$http'];

function MenuCategoriesService($http) {
    var service = this;

    service.getMenuCategories = function() {
       var response = $http({
           method: "GET",
           //url: "http://herokuapp.com/categories.json"
           url: "./categories.json"
       });
       //promise response
       return response;
        


    };// getMenuCategories





}//fn






