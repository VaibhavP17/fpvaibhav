angular.module('fineprint', ['ui.bootstrap', 'ui.utils', 'ngRoute', 'ngAnimate']);

angular.module('fineprint').config(function($routeProvider) {

    /* Add New Routes Above */
    $routeProvider.otherwise({
        redirectTo: '/'
    });

});




angular.module('fineprint').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
