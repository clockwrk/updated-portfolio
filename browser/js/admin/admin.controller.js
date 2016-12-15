app.controller('adminController', function($scope, adminFactory, allProjects) {

    $scope.submitProject = function(project) {

        console.log('submitting project', project)
        adminFactory.postProject(project)
        $scope.project = null;
    }

    $scope.allProjects = allProjects||[{id:0,name:'empty', deploy:'empty', gitHub:"empty"}]

    console.log('These are all the projects', allProjects)
    $scope.data = {
        availableProjects: $scope.allProjects,
        selectedProject: { id:0, name:'empty', deploy:'empty', gitHub:'empty', description:"empty"}
    }

    $scope.selectedprojectChanged = function() {
        $scope.currentProject = $scope.selectedItem;
    }
})



// app.controller('singleProjectController', function($scope, projectFactory, $stateParams){

//  // $scope.currentProject = currentProject;

//  // console.log($stateParams)

// })
