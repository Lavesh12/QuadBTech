import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; // Add Redirect to this import statement

import PrivateRoute from './PrivateRoute';
import LoginPage from '../containers/LoginPage';
import JobSearchPage from '../containers/JobSearchPage';
import JobDetailPage from '../containers/JobDetailPage';
import ApplyPage from '../containers/ApplyPage';
import SuccessPage from '../containers/SuccessPage';
import DashboardPage from '../containers/DashboardPage'; // Make sure this path is correct

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/apply" component={ApplyPage} />
        <Route path="/job/:id" component={JobDetailPage} />
        <Route path="/success" component={SuccessPage} />
        <Route exact path="/" component={JobSearchPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
