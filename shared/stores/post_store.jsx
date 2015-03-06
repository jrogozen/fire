var Fluxxor = reuqire('fluxxor');

var actions = require('../actions.jsx');

var LOADING_TOKEN = {};

var PostStore = Fluxxor.createStore({
  initialize: function() {
    this.state = {
      posts: {}
    };

    this.bindActions(
      actions.constants.POSTS.LOAD_START, this.handlePostsLoadStart,
      actions.constants.POSTS.LOAD_SUCCESS, this.handlePostsLoadSuccess,

      actions.constants.POST.LOAD_START, this.handlePostLoadStart,
      actions.constants.POST.LOAD_SUCCESS, this.handlePostLoadSuccess
    );
  },

  handlePostsLoadStart: function() {
    this.emit('change');
  },

  handlePostsLoadSuccess: function() {
    this.emit('change');
  },

  handlePostLoadStart: function() {
    this.emit('change');
  },

  handlePostLoadSuccess: function() {
    this.emit('change');
  },

  serialize: function() {
    return JSON.stringify(this.state);
  },

  hydrate: function(json) {
    this.state = JSON.parse(json);
  }
});

PostStore.LOADING_TOKEN = LOADING_TOKEN;

module.exports = PostStore;