var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');
var ListContainer = require('./list-container');

var Board = React.createClass({
    render: function() {
        return (
            <div className="board">
                <ListContainer title="To Do"/>
                <ListContainer title="Doing"/>
                <ListContainer title="Done"/>
            </div>
        );
    }
});

module.exports = Board;

// stateful component (object)
// return lists
