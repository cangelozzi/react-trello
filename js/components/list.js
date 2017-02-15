var Card = require('./card');

var List = function() {
  return (
    <div className="card-list">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

module.exports = List;
