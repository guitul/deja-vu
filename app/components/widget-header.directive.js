/**
 * Widget Header Directive
 */

angular
    .module('DejaVu')
    .directive('dvWidgetHeader', dvWidgetTitle);

function dvWidgetTitle() {
    var directive = {
        requires: '^dvWidget',
        scope: {
            title: '@',
            url: '@',
            icon: '@'
        },
        transclude: true,
        template: '<div class="widget-header"><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i><a href="{{url}}" target="_blank">{{title}}</a></div><div class="pull-right col-xs-6 col-sm-4" ng-transclude></div></div></div>',
        restrict: 'E'
    };
    return directive;
};