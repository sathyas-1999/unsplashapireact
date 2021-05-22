import React from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Join from './Joinfree';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/Login' exact>
            <Login/>
          </Route>
          <Route path='/Joinfree' exact>
            <Join/>
          </Route>
          </Switch>
       </BrowserRouter>
    </div>
  )
}

export default App
