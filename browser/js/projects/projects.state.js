app.config(function($stateProvider) {
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: '/js/projects/projects.html',
        controller: 'projectController',
        resolve: {
            allProjects: function(projectFactory) {
                console.log('Getting all projects')
                return projectFactory.getAllProjects();
            }
        }
    })

    $stateProvider.state('singleProject', {
        url: '/projects/:id',
        templateUrl: '/js/projects/singleProject/singleProject.html',
        controller: 'singleProjectController',
        resolve: {
            currentProject: function(projectFactory, $stateParams) {
                return projectFactory.getSingleProject($stateParams.id)
            }
        }
    });


})
