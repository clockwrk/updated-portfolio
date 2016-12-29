app.directive('projectEdit', projectFactory => {
    return {
        restrict: 'E',
        scope: {
            project: '=project'
        },
        templateUrl: 'adminEdit.html'
    };
});
