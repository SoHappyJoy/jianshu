import React, { Component,Fragment } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import {Globalstyle} from './style.js';
import {Iconfont} from './statics/iconfont/iconfont.js';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Register from './pages/register';
import Write from './pages/write';
import store from './store';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle />
        <Iconfont />
        <Provider store={store}>
            
            <BrowserRouter>
              <Fragment>
                <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/login/' exact component={Login}></Route>
                <Route path='/register/' exact component={Register}></Route>
                <Route path='/write/' exact component={Write}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>
              </Fragment>
            </BrowserRouter>
          
        </Provider>
        
      </Fragment>
      
    );
  }
}

export default App;
