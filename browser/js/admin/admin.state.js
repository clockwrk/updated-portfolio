app.config(function($stateProvider) {
    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: '/js/admin/admin.html',
        controller: 'adminController',
        authenticate: true,
        resolve: {
            allProjects: function(adminFactory) {
                return adminFactory.getAllProjects();
            }
        }
    })
})
