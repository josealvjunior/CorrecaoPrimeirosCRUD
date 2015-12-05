angular.module('app.controllers')
    .controller('ProjectNotesNewController',
    ['$scope','$location','$routeParams','ProjectNotes',
        function($scope,$location,$routeParams,ProjectNotes){
        $scope.projectNotes = new ProjectNotes();
        $scope.projectNotes.project_id = $routeParams.id;

        $scope.save = function () {
            if($scope.form.$valid){
            $scope.projectNotes.$save({id: $routeParams.id}).then(function(){
                $location.path('/projects/' +$routeParams.id + '/notes');
            });
            }
        }
    }]);