var React = require('react');
var ReactDom = require('react-dom');

var Card = function() {
  var thisIsACard = 'This is a card';
  return(
    <div className="card">
      <div className="thisIsACard">{thisIsACard}</div>
    </div>
  );
};

module.exports = Card;
