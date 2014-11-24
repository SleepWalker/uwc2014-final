var assert = require('chai').assert;

var View = require('../src/js/views/ToDoView');
var collection = require('../src/js/collections/BlockCollection');

describe('ToDoItemView', function() {
    var view;
    beforeEach(function() {
        view = new View();
        collection.reset();
    });

    it('should render all items collection', function () {
        var title1 = 'title1';
        var desc1 = 'desc1';
        var title2 = 'title2';
        var desc2 = 'desc2';
        collection.add({
            title: title1,
            description: desc1,
        });
        collection.add({
            title: title2,
            description: desc2,
        });

        view.render();

        assert.include(view.$el.html(), title1);
        assert.include(view.$el.html(), desc1);
        assert.include(view.$el.html(), title2);
        assert.include(view.$el.html(), desc2);
    });

    it('should listen for the new models', function() {
        view.render();

        var title1 = 'title1';
        var desc1 = 'desc1';
        collection.add({
            title: title1,
            description: desc1,
        });

        assert.include(view.$el.html(), title1);
        assert.include(view.$el.html(), desc1);
    });

    it('should listen for the deletion', function() {
        view.render();

        var title1 = 'title1';
        var desc1 = 'desc1';
        var model = collection.add({
            title: title1,
            description: desc1,
        });

        model.destroy();

        assert.notInclude(view.$el.html(), title1);
        assert.notInclude(view.$el.html(), desc1);
    });
});