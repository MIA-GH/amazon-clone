import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, CheckOut, Home, LogIn, Footer } from "../Components/index";
import { authentication } from '../Config/FireBase';
import { useStateValue } from '../Provider/StateProvider';

// root of the application
function App() {

  // eslint-disable-next-line no-empty-pattern
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    authentication.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user found
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // no user
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <CheckOut />
            <Footer />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
