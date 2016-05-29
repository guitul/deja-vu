'use strict';

/**
 * Route configuration for the DejaVu module.
 */
angular.module('DejaVu').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('index', {
                url: '/:id',
                templateUrl: 'bookmarks/bookmarks.html',
                controller: 'BookmarkCtrl'
            })
            .state('bookmark', {
                url: '/bookmark/:id',
                templateUrl: 'bookmarks/bookmark.html',
                controller: 'ModalCtrl'
            });
    }
]);