var meApp = angular.module("meApp", []);

//def controller
var MainController = meApp.controller('MainController', MainController);

//register filter factory
MainController.filter('likeslove', LikesloveFa);
MainController.filter('sekreplace', seekNreplace);

//inject to ctrl
MainController.$inject = ['$scope', 'likesloveFilter', 'sekreplaceFilter'];

function MainController($scope,likesloveFilter, sekreplaceFilter) {

    $scope.name = "";
    $scope.sentence = "this here needs something to be changed, maybe the apples";
    $scope.replace = "";
    
    $scope.likeslove = function() {
        var name = $scope.name;
        var loves = likesloveFilter(name);
        console.log(loves);
        // re-assign name
        $scope.name = loves;
        
    }; 

    $scope.seekNrep = function(x,y) {
        sen = $scope.sentence;
        var replace = sekreplaceFilter(sen,x,y);
        console.log(replace);
        var output = $scope.sentence = replace;
        return output;
        
    };

}//MainController


//custom filter
function LikesloveFa() {
    return function(input) {
        var input = input || '';
        //replace likes w/love
        input = input.replace('likes','loves');
        return input;
    };
}
  

//custom filter with arguments
function seekNreplace() {
    return function(input,target,replaceWith) {
        var input = input || '';
        input = input.replace(target,replaceWith);
        return input;
    }
}















