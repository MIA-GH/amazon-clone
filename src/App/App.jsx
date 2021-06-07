import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header, CheckOut, Home, LogIn, Footer, Payment } from "../Components/index";
import { authentication } from '../Config/FireBase';
import { useStateValue } from '../Provider/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// stripe
const promise = loadStripe(
  "pk_test_51I8yM3GpB8PnYWfNsvpUpU4yxiX0saa7TIeOdWGsPAdIzGQgV4Qz9VkMMKMS2tNxYWuOsHKhg7nUvE4zdbJONm1p00ZnwrhCjp"
);

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
          <Route path='/payment-page'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            <Footer />
          </Route>
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
