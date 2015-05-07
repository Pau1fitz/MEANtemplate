angular.module('NerdService', []).factory('Nerd',['$http', function($http){

	return {
		get : function(){
			return $http.gte('/api/nerds');
		},


		create :function(nerdData){
			return $http.post('api/nerds', nerdData);
		},

		delete :function(id){
			return $http.delete('/api/nerds' + id);
		}
	}

}]);