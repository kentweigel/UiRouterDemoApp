/// <reference path="../../angular.js" />

(function iife() {
    'use strict';

    angular.module('app')
        .controller('CarController', CarController);

    CarController.$inject = ['carData'];

    function CarController(carData) {
        var vm = this;

        vm.cars = [];

        getCars();

        function getCars() {
            carData.getCars()
                .then(function (result) {
                    vm.cars = result;

                })
                .catch(function (error) {
                    console.log('Call to CarController.getCars failed, status: ' + error.status + ' : ' + error.statusText);
                });
        }
    }
})();
