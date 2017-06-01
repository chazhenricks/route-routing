"use strict";

var app = angular.module("RouteRouting", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/route66', {
        templateUrl: "./partials/route66.html",
        controller: "Route66Ctrl"
    })
    .when('/blueridge', {
        templateUrl: "./partials/blueridge.html",
        controller: "BlueRidgePrkwayCtrl"
    })
    .otherwise('/');
});
