var React = require('react'),
  Router = require('react-router');

var API = require('../server/api.js'),
  Routes = require('../shared/routes.jsx'),
  Flux = require('../shared/flux.jsx');

/* need help understanding this part */
var flux = Flux();

if(window.fluxData) {
  flux.hydrate(window.fluxData);
}

Router.run(Routes, Router.HistoryLocation, function(Handler, state) {
  React.render(
    <Handler key={state.path} flux={flux} />,
    document.getElementById('app-container')
  );
});