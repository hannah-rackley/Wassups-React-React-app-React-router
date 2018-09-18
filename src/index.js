import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Homepage from './Homepage.js'
import { HashRouter, Route, NavLink, Switch } from 'react-router-dom';
import WassupPageContainer from './WassupPage.js';

const About = props => <h1>About</h1>
const NavBar = props => <div>
    <NavLink activeStyle={{fontWeight: 'bold'}} to="/home">Home</NavLink>
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
                   <Route exact path='/home' render={(otherProps) => <Homepage {...props} {...otherProps}/>}/>
                   <Route path='/about' component={About}/>
                   <Route path='/contact' component={Contact}/>
                   <Route exact path='/home/:id' render={(otherProps) => <WassupPageContainer {...props} {...otherProps}/>}/>
               </Switch>
           </div>
       </HashRouter>
    )
}

class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wassups: [],
            id: 4
        }
    }
    componentDidMount() {
        fetch('http://0.tcp.ngrok.io:11140/wassups.json')
            .then(response => {
                return response.json();
            })
            .then(wassups => {
                this.setState({ wassups: wassups })
             });
    }
    render() {
        let addWassup = (props) => {
            this.setState({
                id: this.state.id += 1
            })
            this.setState({ 
                wassups: [
                    {
                        user: props.user,
                        id: this.state.id,
                        content: props.content
                    }
                ].concat(this.state.wassups)
             })
        }
        return <Router addWassup={addWassup} wassups={this.state.wassups}/>
    }
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
