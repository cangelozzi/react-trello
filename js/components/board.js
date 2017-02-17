var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');
var ListContainer = require('./list-container');

var Board = React.createClass({
	render: function() {
		return (
			<div className="board">
				{this.props.lists.map((listTitle) => (
					<ListContainer title={listTitle} />
				))}
			</div>
		);
	}
});

module.exports = Board;
