var assert = require('chai').assert;
var sinon = require('sinon');

var Block = require('../src/js/models/Block');

describe('Block', function() {
    describe('structure', function() {
        var block;
        beforeEach(function() {
            block = new Block();
        });

        it('should have title', function () {
            assert.ok(block.has('title'));
        });
        it('should have description', function () {
            assert.ok(block.has('description'));
        });
        it('should have type', function () {
            assert.ok(block.has('type'));
        });
    });
});