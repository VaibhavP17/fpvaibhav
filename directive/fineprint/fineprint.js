angular.module('fineprint').directive('fineprint', function($compile) {


    return {
        restrict: 'E',
        replace: true,
        require: 'ngModel',
        scope: {
            input: '='
        },
        templateUrl: 'directive/fineprint/fineprint.html',
        link: function(scope, element, attrs, fn) {
          //  console.log('fineprint post link');
        }
    };
});
