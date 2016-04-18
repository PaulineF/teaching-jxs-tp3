var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

var pokeApiUrl = "http://pokeapi.co/";

pokeApp.factory('searchPokemon', function($resource){
    return $resource("http://pokeapi.co/api/v2/pokemon-species/:id/", {id:'@id'});

});
pokeApp.controller("pokedexCtrl", function($scope, $log, $http, $resource, searchPokemon) {
    $scope.$log = $log;

    $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokedex/1'
    }).then(function successCallback(response) {
        //console.log(response.data)
        $scope.pokemons = response.data.pokemon_entries;
    });
    $scope.go = function(idPoke){
        $scope.pokemonObj = searchPokemon.get({id:idPoke});
    }
})

pokeApp.controller("affichage", function($scope, $resource){
 //$scope.watch...
});
