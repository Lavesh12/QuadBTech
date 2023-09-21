import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Header from '../components/Header';
import LoginPage from './LoginPage';
import JobSearchPage from './JobSearchPage';
// ... Add other imports

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route exact path="/" component={JobSearchPage} />
            {/* Add other routes */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
