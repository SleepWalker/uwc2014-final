var assert = require('chai').assert;
var sinon = require('sinon');

var View = require('../src/js/views/ToDoItemView');
var Model = require('../src/js/models/Block');

describe('ToDoItemView', function() {
    it('should require model', function () {
        var view = new View();
        var errorMessage = 'The ToDoItemView needs model in order to render';

        assert.throws(function() {
            view.render();
        }, errorMessage);

        assert.throws(function() {
            view.renderTitle();
        }, errorMessage);

        assert.throws(function() {
            view.renderDescription();
        }, errorMessage);
    });

    it('should render title', function () {
        var title = 'this is title';
        var view = new View({
            model: new Model({
                title: title
            })
        });

        var expected = title;
        var actual = view.renderTitle();

        assert.include(actual, expected);
    });

    it('should render description', function () {
        var description = 'this is description';
        var view = new View({
            model: new Model({
                description: description
            })
        });

        var expected = description;
        var actual = view.renderDescription();

        assert.include(actual, expected);
    });

    it('should render title and description', function () {
        var description = 'this is description';
        var title = 'this is title';
        var view = new View({
            model: new Model({
                title: title,
                description: description
            })
        });

        view.render();
        var actual = view.$el.html();

        assert.include(actual, description);
        assert.include(actual, title);
    });
});