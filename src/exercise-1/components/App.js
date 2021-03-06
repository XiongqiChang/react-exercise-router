import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Link, Route,Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import MyProfile from './MyProfile';
import Product from './Product'

class App extends Component {
  render() {
    return (

      

      <BrowserRouter>
        <div className="app">
          <div>
            <ul>
              
              <li>
              
                <Link to={"/about"}>About Us</Link>
              </li>
              <li>
                <Link to={"/myprofile"}> MyProfile</Link>
              </li>
              <li>
                <Link to={"/goods"}> Product</Link>
              </li>
              <li>
                <Link to={"/"}> Home</Link>
               </li>
            </ul>
            </div>


          <Switch>
            {/* <Route exact path={'/'} component={Home}></Route> */}
            <Route path={'/about'} component={About}></Route>
            <Route path={'/myprofile'} component={MyProfile}></Route>
            <Route path={'/goods'} component={Product}></Route>
            <Route path='*' component={Home}></Route>
         </Switch>
         </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
