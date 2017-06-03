app.config(function($stateProvider) {
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: '/js/projects/projects.html',
        controller: 'projectController',
        authenticate: false,
        resolve: {
            allProjects: function(projectFactory) {
                return projectFactory.getAllProjects();
            }
        }
    })

    $stateProvider.state('singleProject', {
        url: '/projects/{name:project}',
        templateUrl: '/js/projects/singleProject/singleProject.html',
        controller: 'singleProjectController',
        authenticate: false,
        resolve: {
            currentProject: function(projectFactory, $stateParams) {
              console.log('stateParams',$stateParams);
                return projectFactory.getSingleProject($stateParams.name);
            }
        }
    });
})
