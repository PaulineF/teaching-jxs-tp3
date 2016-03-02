var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

var pokeApiUrl = "http://pokeapi.co/"


var app = angular.module("pokedex", ['ngResource']);

app.factory('searchPokemon', function($resource){
    return $resource("http://pokeapi.co/api/v2/pokemon-species/:id/", {id:'@id'});

});
app.controller("pokedexCtrl", function($scope, $log, $http, $resource, searchPokemon) {
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

app.controller("affichage", function($scope, $resource){

});
/*

        console.log(pokemon);*/