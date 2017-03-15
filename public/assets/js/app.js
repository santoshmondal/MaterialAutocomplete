/**
 * Created by santosh on 3/15/17.
 */
var app = angular.module("app", ['ngMaterial']);

app.controller("first", ['$scope', '$timeout', '$q', '$log', function($scope, $timeout, $q, $log){


    $scope.simulateQuery = false;
    $scope.isDisabled    = false;

    var allStates = [{'value':'Alabama', 'display':'Alabama'}, {'value':'Alaska', 'display':'Alaska'}, {'value':'California', 'display':'California'},
        {'value':'Arizona', 'display':'Arizona'}, {'value':'Arkansas', 'display':'Arkansas'}, {'value':'Colorado', 'display':'Colorado'}, {'value':'Connecticut', 'display':'Connecticut'},
        {'value':'Delaware', 'display':'Delaware'}, {'value':'Florida', 'display':'Florida'}, {'value':'Georgia', 'display':'Georgia'}, {'value':'Hawaii', 'display':'Hawaii'},
        {'value':'Idaho', 'display':'Idaho'}, {'value':'Illinois', 'display':'Illinois'}, {'value':'Indiana', 'display':'Indiana'}, {'value':'Iowa', 'display':'Iowa'}];

    $scope.states = function() {

        return $scope.states = allStates;

    };

    $scope.querySearch = function(query) {
        // $scope.states = allStates;
        var results = query ? $scope.createFilterFor(query) : $scope.states,
            deferred;
        if ($scope.simulateQuery) {
            deferred = $q.defer();
            $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
            return deferred.promise;
        } else {
            return results;
        }
    };

    $scope.selectedItemChange = function(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
        $scope.states = allStates;
    };

    $scope.searchTextChange   = function(text) {
        $log.info('Text changed to ' + text);
    };

    $scope.newState = function(state) {
        alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    };

    $scope.createFilterFor = function(query) {
        var lowercaseQuery = angular.lowercase(query);

        var newStates = allStates.filter(function(elem, index){
            if(elem.value.toLowerCase().indexOf(lowercaseQuery) != -1) {
                return elem;
            }
        });


        return $scope.states = newStates;
    };
}]);


