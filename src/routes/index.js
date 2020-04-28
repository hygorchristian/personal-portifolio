import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '~/screens/Home';
import ProjectDetails from '~/screens/ProjectDetails';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/projects" exact component={Home} />
      <Route path="/project/:slug" exact component={ProjectDetails} />
    </Switch>
  );
}

export default Routes;
