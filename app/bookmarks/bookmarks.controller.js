/**
 * Bookmark Controller
 */

angular.module('DejaVu')
    .controller('BookmarkCtrl', ['$scope', '$http', '$stateParams', 'bookmarkService', 'searchService', BookmarkCtrl]);

function BookmarkCtrl($scope, $http, $stateParams, bookmarkService, searchService) {
    console.log('in BookmarkCtrl');
    $scope.bookmarks = bookmarkService.query({}, function() {
        $scope.loading = false;
        $scope.getCategories();
    });
    
    $scope.categories = [];
    $scope.search = searchService;
    $scope.loading = true;

    $scope.getBookmarksByCategory = function() {
        console.log('$stateParams.id = ' + $stateParams.id);
        if ($stateParams.id) {
            console.log('filtering bookmarks...');
            $http.get('https://dejavu-api.herokuapp.com/bookmarks/category/' + $stateParams.id).success(function(data) {
                return data;
            });
        } else {
            console.log('returning all bookmarks...');
            return $scope.bookmarks;
        }
    }

    $scope.bookmarksByCategory = $scope.getBookmarksByCategory();

    $scope.getCategories = function() {
        var counts = {};
        var id = '';
        for (var i = 0, j = $scope.bookmarks.length; i < j; i++) {
            id = $scope.bookmarks[i].category._id;
            if (counts[id]) {
                counts[id]++;
            } else {
                counts[id] = 1;
                $scope.categories.push($scope.bookmarks[i].category);
            }
        }
        for (var i = 0, j = $scope.categories.length; i < j; i++) {
            $scope.categories[i].count = counts[$scope.categories[i]._id];
        }
    };

    $scope.edit = function(bookmark) {
        $scope.$parent.$broadcast('editBookmark', bookmark);
    }

};