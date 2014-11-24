var Backbone = require('backbone');
var _ = require('lodash');
var joint = require('jointjs');

var BlockView = require('./BlockView');

var GrpahView = Backbone.View.extend({
    collection: require('../collections/BlockCollection'),
    template: require('./tpl/graph-view.handlebars'),

    events: {
        'click .js-add': 'actionAdd'
    },

    render: function () {
        this.$el.html(this.template());

        this.renderDropDown();

        this.graph = new joint.dia.Graph();

        this.paper = new joint.dia.Paper({
            el: this.$('.js-graph'),
            width: '100%',
            height: '100%',
            model: this.graph,
            gridSize: 1
        });

        this.createBlock({
            title: 'The first step',
        });

        return this;
    },

    renderDropDown: function() {
        var $dest = this.$('.js-types');

        var typesMap = {
            GET: 'get',
            PUT: 'put',
            READ: 'read',
            WRITE: 'write',
            TELL: 'tell'
        };

        html = '';
        _.each(typesMap, function(value, name) {
            html += '<option name="'+name+'">'+value+'</option>';
        });

        $dest.html(html);
    },

    actionAdd: function(event) {
        event.preventDefault();

        var $inputs = this.$('input, textarea, select');
        var attributes = {};
        _.each($inputs.serializeArray(), function (item) {
            attributes[item.name] = item.value;
        });

        this.createBlock(attributes);

        this.$('form')[0].reset();
    },

    createBlock: function(attributes) {
        var block = this.collection.create(attributes);

        var blockView = new BlockView({
            model: block,
        });

        blockView.render();
        var cells = [blockView.el];

        if (this.collection.length > 1) {
            var prevBlockIndex = this.collection.indexOf(block) - 1;
            var prevBlockView = this.collection.at(prevBlockIndex).view;
            var link = new joint.dia.Link({
                source: { id: prevBlockView.el.id },
                target: { id: blockView.el.id }
            });
            cells.push(link); // Генерит ошибку из-за отсутствия g
        }

        this.graph.addCells(cells);
    }
});

module.exports = GrpahView;