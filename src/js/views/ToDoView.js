var Backbone = require('backbone');
var _ = require('lodash');


var ToDoItemView = Backbone.View.extend({
    collection: require('../collections/BlockCollection'),

    initialize: function() {
        this.listenTo(this.collection, 'add', this.render);
        this.listenTo(this.collection, 'destroy', this.render);
    },

    render: function() {
        this.$el.empty();

        this.collection.each(_.bind(this.renderItem, this));
    },

    renderItem: function(model) {
        var ToDoItemView = require('./ToDoItemView');

        var view = new ToDoItemView({
            model: model
        });

        view.render();

        this.$el.append(view.$el);
    }
});

module.exports = ToDoItemView;