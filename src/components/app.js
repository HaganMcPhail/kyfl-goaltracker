/*eslint-disable strict */ //disabling lint on this page bacause we need a global variable

var React = require('react');
var Header = require('./common/header');
var Footer = require('./common/footer');
var Home = require('./homePage');
var Menu = require('./common/menu');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
	getInitialState: function() {
    	return {
			showMenu: true
		};
  	},
	toggleMenu: function() {
		this.setState({showMenu: !this.state.showMenu});
	},
	render: function() {
		var self = this;
		return (
			<div className="">
				<div className={ this.state.showMenu ? "body-partial" : "body-full" }>
					<Header toggleMenu={self.toggleMenu}/>
					<div className="container list">
						<Home />
					</div>
					<Footer />
				</div>
				<Menu showMenu={this.state.showMenu} />
			</div>
		);
	}
});

module.exports = App;
