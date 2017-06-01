"use strict";

app.controller("BlueRidgePrkwayCtrl", function($scope, RouteFactory){

    RouteFactory.getRoutes()
    .then((response)=>{
        $scope.highway = response;
    });
});
