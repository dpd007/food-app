import Banner from "./app/Components/Banner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./app/Components/Home";
import { GuardProvider, GuardedRoute } from "react-router-guards";
import Login from "./app/Components/Login";
import { auth } from "./app/Service/FirebaseConfig";
function App() {
  const requireLogin = (to, from, next) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        next();
      } else {
        next.redirect("/");
      }
    });
  };
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Banner />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <GuardProvider guards={[requireLogin]}>
            <GuardedRoute exact path="/home" meta={{ auth: true }}>
              <Home />
            </GuardedRoute>
          </GuardProvider>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
