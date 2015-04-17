biInterface.factory('Login', function ($resource, $rootScope, $http) {
	
	return {
		
		getList : function() { return $resource('/api/v1.0/login/list').query();},

		create: function(login){return $resource('/api/v1.0/login/list').save(login);},

		update: function(login){
			return $resource('/api/v1.0/login/:id',  {}, {update: {method: 'PUT'}}).update({id: login._id}, login, function(res){
				console.log(res);
			});
		},

		delete: function(login){
			return $resource('/api/v1.0/login/:id').delete({id: login._id}, function(res){
				console.log(res);
			});
		}
		
	}

});