var _ = require('lodash');
var joint = require('jointjs');

var startY = 30;
var increment = 100;

function BlockView(options) {
    if (_.isObject(options)) {
        _.extend(this, _.pick(options, 'model'));
    }

    this._ensureModel();

    this.model.view = this;
}

BlockView.prototype = _.extend(BlockView.prototype, {
    render: function() {
        this.el = new joint.shapes.basic.Rect({
            position: { x: 100, y: startY },
            size: { width: 100, height: 30 },
            attrs: {
                rect: { fill: this.getColor(this.model.get('type'))},
                text: {
                    text: this.model.get('title') + this.model.get('description'),
                    fill: 'black'
                }
            }
        });
        startY += increment;

        return this.el;
    },

    _ensureModel: function() {
        if (!this.model) {
            throw new Error('The BlockView requires model');
        }
    },

    getColor: function(type) {
        // todo: тут должны быть константы...
        var colorMap = {
            'get': '#E4EDAE',
            'put': '#FCE7A6',
            'read': '#9CDAD7',
            'write': '#F9BAA8',
            'tell': '#C8B8C3'
        };

        return colorMap[type] ? colorMap[type] : 'gray';
    }
});

module.exports = BlockView;