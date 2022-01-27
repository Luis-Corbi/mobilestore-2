import CheckoutPage from "./checkout/carrito";
import NavBar from "./NavBar";
import Productos from "./productos/productos";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom"
import SignIn from "./sign-in-y-up/signin";
import SignUp from "./sign-in-y-up/signup";
import Checkout from "./checkout/diseño-checkout";

function EcomerceApp() {

  return(
    <Router>
    <div className="App">
  <NavBar />
  <Switch>
  <Route path="/checkout">
      <Checkout/>
  </Route>
  <Route path="/sign-up">
      <SignUp/>
  </Route>
  <Route path="/sign-in">
      <SignIn/>
  </Route>
  <Route path="/checkout-page">
    <CheckoutPage/>
    </Route>
    <Route path="/">
      <Productos />
    </Route>
    </Switch>
  </div>
  </Router>
);
}

export default EcomerceApp;