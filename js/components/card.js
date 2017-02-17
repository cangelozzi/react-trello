var React = require('react');
var ReactDOM = require('react-dom');

var Card = React.createClass({
	render: function() {
		return (
			<div className="card">
				{this.props.text}
			</div>
		);
	}
});

module.exports = Card;

// stateful component
// Card takes a {this.props.text}
