var Backbone = require('backbone');

// todo: render -> get

var ToDoItemView = Backbone.View.extend({
    template: require('./tpl/todo-item.handlebars'),
    render: function () {
        this._ensureCollection();

        this.$el.html(this.template(this.model.toJSON()));

        return this;
    },

    renderTitle: function () {
        this._ensureCollection();

        return this.model.get('title');
    },

    renderDescription: function () {
        this._ensureCollection();

        return this.model.get('description');
    },

    _ensureCollection: function() {
        if (!this.model) {
            throw new Error('The ToDoItemView needs model in order to render');
        }
    }
});

module.exports = ToDoItemView;