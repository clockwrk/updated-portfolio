app.config(function($stateProvider) {
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: '/js/projects/projects.html',
        controller: 'projectController'
    })

    $stateProvider.state('oneProject', {
        url: '/project/:projectId',
        templateUrl: '/js/projects/singleProject/singleProject.html',
        controller: 'singleProjectController',
        resolve: {
            currentProject: function(projectFactory, $stateParams) {
                return projectFactory.getSingleProject($stateParams.projectId)
            }
        }
        // resolve: {
        //   theAlbum: function (AlbumFactory, $stateParams) {
        //     return AlbumFactory.fetchById($stateParams.albumId);
        //   }
    });


})
