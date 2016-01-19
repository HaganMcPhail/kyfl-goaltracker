"use strict";

var React = require('react');

var Menu = React.createClass({
    render: function() {
        var self = this;

		return (
            <div>
                {
                    this.props.showMenu ?
    			    <div className="menu-container" id="">
                        
    			    </div> :
                    <div></div>
                }
            </div>
		);
	}
});

module.exports = Menu;
