var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./components/board');

document.addEventListener( 'DOMContentLoaded', function() {
	var lists = [ "To Do", "Doing", "Done" ];
	ReactDOM.render( <Board title="React-Trello board" lists={lists} />, document.getElementById( 'app' ));
});
