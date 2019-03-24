(function() {
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);
  LunchCheckController.$inject=['$scope'];

  function LunchCheckController($scope)
  {
    $scope.lunchItems="";
    $scope.message="";

    $scope.checkItem=function()
    {
      console.log($scope.lunchItems);
      var count=$scope.lunchItems.split(",").length;
      if($scope.lunchItems==""){
        $scope.message="Please enter data first";
        $scope.color="color:red";
      }
      else if(count>0 && count<=3)
      {
        $scope.message="Enjoy";
      }
      else if(count>3){
        $scope.message="Too much";
      }

    }
  }
}());
