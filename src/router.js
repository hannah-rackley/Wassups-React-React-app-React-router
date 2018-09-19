import Homepage from './Homepage.js'
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import WassupPageContainer from './WassupPage.js';
import { connect } from 'react-redux';
import React from 'react';

const About = props => <h1>About</h1>
const NavBar = props => <div className='navbar'>
    <NavLink activeStyle={{fontWeight: 'bold'}} to="/home">Home</NavLink>
    <NavLink activeStyle={{fontWeight: 'bold'}} to="/about">About</NavLink>
    <NavLink activeStyle={{fontWeight: 'bold'}} to="/contact">Contact</NavLink>
</div>

const Contact = props => <h1>Contact Me!</h1>

const Router = props => {
    return (
       <HashRouter>
           <div>
               <NavBar ></NavBar>
               <Switch>
                   <Route exact path='/home' render={(otherProps) => <Homepage {...props} {...otherProps}/>}/>
                   <Route path='/about' component={About}/>
                   <Route path='/contact' component={Contact}/>
                   <Route exact path='/home/:id' render={(otherProps) => <WassupPageContainer {...props} {...otherProps}/>}/>
               </Switch>
           </div>
       </HashRouter>
    )
}

let SmartRouter = connect(state => state)(Router);

export default SmartRouter;