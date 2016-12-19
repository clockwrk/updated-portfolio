app.directive('projectTile', function() {
    return {
        restrict: "E",
        scope: {
            project: '='
        },
        templateUrl: 'js/projects/singleProject/singleProjectTile.html'
    }
});
