var API = require('../server/api.js');

var constants = {
  POST: {
    LOAD_START: "POST:LOAD_START",
    LOAD_SUCCESS: "POST:LOAD_SUCCESS"
  },

  POSTS: {
    LOAD_START: "POSTS:LOAD_START",
    LOAD_SUCCESS: "POSTS:LOAD_SUCCESS"
  }
};

var methods = {
  posts: {
    loadPosts: function() {
      // dispatch store event
    },

    loadPost: function() {

    }
  }
};

module.exports = {
  methods: methods,
  constants: constants
};