import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Clock from "./Clock";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

class Pages extends React.PureComponent {
  public render() {
    return (
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/clock" component={Clock} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default Pages;
