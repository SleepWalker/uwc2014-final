var Backbone = require('backbone');
var _ = require('lodash');

var types = {
    GET: 'get',
    PUT: 'put',
    READ: 'read',
    WRITE: 'write',
    TELL: 'tell'
};

var Block = Backbone.Model.extend({
    defaults: {
        title: 'No name',
        description: '',
        type: types.GET
    },

    validate: function(attrs) {
        if (types[attrs.type]) {
            attrs.type = types[attrs.type];
        }
    },

    addChild: function() {},

    hasChild: function() {
        return true;
    },
});

module.exports = Block;