'use strict';

var circlesServices = angular.module('circlesServices', []);

circlesServices.factory('setPositions', function () {
    return function (data, x0, y0, radius) {
        var circlesNumber = data.length,
            angle = 2 * Math.PI / circlesNumber,
            circles = [];

        angular.forEach(data, function (value, index) {
            value.coordinateX = (x0 + (Math.cos(angle * index) * radius)).toFixed(0) + 'px';
            value.coordinateY = (y0 + (Math.sin(angle * index) * radius)).toFixed(0) + 'px';
            this.push(value);
        }, circles);

        return circles;
    }
});