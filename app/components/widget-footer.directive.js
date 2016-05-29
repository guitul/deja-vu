/**
 * Widget Footer Directive
 */

angular
    .module('DejaVu')
    .directive('dvWidgetFooter', dvWidgetFooter);

function dvWidgetFooter() {
    var directive = {
        requires: '^dvWidget',
        transclude: true,
        template: '<div class="widget-footer" ng-transclude></div>',
        restrict: 'E'
    };
    return directive;
};