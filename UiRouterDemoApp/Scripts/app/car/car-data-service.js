/// <reference path="../../angular.js" />

(function iife() {
    'use strict';

    angular.module('carData', [])
        .service('carData', CarData);

    function CarData($http, $q) {
        var service = this;

        service.cars = [];

        service.getCars = function () {
            if (service.cars.length > 0) {
                return $q.when(service.cars);
            }
            else {
                console.log('Requesting car data from server.');
                return $http.get(/*service.getBaseLocation() +*/ 'Api/CarApi/', { params: { timeout: 300 } })
                    .then(function (data /*, status, headers, config*/) {
                        service.cars = data.data;
                        return service.cars;
                    })
                    .catch(function (error) {
                        console.log(error);
                        return error;
                    });
            }
        }

        //service.getBaseLocation = function () {
        //    var baseUrlElement = document.getElementById("baseUrl");
        //    var baseUrl = baseUrlElement.value;

        //    return baseUrl;
        //}

        return service;
    }
})();