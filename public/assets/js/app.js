/**
 * Created by santosh on 3/15/17.
 */
var app = angular.module("app", ['ngMaterial']);

app.controller("first", ['$scope', '$timeout', '$q', '$log', function($scope, $timeout, $q, $log){


    $scope.simulateQuery = false;
    $scope.isDisabled    = false;

    $scope.states = function() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

        return allStates.split(/, +/g).map( function (state) {
            return {
                value: state.toLowerCase(),
                display: state
            };
        });
    };

    $scope.querySearch = function(query) {
        var results = query ? $scope.states.filter($scope.createFilterFor(query) ) : $scope.states,
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
    };

    $scope.searchTextChange   = function(text) {
        $log.info('Text changed to ' + text);
    };

    $scope.newState = function(state) {
        alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    };

    $scope.createFilterFor = function(query) {
        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
            return (state.value.indexOf(lowercaseQuery) === 0);
        };
    };
}]);


