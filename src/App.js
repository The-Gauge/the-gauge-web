import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from './pages/home/Home';
import { CategoryArticle } from './pages/Category/CategoryArticle';
import Footer from './components/Footer/Footer';
import { Header } from './components/header/Header';
import { TheGauge } from './pages/TheGauge';


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

export default App;
