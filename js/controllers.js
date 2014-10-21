'use strict';

var circlesControllers = angular.module('circlesControllers', []);

circlesControllers.controller('CirclesCtrl', ['$scope', '$http', 'setPositions', function ($scope, $http, setPositions) {
    $http.get('/circles.json').success(function (data) {
        var circles = [];

        angular.forEach(data, function (value) {
            var subCircles;

            subCircles = setPositions(value.circle, 200, 200, 200);

            this.push({
                circles: subCircles
            });
        }, circles);

        $scope.circles = circles;
    });
}]);
