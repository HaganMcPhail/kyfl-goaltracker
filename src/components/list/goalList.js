"use strict";

var React = require('react');
var Router = require('react-router');
var Accordion = require('react-bootstrap').Accordion;
var Goal = require('../list/goal.js');
var DeleteAll = require('../list/deleteAll.js');
var Link = Router.Link;

var GoalList = React.createClass({

	render: function() {
		var self = this,
		goals = [];

		this.props.goalList.forEach(function(goal) {
			goals.push(<Goal key={goal.id} goal={goal}
					goalType="todo"
					addGoalIcon="unchecked"
					goalList={this.props.goalList}
				    completedGoalList={this.props.completedGoalList}
				    onDeleteGoal={this.props.onDeleteGoal}
				    onEditGoalSubmit={this.props.onEditGoalSubmit}
				    onChangeGoalList={this.props.onChangeGoalList} />);
		}.bind(this));

		return (
			<div>
				<section className="goals container" id="accordion">
					{goals}
				</section>
			    { this.props.showDeleteAllTodo ? <DeleteAll goalType="todo" onDeleteAll={this.props.onDeleteAll} /> : null }
			</div>
		);
	}
});

module.exports = GoalList;
