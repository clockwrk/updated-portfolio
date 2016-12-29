app.config($stateProvider => {
    $stateProvider.state('admin', {
        url: '/admin',
        templateUrl: '/js/admin/admin.html',
        controller: 'adminController',
        authenticate: true,
        resolve: {
            allProjects: adminFactory => {
                return adminFactory.getAllProjects();
            }
        }
    })
})
