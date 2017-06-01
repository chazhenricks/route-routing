"use strict";

app.controller("BlueRidgePrkwayCtrl", function($scope, RouteFactory){

    RouteFactory.getRoutes()
    .then((response)=>{
        response.forEach(function(element){
            if (element.name === "Blue Ridge Parkway"){
                $scope.highwayName = element.name;
                $scope.highwayDescription = element.description;
            }
        });
    });

});
