"use strict";

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var GoalList = require('./list/goalList');
var CompletedGoalList = require('./list/completedGoalList');
var _ = require('lodash');
var Link = Router.Link;

var Home = React.createClass({
	mixins: [
		Router.Navigation
	],

	getInitialState: function() {
		return {
			todoGoals: [
				{
					'id':1,
					'value': 'This is a long title for a goal. Please do not make your titles this long! Please, I beg of you.',
					'tasks': [
						'do this',
						'do that',
						'do everything',
					]
				},
				{
					'id':2,
					'value': 'Short goal title',
					'tasks': [
						'do this',
						'do that',
						'do everything',
					]
				}
			],
			completedGoals: [],
			count: 3,
			showDeleteAllTodo: true,
			showDeleteAllCompleted: true
		};
	},

	toggleDeleteAll: function () {
		if (this.state.todoGoals.length > 0) {
			this.setState({showDeleteAllTodo: true});
		} else {
			this.setState({showDeleteAllTodo: false});
		}

		if (this.state.completedGoals.length > 0) {
			this.setState({showDeleteAllCompleted: true});
		} else {
			this.setState({showDeleteAllCompleted: false});
		}

		console.log(this.state);
		// console.table(this.state.completedGoals);
	},

	componentWillMount: function() {
		this.toggleDeleteAll();
	},

	removeGoalFromList: function(goalToRemove, list) {
		var removeList;

		if (goalToRemove === 'all'){
			removeList = [];
		} else {
			removeList = this.state[list+'Goals']
			_.remove(removeList, goalToRemove);
		}

		if (list === 'todo') {
			this.setState({todoGoals: removeList});
		} else {
			this.setState({completedGoals: removeList});
		}

	},

	addGoalToList: function(goalToAdd, list) {
		var addList = this.state[list+'Goals'];
		addList.push(goalToAdd);

		if (list === 'todo') {
			this.setState({todoGoals: addList});
		} else {
			this.setState({completedGoals: addList});
		}

		this.toggleDeleteAll();

	},

	deleteGoalHandler: function(goal, list) {
		this.removeGoalFromList(goal, list);
	},

	deleteAllHandler: function(list) {

		if (list === 'todo') {
			this.removeGoalFromList('all', 'todo')
		} else {
			this.removeGoalFromList('all', 'completed')
		}

		this.toggleDeleteAll();

	},

	changeGoalListHandler: function(goal, currentList){
		if (currentList === 'todo') {
			this.removeGoalFromList(goal, 'todo');
			this.addGoalToList(goal, 'completed');
		} else {
			this.removeGoalFromList(goal, 'completed');
			this.addGoalToList(goal, 'todo');
		}
	},

	handleSubmit: function(event) {
	    var newGoal = {id: this.state.count, value: event.target.value};
	    if( event.keyCode == 13 ) {
	        var list = this.state.todoGoals;
	        list.push(newGoal);
	        this.setState({goals: list, count: this.state.count + 1});
	        event.target.value = '';
	        this.transitionTo('todo');
	    }

	    this.toggleDeleteAll();
    },

    hideEditGoalTextbox: function() {
    	this.setState({showInput: false});
    },

    editGoalSubmitHandler: function(goal, listName, event) {

		var list = this.state[listName+'Goals'];

		for(var i = 0; i < list.length; i++) {
		    if(list[i].id === goal.id) {
				console.log(event.target.value);
		        list[i].value = event.target.value;
		    }
		}

		if (listName === 'todo') {
			this.setState({todoGoals: list});
		} else {
			this.setState({completedGoals: list});
		}

    	if(event.keyCode === 13) {
    		this.hideEditGoalTextbox();
    	}

    },

	// <input
	// 	name="add-goal"
	// 	className="form-control new-goal"
	// 	placeholder="What is your new goal?"
	// 	onKeyDown={this.handleSubmit}
	// 	autoComplete="off"  />

	render: function() {
		return (
			<div>
				<div className="new-goal-container">
					<div className="input-group">
						<input
							type="text"
							className="form-control new-goal"
							placeholder="Enter your new goal!"
							value={this.props.listItem}
							onKeyDown={this.handleSubmit}
							autoFocus=''
							onKeyPress={this.props.onKeyDown} />
						<span className="input-group-btn">
							<button type="button" className="btn btn-secondary add-goal" data-toggle="modal" data-target="#addGoal">
								<span className="glyphicon glyphicon-plus"></span>
							</button>
						</span>
					</div>
				</div>

				<RouteHandler goalList={this.state.todoGoals}
				    completedGoalList={this.state.completedGoals}
				    onDeleteAll={this.deleteAllHandler}
				    onDeleteGoal={this.deleteGoalHandler}
				    onEditGoalSubmit={this.editGoalSubmitHandler}
				    onChangeGoalList={this.changeGoalListHandler}
				    showDeleteAllTodo={this.state.showDeleteAllTodo}
				    showDeleteAllCompleted={this.state.showDeleteAllCompleted} />

			</div>
		);
	}
});

module.exports = Home;
