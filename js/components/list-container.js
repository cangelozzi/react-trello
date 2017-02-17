var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
var List = require('./list');

var ListContainer = React.createClass({
	getInitialState: function() {
		return {
			cards: []
		};
	},

	onAddSubmit: function(value) {
		this.setState({ cards: this.state.cards.concat( value ) });
	},

	render: function() {
		return (
			<List title={this.props.title} cards={this.state.cards} onAddSubmit={this.onAddSubmit} />
		);
	}
});

module.exports = ListContainer;

// stateful component (object)
// initial State is an empty array
// on submit event the list is filled
// List rendered with: title, submitted card, and submit form 
