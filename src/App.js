import {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Header} from './components/Header';
import {Home} from './components/Feed';
import {Details} from './components/Details';

const App = () => {

  return (
      <div className="App">
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/Details' component={Details} />
        </Switch>
      </div>
  );
}

export default App;
