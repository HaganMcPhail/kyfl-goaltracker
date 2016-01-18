"use strict";

var React = require('react');
var Router = require('react-router');
var Goal = require('../list/goal.js');
var Link = Router.Link;

var DeleteAll = React.createClass({

	deleteAll: function() {
		this.props.onDeleteAll(this.props.goalType);
	},

	render: function() {
		return (
		    <div className="goal">
        		<span className="goalValue"><span className="all-goals"></span></span>
        		<span title="delete all goals" className="glyphicon glyphicon-remove delete icon"
        			onClick={this.deleteAll}></span>
        	</div>
		);
	}
});

module.exports = DeleteAll;
