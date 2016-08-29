/// <reference path="../../angular.js" />

(function iife() {
    'use strict';

    angular.module('app')
        .controller('MotorcycleController', MotorcycleController);

    MotorcycleController.$inject = ['motorcycleData'];

    function MotorcycleController(motorcycleData) {
        var vm = this;

        vm.motorcycles = [];

        getMotorcycles();

        function getMotorcycles() {
            motorcycleData.getMotorcycles()
                .then(function (result) {
                    vm.motorcycles = result;

                })
                .catch(function (error) {
                    console.log('Call to MotorcycleController.getMotorcycles failed, status: ' + error.status + ' : ' + error.statusText);
                });
        }
    }
})();
