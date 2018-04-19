/*

    calls api twice using $http service and through the handling of a promise returned by server

*/


var myApp = angular.module('myApp', []);

//api base path
const ApiBasePath = myApp.constant('ApiBasePath','http://herokuapp.com');

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

    menu.logMenuItems = function(shortName) {
        var promise = MenuCategoriesService.logMenuItems(shortName);
        promise.then((res) => {
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    };

}//fn

MenuCategoriesService.$inject = ['$http','ApiBasePath'];

function MenuCategoriesService($http,ApiBasePath) {
    var service = this;

    service.getMenuCategories = function() {
       var response = $http({
           method: "GET",
           url: (ApiBasePath + "/categories.json")
           //url: "./categories.json"
       });
       //promise response
       return response;
        
    };// getMenuCategories

    service.logMenuItems = function(short_name) {
        var response = $http({
            method: "GET",
            url: (ApiBasePath + "/menu_items.json"),
            params: {
                category: short_name
            }
        });

        return response;



    };// logMenuItems





}//fn






