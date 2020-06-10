import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Blog from "./components/Blog"
import BlogPost from "./components/BlogPost";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Router = () => {
  return (
    <HashRouter history={history}>
      <Switch>
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:title/:issueNumber" component={BlogPost}/>
      </Switch>
    </HashRouter>
  );
};

export default Router;
