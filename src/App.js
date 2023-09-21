import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
// import Routes from './routes';


// Import the necessary components
import LoginPage from './containers/LoginPage';
import ApplyPage from './containers/ApplyPage';
import JobDetailPage from './containers/JobDetailPage';
import SuccessPage from './containers/SuccessPage';
import JobSearchPage from './containers/JobSearchPage';
import PrivateRoute from './routes/PrivateRoute';
import DashboardPage from './containers/DashboardPage'; // If you have this component

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/apply" component={ApplyPage} />
            <Route path="/job/:id" component={JobDetailPage} />
            <Route path="/success" component={SuccessPage} />
            <Route exact path="/" component={JobSearchPage} />
            <PrivateRoute path="/dashboard" component={DashboardPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
