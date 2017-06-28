app.controller('projectController', function($scope, allProjects) {
    $scope.projects = allProjects;
})

app.controller('singleProjectController', function($scope, projectFactory, currentProject, $sce, $stateParams) {

  console.log("currentProject",currentProject)
    $scope.currentProject = currentProject;
    $scope.projectName = $stateParams.name;

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    $scope.movie = { src: $scope.currentProject.videoLink }

    $scope.hasVideoLink = function hasVideoLink() {
        return !!currentProject.videoLink
    }
})
