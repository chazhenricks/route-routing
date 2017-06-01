"use strict";

app.controller("Route66Ctrl", function($scope, RouteFactory){
    RouteFactory.getRoutes()
    .then((response)=>{
        $scope.highway = response;
    });
});
