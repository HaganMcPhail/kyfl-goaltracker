"use strict";

var React = require('react');

var Router = require('react-router');
var App = require('./components/app');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name="app" path="/" handler={App}>
		<DefaultRoute handler={require('./components/list/goalList')} />
		<Route name="completed" handler={require('./components/list/completedGoalList')} />
		<Route name="todo" handler={require('./components/list/goalList')} />
	</Route>
);

module.exports = routes;
