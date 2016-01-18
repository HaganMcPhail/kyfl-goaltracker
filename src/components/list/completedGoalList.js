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

		this.props.completedGoalList.forEach(function(goal) {
			goals.push(<Goal key={goal.id} goal={goal}
					goalType="completed"
					addGoalIcon="check"
					goalList={this.props.goalList}
				    completedGoalList={this.props.completedGoalList}
				    onDeleteGoal={this.props.onDeleteGoal}
				    onEditGoal={this.props.onEditGoal}
				    onEditGoalSubmit={this.props.onEditGoalSubmit}
				    onChangeGoalList={this.props.onChangeGoalList}
				    showInput={this.props.showInput} />);
		}.bind(this));

		return (
			<div>
				<section className="goals container" id="accordion">
					<Accordion>
						{goals}
					</Accordion>
				</section>
			    { this.props.showDeleteAllCompleted ? <DeleteAll goalType="completed" onDeleteAll={this.props.onDeleteAll} /> : null }
			</div>
		);
	}
});

module.exports = GoalList;
