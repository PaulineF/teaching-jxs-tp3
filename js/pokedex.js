var pokeApp = angular.module('pokedex', ['ngResource']);

pokeApp.config(['$resourceProvider', function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

var pokeApiUrl = "http://pokeapi.co/"
var pokemon = {name: "t"};
var app = angular.module("pokedex", ['ngResource']);

app.controller("pokedexCtrl", function($scope, $log, $http, $resource) {
    $scope.$log = $log;
       /* $scope.pokemons = [
            {value: 0, displayName: 'Pikatchu'},
            {value: 1, displayName: 'Salameche'},
            {value: 2, displayName: 'Rondoudou'},
            {value: 3, displayName: 'Carapuce'},
            {value: 4, displayName: 'Bulbizarre'},
        ];
*/
    $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v1/pokedex/1'
    }).then(function successCallback(response) {
        //console.log(response.data)
        $scope.pokemons = response.data.pokemon;
    });

    $scope.go = function(url){
        console.log(url);
        var test = $resource("http://pokeapi.co/"+url)
        pokemon = test.get({}, function() {

            //user.abc = true;
            pokemon.$save();
        });
        console.log(pokemon);
    }



})

app.controller("affichage", function($scope, $resource){
    $scope.pokemonname = pokemon.name;
});