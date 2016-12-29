app.controller('adminController', ($scope, $state, adminFactory, allProjects, authFactory) => {

    $scope.submitProject = function(project) {
        adminFactory.postProject(project)
        $scope.project = null;
    }

    $scope.allProjects = allProjects || [{ id: 0, name: 'empty', deploy: 'empty', gitHub: "empty" }]

    $scope.data = {
        availableProjects: $scope.allProjects,
        selectedProject: { id: 0, name: 'empty', deploy: 'empty', gitHub: 'empty', description: "empty" }
    }

    $scope.selectedprojectChanged = function() {
        $scope.currentProject = $scope.selectedItem;
    }

    $scope.logOut = function() {
        authFactory.logOut()
        $state.go('home')
    }
})
