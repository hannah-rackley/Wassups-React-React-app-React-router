import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HomepageContainer from './HomepageContainer.js'
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';

const About = props => <h1>About</h1>
const NavBar = props => <div>
    <NavLink activeStyle={{fontWeight: 'bold'}} exact path to="/">Home</NavLink>
    <NavLink activeStyle={{fontWeight: 'bold'}} to="/about">About</NavLink>
    <NavLink activeStyle={{fontWeight: 'bold'}} to="/contact">Contact</NavLink>
</div>

const Contact = props => <h1>Contact Me!</h1>

const Router = props => {
     return (
        <HashRouter>
            <div>
                <NavBar></NavBar>
                <Switch>
                    <Route exact path='/' component={HomepageContainer}/>
                    <Route path='/about' component={About}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </div>
        </HashRouter>
     )
 }

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
