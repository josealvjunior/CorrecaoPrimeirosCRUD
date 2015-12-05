angular.module('app.controllers')
    .controller('ProjectNotesRemoveController',
    ['$scope','$location','$routeParams','ProjectNotes',
        function($scope,$location,$routeParams, ProjectNotes){
        $scope.projectNotes = ProjectNotes.get({
            id: $routeParams.id,
            noteId: $routeParams.noteId
        });

        $scope.remove = function () {
            $scope.projectNotes.$delete({
                id: $routeParams.id,
                noteId: $scope.projectNotes.id
            }).then(function(){
                $location.path('/projects/' +$routeParams.id + '/notes')
            });
        }
    }]);