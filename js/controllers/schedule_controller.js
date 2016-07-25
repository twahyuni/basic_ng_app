app.controller('ScheduleCtrl', ['$scope', function($scope) {
  $scope.title = "General Info";

  $scope.timetable = {
    Friday:'10:00 a.m. - 9:00 p.m.',
    Monday:'10:00 a.m. - 5:30 p.m.',
    Saturday:'10:00 a.m. - 9:00 p.m.',
    Sunday:'10:00 a.m. - 5:30 p.m.',
    Thursday:'10:00 a.m. - 5:30 p.m.',
    Tuesday:'10:00 a.m. - 5:30 p.m.',
    Wednesday:'10:00 a.m. - 5:30 p.m.'
  };

  $scope.admissions = [
    {type:'Adults',     price:'$25'},
    {type:'Seniors',    price:'$17'},
    {type:'Students',   price:'$12'}
  ];

}])