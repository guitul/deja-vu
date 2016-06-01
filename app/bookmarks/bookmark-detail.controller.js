/**
 * Modal Controller
 */

angular.module('DejaVu').controller('ModalCtrl', ['$scope', '$state', '$uibModal', 'categoryService', 'bookmarkService',
  function ($scope, $state, $uibModal, categoryService, bookmarkService) {

  $scope.animationsEnabled = true;
  $scope.categories = categoryService.query();
  $scope.bookmark = {};

  $scope.$on('editBookmark', function(event, bookmark) {
    $scope.bookmark = angular.copy(bookmark);
    $scope.bookmark.category = bookmark.category._id;
    $scope.open();
  });

  $scope.open = function(size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'bookmarkForm.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        bookmark: function() {
          return $scope.bookmark;
        },
        categories: function() {
          return $scope.categories;
        }
      }
    });

    modalInstance.result.then(function(bookmark) {
      if (typeof bookmark.name !== "undefined" 
        && typeof bookmark.url !== "undefined" 
        && typeof bookmark.category !== "undefined") {
        if (bookmark._id) {
          bookmarkService.update(bookmark, function() {
            $state.reload();
          });
        } else {
          bookmarkService.save(bookmark, function() {
            $state.reload();
          });
        }
      }
      $scope.bookmark = {};
    }, function () {
      // modal dismissed
      $scope.bookmark = {};
    });

  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

}]);

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('DejaVu').controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'bookmark', 'categories',
  function ($scope, $uibModalInstance, bookmark, categories) {

  $scope.bookmark = bookmark;
  $scope.categories = categories;

  $scope.getTitle = function() {
    if (Object.keys(bookmark).length === 0 && bookmark.constructor === Object) {
      return 'New Bookmark';
    } else {
      return 'Edit Bookmark';
    }
  }
  $scope.title = $scope.getTitle();
  $scope.getLabel = function() {
    if (Object.keys(bookmark).length === 0 && bookmark.constructor === Object) {
      return 'Add';
    } else {
      return 'Update';
    }
  }
  $scope.label = $scope.getLabel();

  $scope.ok = function () {
    $uibModalInstance.close($scope.bookmark);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss();
  };
}]);