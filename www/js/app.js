angular.module('WalletHub', ['ui.router','ngAnimate','WalletHub.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider
   .state('page',{
            url: "/page/:id?param2",
            templateUrl: function ($stateParams){
                return 'templates/page_' + $stateParams.id + '.html';
                },
            controller: 'PageCtrl',
            
        })
   .state('task4',{
            url: "/task4",
            templateUrl: 'templates/task4.html',
            controller: 'Task4Ctrl',
            
        })
   .state('task5_6',{
            url: "/task5_6",
            templateUrl: 'templates/task5_6.html',
            controller:'Task7Ctrl',
            
        })
   .state('task7',{
            url: "/task7",
            templateUrl: 'templates/task7.html', 
        })
   .state('task8',{
            url: "/task8",
            templateUrl: 'templates/task8.html', 
        })
   .state('task2',{
            url: "/task2",
            templateUrl: 'templates/task2.html',
            controller: 'Task2Ctrl',
            
        });
 });