var Fluxxor = require('fluxxor'),
  React = require('react'),
  Router = require('react-router'),
  Link = Router.Link;

module.exports = React.createClass({
  displayName: 'Application',

  mixins: [
    Fluxxor.FluxMixin(React)
  ],

  render: function() {
    return (
      <div>
        <h1>Blog</h1>
        <Router.RouteHandler />
        <hr/>
        <ul>
          <li><Link to="application">home</Link></li>
          <li><Link to="postlist">posts</Link></li>
        </ul>
      </div>
    );
  }
});