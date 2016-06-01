/**
 * Bookmark Controller
 */

angular.module('DejaVu')
    .controller('BookmarkCtrl', ['$scope', '$state', 'bookmarkService', 'searchService', BookmarkCtrl]);

function BookmarkCtrl($scope, $state, bookmarkService, searchService) {
    
    $scope.bookmarks = bookmarkService.query({}, function(bookmarks) {
        $scope.loading = false;
        $scope.updateCategories();
        $scope.bookmarksByCategory = bookmarks;
    });
    
    $scope.bookmarksByCategory = [];
    $scope.categories = [];
    $scope.search = searchService;
    $scope.loading = true;

    $scope.$on('selectCategory', function(event, category) {
        if (category) {
            var bookmarksByCategory = [];
            for (var i = 0, j = $scope.bookmarks.length; i < j; i++) {
                if ($scope.bookmarks[i].category._id === category._id) {
                    bookmarksByCategory.push($scope.bookmarks[i]);
                }
            }
            $scope.bookmarksByCategory = bookmarksByCategory;
        } else {
            $scope.bookmarksByCategory = $scope.bookmarks;
        }
    });

    $scope.updateCategories = function() {
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

    $scope.delete = function(bookmark) {
        bookmarkService.delete({'id': bookmark._id}, function() {
            $state.reload();
        });
    }

};