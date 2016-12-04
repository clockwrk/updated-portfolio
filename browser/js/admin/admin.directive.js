app.directive('projectEdit', function(projectFactory) {
  return {
    restrict: 'E',
    scope: {
      project: '=project'
    },
    templateUrl: 'adminEdit.html'
  };
});