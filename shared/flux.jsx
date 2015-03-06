var _ = require('underscore');

var Fluxxor = require('fluxxor');

var PostStore = require('./stores/post_store.jsx');

var actions = require('./actions.jsx');

module.exports = function() {
  var stores = {
    post: new PostStore()
  };

  var flux = new Fluxxor.Flux(stores, actions.methods);

  flux.serialize = function() {
    var data = {};

    _.each(stores, function(v, k) {
      data[k] = stores[k].serialize();
    });
  };

  flux.hydrate = function(data) {
    _.each(data, function(v, k) {
      stores[k].hydrate(data[k]);
    });
  };

  return flux;
};
