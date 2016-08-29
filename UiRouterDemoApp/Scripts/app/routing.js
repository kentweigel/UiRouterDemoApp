/// <reference path="../angular.js" />
/// <reference path="../angular-ui-router.js" />

(function iife() {
    'use strict';

    angular.module('app', ['carData', 'motorcycleData', 'ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/cars");

            $stateProvider
                .state('cars', {
                    url: "/cars",
                    templateUrl: "/Scripts/app/car/cars.html",
                    controller: "CarController",
                    controllerAs: "ctrl"
                })
                .state('motorcycles', {
                    url: "/motorcycles",
                    templateUrl: "/Scripts/app/motorcycle/motorcycles.html",
                    controller: "MotorcycleController",
                    controllerAs: "ctrl"
                })
                .state('about', {
                    url: "/about",
                    templateUrl: "/Home/About"
                })
                .state('contact', {
                    url: "/contact",
                    templateUrl: "/Home/Contact"
                });
        });
})();