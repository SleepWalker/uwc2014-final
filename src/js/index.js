// TODO: localstorage


/**
 * Примитивное действие/тип блока (взять, отдать, прочитать, записать, сообщить)
 * Группировка примитивных действий
 * Возможность задать название и описание (Markdown)
 * Задавать связи (для этого задания – только в одну сторону)
 */

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

// storage setup
var WebStorage = require('./persistance/WebStorage');
var storageId = localStorage.getItem('storageId');
var storage = storageId ? new WebStorage(storageId) : new WebStorage();
require('./persistance/Storage').setStorage(storage);


// init graph
var GraphView = require('./views/GraphView');
var graph = new GraphView({
    el: $('#js-graph')
});

// init todo
var ToDoView = require('./views/ToDoView');
var todo = new ToDoView({
    el: $('#js-todo')
});

graph.render();
todo.render();
