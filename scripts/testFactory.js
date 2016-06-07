/**
 * Created by BlueX on 6/7/16.
 */
angular
    .module('TestingAngular')
    .factory('testFactory', function($http){



        var testData = []

        function getData(){
            return $http.get('data/data.json');
        }

        return {
            getData: getData
        }

    });