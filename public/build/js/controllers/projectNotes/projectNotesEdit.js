angular.module('app.controllers')
    .controller('ProjectNotesEditController',
    ['$scope','$location','$routeParams','ProjectNotes',
        function($scope,$location,$routeParams, ProjectNotes){
        $scope.projectNotes = ProjectNotes.get({
            id: $routeParams.id ,
            noteId: $routeParams.noteId
        });
            $scope.save = function () {
            if($scope.form.$valid){
                ProjectNotes.update({id: $scope.projectNotes.project_id, noteId: $scope.projectNotes.id},$scope.projectNotes,function(){
                    $location.path('/projects/' +$routeParams.id + '/notes');
                });
            }
        }
    }]);