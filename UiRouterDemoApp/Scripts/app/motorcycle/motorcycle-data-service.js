/// <reference path="../../angular.js" />

(function iife() {
    'use strict';

    angular.module('motorcycleData', [])
        .service('motorcycleData', MotorcycleData);

    function MotorcycleData($http, $q) {
        var service = this;

        service.motorcycles = [];

        service.getMotorcycles = function () {
            if (service.motorcycles.length > 0) {
                return $q.when(service.motorcycles);
            }
            else {
                console.log('Requesting motorcycle data from server.');
                return $http.get(/*service.getBaseLocation() +*/ 'Api/MotorcycleApi/', { params: { timeout: 300 } })
                    .then(function (data /*, status, headers, config*/) {
                        service.motorcycles = data.data;
                        return service.motorcycles;
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