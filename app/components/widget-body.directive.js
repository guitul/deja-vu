/**
 * Widget Body Directive
 */

angular
    .module('DejaVu')
    .directive('dvWidgetBody', dvWidgetBody);

function dvWidgetBody() {
    var directive = {
        requires: '^dvWidget',
        scope: {
            loading: '@?',
            classes: '@?'
        },
        transclude: true,
        template: '<div class="widget-body" ng-class="classes"><div class="widget-content" ng-transclude></div></div>',
        restrict: 'E'
    };
    return directive;
};