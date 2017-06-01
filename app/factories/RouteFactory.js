"use strict";

app.factory("RouteFactory", function($q, $http){
    var getRoutes = function(){
        return $q(function(resolve,reject){
            $http.get("./data/highways.json")
            .then((response)=>{
                var routeCollection = response.data;
                console.log("routeCollection", routeCollection);
                resolve(routeCollection.highways);
            });
        });
    };

    return {getRoutes};
});
