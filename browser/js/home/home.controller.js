console.log('bar ctrl loaded')

app.controller("BarCtrl",
    function($scope) {

    	console.log('HERE')
        $scope.labels = ['JAVASCRIPT', 'POSTGRESQL', 'ANGULAR', 'HTML', 'CSS', '2011', '2012'];
        $scope.series = ['Series A', 'Series B'];

        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
    });
