/**
 * Created by m3rkz0r on 10/2/15.
 */
var myApp = angular.module('myApp',['ngMaterial']);

myApp.controller('TaskController', ['$scope','$http', function($scope, $http){

    $scope.tasklist = [];

    var getJsonData = function(){
      $http.get('/jsonData').then(function(res){
           $scope.tasklist = res.data;
          console.log(res.data);
        });
    };

    //This function takes the information from the input textbox and
    //pushes an object onto the end of our tasklist array then it
    //resets the textbox input to empty by reassigning the value to an empty string.

    $scope.addTask = function(){
        $scope.tasklist.push({"task":$scope.input, "done" :false});
        $scope.input = "";
        console.log($scope.tasklist);

    };//end addTask()


    /*For my clear function it loops through the array
      and if one it hits a done value that is true it will
      target that index and remove the first element at that index
     */

    $scope.clearChecked = function(){

        for(var i = 0; i < $scope.tasklist.length; i++){
            if($scope.tasklist[i].done == true){
                $scope.tasklist.splice(i,1);
            }
        }
    };//end clearChecked()


    getJsonData();

}]);//end controller function