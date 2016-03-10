angular.module('categories.bookmarks', [
    'categories.bookmarks.create',
    'categories.bookmarks.edit',
    'eggly.models.categories',
    'eggly.models.bookmarks'
])
    .config(function($stateProvider){
        $stateProvider
            .state('eggly.categories.bookmarks', {
                // The colon is used to insert a parameter in the URL
                url: 'categories/:category',
                views: {
                    // The at (@) symbol in the view path is considered absolute
                    'bookmarks@': {
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html',
                        controller: 'BookmarksCtrl'
                    }
                }
            });
    })
    .controller('BookmarksCtrl', function($scope, $stateParams){
        $scope.currentCategoryName = $stateParams.category;
    });