function NotValid(message) {
    this.message = message;
    this.name = "NotValid";
    this.status = 400
  }
  function NotExistValue(message) {
    this.message = message;
    this.status = 404
    this.name = "NotExistValue";
  }
  function ConflictData(message) {
    this.message = message;
    this.status = 409
    this.name = "ConflictData";
  }
  module.exports = { NotValid, NotExistValue, ConflictData}