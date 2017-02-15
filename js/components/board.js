var List = require('./list');

var Board = function() {
  return (
    <div className="board">
      <List />
      <List />
      <List />
    </div>
  );
};

module.exports = Board;
