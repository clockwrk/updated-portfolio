app.config(function($stateProvider) {
    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: '/js/admin/admin.html',
        controller: 'adminController'
            // resolve: {
            //     allProjects: function(projectFactory) {
            //         console.log("Attemping to get all allProjects")
            //         return projectFactory.getAllProjects();
            //     }
            // }
    })
})
