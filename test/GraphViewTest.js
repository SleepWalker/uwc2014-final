var assert = require('chai').assert;
var $ = require('jquery');

var View = require('../src/js/views/GraphView');
var Collection = require('../src/js/collections/BlockCollection');
var joint = require('jointjs');

describe('GraphView', function() {
    beforeEach(function() {
        Collection.reset();
    });

    it('should create graph', function() {
        var view = new View({
        });

        view.render();

        assert.ok(view.$el.find('svg').length == 1);
    });

    it('should create at least one block by default', function() {
        var view = new View({});

        view.render();

        assert.ok(Collection.length == 1);
    });

    it('should create block on .js-add', function() {
        var view = new View({});
        view.render();
        view.$('input').val('test');
        $('body').append(view.$el);

        view.$('.js-add').click();

        assert.ok(Collection.length == 2);
        assert.equal(Collection.at(1).get('title'), 'test');
    });
});