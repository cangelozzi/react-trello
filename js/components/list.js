var React = require('react');
var ReactDOM = require('react-dom');
var Card = require('./card');
var ListContainer = require('./list-container');

var List = React.createClass({

	getDefaultProps: function()	{
		return {
			cards: []
		}
	},

	submit: function( event ) {
		event.preventDefault();

		var form = event.target;
		this.props.onAddSubmit( form.add.value );
		form.reset();
	},

	render: function() {
		return (
			<div className="list">
				<h2>{this.props.title}</h2>
				{this.props.cards.map(( contents ) => (
					<Card text={contents} />
				))}
				<form onSubmit={this.submit}>
					<input name="add" />
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
});

module.exports = List;

// stateful component (object)
// first property is the submit event
// second property is the render element
// render property return a TITLE {this.props.title}
// ... a Card text
// ... the Submit button
