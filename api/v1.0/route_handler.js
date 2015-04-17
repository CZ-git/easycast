var layout_routes = require('./routes/layout')
	,connection_routes = require('./routes/connection')
	,graph_routes = require('./routes/graph')
	,dashboard_routes = require('./routes/dashboard')
	,login_routes = require('./routes/login');
	
exports.init = function (app) {

	app.get('/layout/list', layout_routes.list);
	app.post('/layout/list', layout_routes.create);
	app.delete('/layout/:id', layout_routes.removeOne);
	app.put('/layout/:id', layout_routes.edit);
	
	app.get('/connection/list', connection_routes.list);
	app.post('/connection/list', connection_routes.create);
	app.delete('/connection/:id', connection_routes.removeOne);
	app.put('/connection/:id', connection_routes.edit);

	app.get('/graph/list', graph_routes.list);
	app.post('/graph/list', graph_routes.create);
	app.delete('/graph/:id', graph_routes.removeOne);
	app.put('/graph/:id', graph_routes.edit);
	
	app.get('/dashboard/list', dashboard_routes.list);
	app.post('/dashboard/list', dashboard_routes.create);
	app.delete('/dashboard/:id', dashboard_routes.removeOne);
	app.put('/dashboard/:id', dashboard_routes.edit);

	app.get('/login/list', login_routes.list);
	app.post('/login/list', login_routes.create);
	app.delete('/login/:id', login_routes.removeOne);
	app.put('/login/:id', login_routes.edit);
	
}