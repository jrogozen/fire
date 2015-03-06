var React = require('react'),
  Router = require('react-router'),
  Route = Router.Route;

var Application = require('./components/application.jsx'),
  PostList = require('./components/post_list.jsx');

var routes = (
  <Route name="application" handler={Application} path="/">
    <Route name="postlist" handler={PostList} path="/posts/"
  </Route>
);

module.exports = routes;