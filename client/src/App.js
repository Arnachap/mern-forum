import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Alerts from './components/layout/Alerts';
import Header from './components/layout/Header';
import Forums from './components/forums/Forums';
import Subforum from './components/subforum/Subforum';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <main className='container'>
            <Alerts />
            <Route exact path='/' component={Forums} />
            <Route exact path='/forums/:title/:id' component={Subforum} />
          </main>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
