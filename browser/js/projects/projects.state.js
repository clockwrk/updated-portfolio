app.config(function($stateProvider){
	$stateProvider.state('projects', {
		url:'/projects',
		templateUrl: '/js/projects/projects.html',
		controller: 'projectController'
	})

  $stateProvider.state('project', {
    url: '/project/:projectId',
    templateUrl: '/js/projects/singleProject/singleProject.html',
    controller: 'singleProjectController'
    // resolve: {
    //   theAlbum: function (AlbumFactory, $stateParams) {
    //     return AlbumFactory.fetchById($stateParams.albumId);
    //   }
    });


})