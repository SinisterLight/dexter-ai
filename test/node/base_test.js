var BaseNode = require('../../app/node/base')
var expect = require('chai').expect;

describe('BaseNode', function() {
  describe('#isValid', function() {
    it('should be invalid', function() {
      node = new BaseNode({id: 'id'});
      expect(node.isValid()).to.equal(false);
    });
  });
});
