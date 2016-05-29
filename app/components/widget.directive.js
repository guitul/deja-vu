/**
 * Widget Directive
 */

angular
    .module('DejaVu')
    .directive('dvWidget', dvWidget);

function dvWidget() {
    var directive = {
        transclude: true,
        template: '<div class="widget" ng-transclude></div>',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
};