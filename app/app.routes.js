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
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html'
            })
            .state('bookmarks', {
                url: '/bookmarks',
                views: {
                    '': {
                        templateUrl: 'dashboard/dashboard.html',
                        controller: 'MasterCtrl'
                    },
                    'sidebar@bookmarks': {
                        templateUrl: 'dashboard/sidebar.html',
                        controller: 'BookmarkCtrl'
                    },
                    'headerbar@bookmarks': {
                        templateUrl: 'dashboard/headerbar.html'
                    },
                    'bookmarkList@bookmarks': {
                        templateUrl: 'bookmarks/bookmarks.html',
                        controller: 'BookmarkCtrl'
                    },
                    'bookmarkForm@bookmarks': {
                        templateUrl: 'bookmarks/bookmark-detail.html',
                        controller: 'ModalCtrl'
                    }
                }
            });
    }
]);