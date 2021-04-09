import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import Details from './components/Details';
import ComingSoon from './components/ComingSoon';
import NotFound from './components/NotFound';

const App = () => {
  
  return (
      <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={ Feed } />
          <Route path='/Details' component={ Details } />
          <Route path='/null' component={ ComingSoon } />
          <Route component={ NotFound } />
        </Switch>
      </div>
  );
}

export default App;
