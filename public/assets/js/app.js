/**
 * Created by santosh on 3/15/17.
 */
var app = angular.module("app", ['ngMaterial']);

app.controller("first", ['$scope', '$timeout', '$q', '$log', function($scope, $timeout, $q, $log){


    $scope.isDisabled    = false;

    var allStates = [{'value':'Alabama', 'display':'Alabama'}, {'value':'Alaska', 'display':'Alaska'}, {'value':'California', 'display':'California'},
        {'value':'Arizona', 'display':'Arizona'}, {'value':'Arkansas', 'display':'Arkansas'}, {'value':'Colorado', 'display':'Colorado'}, {'value':'Connecticut', 'display':'Connecticut'},
        {'value':'Delaware', 'display':'Delaware'}, {'value':'Florida', 'display':'Florida'}, {'value':'Georgia', 'display':'Georgia'}, {'value':'Hawaii', 'display':'Hawaii'},
        {'value':'Idaho', 'display':'Idaho'}, {'value':'Illinois', 'display':'Illinois'}, {'value':'Indiana', 'display':'Indiana'}, {'value':'Iowa', 'display':'Iowa'}];

    $scope.states = allStates;


    $scope.querySearch = function(query) {
        return new Promise(function(resolve, reject){
            var results = [];

            if(query != '') {
                var lowercaseQuery = angular.lowercase(query);

                results = allStates.filter(function(elem, index){
                    if(elem.value.toLowerCase().indexOf(lowercaseQuery) != -1) {
                        return elem;
                    }
                });
            } else {
                results = allStates;
            }

            $timeout(function(){ resolve( results );}, Math.random() * 500, false);
        });
    };
}]);


