import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { TheGauge } from './pages/TheGauge';
import { withRoot } from "./withRoot";


function App() {
  return (
    <>
    {/* <Header /> */}
      <Router>
        <Switch>
          <Route exact path="" component={TheGauge} />
          {/* <Route exact path="/category/:id" component={CategoryArticle} /> */}
          {/* <Redirect to='/'/> */}
        </Switch>
      </Router>
    {/* <Footer /> */}

    </>
  );
}

export default withRoot(App);
