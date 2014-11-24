var assert = require('chai').assert;
var sinon = require('sinon');

var View = require('../src/js/views/BlockView');
var Block = require('../src/js/models/Block');
var joint = require('jointjs');

describe('BlockHtmlView', function() {
    it('should throw when no model', function () {
        assert.throws(function() {
            new View();
        }, 'The BlockView requires model');
    });

    describe('block rendering', function() {
        var block;
        var view;
        var el;

        beforeEach(function() {
            block = new Block({
                title: 'test title',
                description: 'test description',
            });
            view = new View({
                model: block,
            });

            el = view.render();
        });

        it('should render', function () {
            assert.ok(el instanceof joint.shapes.basic.Generic);
            assert.deepEqual(el, view.el);
        });

        it('should set title', function() {
            assert.include(el.get('attrs').text.text, block.get('title'));
        });

        it('should set description', function() {
            assert.include(el.get('attrs').text.text, block.get('description'));
        });
    });
});