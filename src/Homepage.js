import SmartForm from './WassupFormContainer';
import WassupList from './WassupList';
import React from 'react';
import { connect } from 'react-redux';

class Homepage extends React.Component {
    componentDidMount() {
        fetch('http://0.tcp.ngrok.io:17762//wassups.json')
            .then(response => {
                return response.json();
            })
            .then(wassups => {
                this.props.dispatch({ type: 'LOAD_WASSUPS', wassups: wassups })
             });
    }
    render() {
        return (
            <div className="homepage">
                <h1>Wassup</h1>
                <SmartForm/>
                <WassupList wassups={this.props.wassups}/>
            </div>)
    }
}

let SmartHomepage = connect(state => ({ wassups: state.wassups }))(Homepage);
export default SmartHomepage;