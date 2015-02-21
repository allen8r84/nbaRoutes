var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q){

    this.addNewGame = function(gameObject) {
        var url = "https://api.parse.com/1/classes/" + gameObj.homeTeam;
        if(parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
            gameObject.won = true;
        } else if(parseInt(gameObj.homeTeamScore) < parseInt(gameObj.opponentScore)){
            gameObject.won = false;
        }
        return $http.post(url,gameObject);  
    };

    this.getTeamData = function(team) {
        var deferred = $q.defer();
        var url = 'https://api.parse.com/1/classes/' + team;
        $http.get(url).then(function(data) {
            var results = data.data.results;
            var wins = 0;
            var losses = 0;
            for (var i = 0; i < results.length; i++) {
                if(!results[i].won) {
                    losses++;
                } else {
                    wins++;
                }
            }
            results.wins = wins;
            results.losses = losses;
            deferred.resolve(results);
        });
        return deferred.promise;
    };


});