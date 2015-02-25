var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
  $routeProvider
  .when('/',{
    templateUrl: 'js/home/homeTmpl.html',
    controller: 'homeCtrl',
    resolve: {
        jazzData: function(teamService) {
            return teamService.getTeamData('utahjazz');
        },
        lakerData: function(teamService) {
            return teamService.getTeamData('losangeleslakers');
        },
        heatData: function($route, teamService) {
            return teamService.getTeamData('miamiheat');
        }
    }
  })
  .when('/teams/:team',{
      templateUrl: 'js/teams/teamTmpl.html',
      controller: 'teamCtrl',
      resolve: {
          teamData: function($route, teamService){
              return teamService.getTeamData($route.current.params.team);
          }
      }
  })
  .otherwise({
    redirectTo: '/'
  });
});