app.controller('DonorCtrl', ['$scope', function($scope) {
  $scope.title = "Donor Information";
  $scope.contact = {
    email: "development@metmuseum.org",
    phone: "212-650-2425"
  };
  $scope.donations = [50, 100, 250, 500, 1000, 5000];
}])