console.log('bar ctrl loaded')

app.controller("BarCtrl", function($scope, $timeout) {

	    $scope.timeInMs = 0;

    var countUp = function() {
        $scope.timeInMs+= 500;
        $timeout(countUp, 500);
    }

    $timeout(countUp, 500);

});
