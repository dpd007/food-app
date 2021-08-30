import Banner from "./app/Components/Banner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./app/Components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/">
            <Banner />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
