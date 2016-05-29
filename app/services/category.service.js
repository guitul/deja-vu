'use strict';

angular.module('DejaVu')
.factory('categoryService', ['$resource', function($resource) {
    return $resource('https://dejavu-api.herokuapp.com/categories/:id', {id:'@_id'} ,
    {
        update: {
            method: 'PUT'
        }
    });
}]);
