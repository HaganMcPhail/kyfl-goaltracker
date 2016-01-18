"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	render: function() {
		return (
			<header className="container-fluid" id="">
				<img src="images/hs-logo.png" alt="" />
				<div className="header-text hidden-xs">
					KYFL Goal Tracker
				</div>
			</header>
		);
	}
});

module.exports = Header;
