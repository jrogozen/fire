var Fluxxor = require('fluxxor'),
  React = require('react'),
  Router = require('react-router')

var PostStore = require('../stores/post_store.jsx');

module.exports = React.createClass({
  displayName: 'PostList',

  mixins: [
    Fluxxor.FluxMixin(React),
    Fluxxor.StoreWatchMixin('post'),
    Router.State
  ],

  getInitialState: function() {
    return {
      title: 'Post List'
    }
  },

  getStateFromFlux: function() {
    var flux = this.getFlux(),
      postStore = flux.store('post');

    return {
      posts: flux.actions.posts.loadPosts()
    };
  },

  render: function() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        {
          this.state.posts === PostStore.LOADING_TOKEN ?
          this.renderLoadingMessage() :
          this.renderPostsData()
        }
      </div>
    )
  },

  renderLoadingMessage: function() {
    return <div>Loading...</div>
  },

  renderPostsData: function() {
    var data = this.state.posts,
      return <ul>{data.map(this.renderPostLink)}</ul>;
  },

  renderPostLink: function(post) {
    return <li key={post._id}>{post.title}</li>;
  }
});