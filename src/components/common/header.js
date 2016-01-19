"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
	toggleMenu: function() {
        this.props.toggleMenu();
    },
	render: function() {
		var self = this;
		return (
			<header className="container-fluid" id="">
				<img src="images/hs-logo.png" alt="" />
				<div className="header-text ">
					<span onClick={self.toggleMenu} className="box-shadow-menu"></span>
				</div>
			</header>
		);
	}
});

module.exports = Header;
