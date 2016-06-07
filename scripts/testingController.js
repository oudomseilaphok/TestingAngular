/**
 * Created by BlueX on 6/7/16.
 */
angular
    .module('TestingAngular')
    .controller('testingController', function($scope, testFactory){
        //$scope.hello = 'Hello Word';
        //$scope.persons = [
        //    {
        //        "name":"seila",
        //        "title":"CEO"
        //    },
        //    {
        //        "name":"Manoth",
        //        "title":"CFO"
        //    },
        //    {
        //        "name":"Mora",
        //        "title":"COO"
        //    }
        //]

        //$scope.persons = testFactory.getData();

        $scope.persons;

        testFactory.getData().success(function(data){
            $scope.persons = data;
        }).error(function(error){
            console.log(error);
        });

    });