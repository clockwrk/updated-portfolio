app.controller('projectController', function($scope, allProjects) {
    $scope.projects = allProjects
})

app.controller('singleProjectController', function($scope, projectFactory, currentProject) {
    $scope.currentProject = currentProject;
})
