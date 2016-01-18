"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Lodash = require('lodash');
var Router = require('react-router');
var Panel = require('react-bootstrap').Panel;
var Button = require('react-bootstrap').Button;
var Link = Router.Link;

var Goal = React.createClass({

	getInitialState: function() {
    	return {
			expanded: false,
			showInput: false
		};
  	},

	editGoalSubmit: function(event) {
		this.props.onEditGoalSubmit(this.props.goal, this.props.goalType, event);
	},

	deleteGoal: function() {
		this.props.onDeleteGoal(this.props.goal, this.props.goalType);
	},

	editGoal: function() {
		this.setState({ expanded: true });
		this.setState({showInput: true});
	},

	hideTextbox: function(e) {
		e.preventDefault();
		this.setState({showInput: false});
	},

	changeGoalList: function() {
		this.props.onChangeGoalList(this.props.goal, this.props.goalType);
	},

	render: function() {
		var self = this;

		return (

			<div>
				<div className="row panel-top">
					<div className="goal-title col-sm-9">
						{
							this.state.showInput ?
								<form className="commentForm" onSubmit={self.hideTextbox}>
									<input className={'editText ' + this.props.goal.id} type="text" placeholder="Edit Goal" defaultValue={this.props.goal.value}
										autoComplete="off" onKeyDown={self.editGoalSubmit}
										onBlur={self.hideTextbox}/>
								</form> :
								<a onClick={ ()=> this.setState({ expanded: !this.state.expanded })}> {this.props.goal.value} </a>
						}

					</div>
					<div className="col-sm-3">
						<div className="row actionIconsContainer">
							<span className={'glyphicon glyphicon-'+ this.props.addGoalIcon + ' check icon'}
								onClick={self.changeGoalList}></span>
							<span className="glyphicon glyphicon-pencil pencil icon"
								onClick={self.editGoal}></span>
							<span className="glyphicon glyphicon-trash delete icon"
									onClick={self.deleteGoal}></span>
							<span className="glyphicon glyphicon-thumbs-up icon"></span>
							<span className="glyphicon glyphicon-comment icon"></span>
						</div>
					</div>
				</div>
		        <Panel collapsible expanded={this.state.expanded}>
					<div className="panel-body">
				  		Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
		          		Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
					</div>
		        </Panel>
	      </div>

		);
	},

	_toggleExpand: function() {
    	this.setState({expanded: !this.state.expanded});
  	}

});

module.exports = Goal;
// <Panel header={this.props.goal.value + head} key={this.props.goal.id} collapsible={true} expanded={this.state.expanded} onSelect={this._toggleExpand}>
//
// </Panel>
// {
// 	this.props.showInput ? <input className={'editText ' + this.props.goal.id} type="text" placeholder="Edit Goal" defaultValue={this.props.goal.value}
// 		autoComplete="off" onKeyDown={self.editGoalSubmit}
// 		onBlur={self.editGoalSubmit} /> :
// 		<div>
// 			<div className="row goalContent">
// 				<div className="col-xs-12 col-sm-11">
// 					<span className={'listGoal ' + this.props.goal.id}>{this.props.goal.value}</span>
// 					<ul className="taskList">
// 						<li>
// 							<input type="checkbox" name="name" value="" checked="checked" />
// 							React.js
// 						</li>
// 						<li>
// 							<input type="checkbox" name="name" value="" checked="checked" />
// 							Angular.js
// 						</li>
// 						<li>
// 							<input type="checkbox" name="name" value="" />
// 							Ember.js
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 			<div className="row actionIconsContainer">
// 				<span className={'glyphicon glyphicon-'+ this.props.addGoalIcon + ' check icon'}
// 					onClick={self.changeGoalList}></span>
// 				<span className="glyphicon glyphicon-pencil pencil icon"
// 					onClick={self.editGoal}></span>
// 				<span className="glyphicon glyphicon-trash delete icon"
// 						onClick={self.deleteGoal}></span>
// 				<span className="glyphicon glyphicon-thumbs-up icon"></span>
// 				<span className="glyphicon glyphicon-comment icon"></span>
// 			</div>
// 		</div>
// }
