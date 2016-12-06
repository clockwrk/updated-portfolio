app.controller('adminController', function($scope) {

    $scope.data = {
    availableProjects:[
        { id: 1 ,state: "Portfolio", content: "This website that you are currently viewing was create by me using Bootstrap, Angular, PostgreSQL, Express.js and Node.js ", label: "My Portfolio" },
        { id: 2 ,state: "Imvue", content: "Imvue is a mobile website designed to work with android phones to create drawing projects using HTML5 Canvas API. My team also used the phone's gyroscope and gps to allow users to save their projects to a geolocation. They can then share these projects with other users", label: "ImVue" },
        { id: 3 ,state: "Marque", content: "This was a e-commerce site simulating selling concert tickets. I worked mostly on the Artist feature from the front-end to the back-end. I also implemented user authentication and authorization", label: "Marque" }
    ],
    selectedProject:{id: 3, state: 'Marque'}
}


      $scope.selectedprojectChanged = function(){
    $scope.currentProject = $scope.selectedItem;
  }
})



// app.controller('singleProjectController', function($scope, projectFactory, $stateParams){

// 	// $scope.currentProject = currentProject;

// 	// console.log($stateParams)

// })