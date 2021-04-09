import {Route, Switch} from 'react-router-dom';
import Store from './store/store';
import {Header} from './components/Header';
import Feed from './components/Feed';
import {Details} from './components/Details';

const App = () => {
  return (
      <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={() => <Feed store={new Store()} />} />
          <Route path='/Details' component={Details} />
        </Switch>
      </div>
  );
}

export default App;
