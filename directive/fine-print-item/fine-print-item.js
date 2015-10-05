angular.module('fineprint').directive('finePrintItem', function($compile) {


    function getItem(input) {

        var text = input.text;
        var array = input.fpInputs;
        for (var i = 0; i < array.length; i++) {
            // do your monkey business here.
            text = text.replace('%%x', '<input type="text" ng-model="fp.fpInputs['+i+'].value"/>');
        }
        return text;
    }

    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        require: ['ngModel', '^?fineprint'],
        templateUrl: 'directive/fine-print-item/fine-print-item.html',
        compile: function() {
            console.log('fp-item compile');
            return {
                pre: function(scope, element, attr, ln) {
                    console.log('fp-item pre compile');
                    var a_input = angular.element($compile('<li class="list-group-item"> ' + getItem(scope.fp) + ' </li>')(scope));
                    element.find('#magicElement').append(a_input);
                },
                post: function(scope, element, attr, ln) {
                    console.log('fp-item post compile');
                }
            };
        }
    };
});
