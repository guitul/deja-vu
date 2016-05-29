'use strict';

angular.module('DejaVu')
.factory('bookmarkService', ['$resource', function($resource) {
    return $resource('https://dejavu-api.herokuapp.com/bookmarks/:id', {id:'@_id'} ,
    {
        update: {
            method: 'PUT'
        }
    });
}]);
