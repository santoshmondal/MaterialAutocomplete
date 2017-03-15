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
        var deferred = $q.defer();
        var results = (query != '') ? $scope.createFilterFor(query) : $scope.states;

        $timeout(function(){ deferred.resolve( results );}, Math.random() * 1000, false);
        return deferred.promise;
    };


    $scope.createFilterFor = function(query) {
        var lowercaseQuery = angular.lowercase(query);

        var newStates = allStates.filter(function(elem, index){
            if(elem.value.toLowerCase().indexOf(lowercaseQuery) != -1) {
                return elem;
            }
        });


        return  newStates;
    };
}]);


