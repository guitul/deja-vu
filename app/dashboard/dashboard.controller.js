/**
 * Master Controller
 */

angular.module('DejaVu')
    .controller('MasterCtrl', ['$scope', '$cookieStore', 'searchService', MasterCtrl]);

function MasterCtrl($scope, $cookieStore, searchService) {

    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.pageTitle = 'All';
    $scope.search = searchService;

    $scope.setCategory = function(category) {
        if (angular.isDefined(category)) {
            $scope.pageTitle = 'All / ' + category.name;
            $scope.$broadcast('selectCategory', category);
        } else {
            $scope.pageTitle = 'All';
            $scope.$broadcast('selectCategory');
        }
    };

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
        if (newValue >= mobileView) {
            if (angular.isDefined($cookieStore.get('toggle'))) {
                $scope.toggle = ! $cookieStore.get('toggle') ? false : true;
            } else {
                $scope.toggle = true;
            }
        } else {
            $scope.toggle = false;
        }
    });

    $scope.toggleSidebar = function() {
        $scope.toggle = !$scope.toggle;
        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() {
        $scope.$apply();
    };
}