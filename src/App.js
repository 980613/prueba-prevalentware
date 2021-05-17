import './App.scss';
import Menu from './Components/Menu';
import Cards from './Components/Cards';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AprobacionEmpresas from './Components/AprobacionEmpresas';

function App() {
  return (
    <>
    <Router>
      <Menu/>
      <Switch>
        <Route exact path="/">
          <Cards/>
        </Route>
        <Route path="/aprobacion">
          <AprobacionEmpresas/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
