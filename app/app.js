"use strict";

const app = angular.module("routes", ["ngRoute"])
    app.config($routeProvider =>{
        $routeProvider
        .when('/', {
            templateUrl: "app/partials/highway1.html",
            controller: "highway1Ctrl"
        })
        .when('/next', {
            templateUrl:"app/partials/highway2.html",
            controller: "highway2Ctrl"
        })
        .otherwise('/')
    })