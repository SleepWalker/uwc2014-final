var Backbone = require('backbone');

var Block = require('../models/Block');

var BlockCollection = Backbone.Collection.extend({
    url: 'block-collection',
    model: Block,
});

module.exports = new BlockCollection();