var BaseNode = function (data) {
  this.id   = data.id;
}

BaseNode.prototype.isValid = function(){
  return false;
}

module.exports = BaseNode;
