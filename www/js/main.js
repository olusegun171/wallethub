require.config({
      paths : {
        'angular' : 'lib/angular/angular.min.js',
        'angularUiRouter' : 'lib/angular-ui-router/release/angular-ui-router.min.js',
        'angularSanitize' : 'lib/angular/1.2.9/angular-sanitize',
        'angularAnimate' : 'lib/angular-animate/angular-animate.min.js',

    },
    shim : {
        'angular' : {
            exports : 'angular'
        },
        'angularUiRouter' : {
            deps : ['angular']
        },
        'angularAnimate' : {
            deps : ['angular']
        },
        'angularSanitize' : {
            deps : ['angular']
        }

    },

  baseUrl: '/js'
});

require(['app'], function (app) {
  app.init();
});