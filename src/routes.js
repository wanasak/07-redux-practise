import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer";
import ArtistContainer from "./containers/ArtistContainer";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomeContainer} />
      <Route path="/artist/:id" exact component={ArtistContainer} />
    </Switch>
  );
};

export default Routes;
