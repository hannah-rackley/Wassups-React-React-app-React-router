import WassupForm from'./WassupForm';
import React from 'react';
import { connect } from 'react-redux';

class WassupFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newWassup: "",
            user: ""
        }
    }
    render() {
        let handleSubmit = (event) => {
            event.preventDefault();
            this.props.dispatch({ type: 'ADD_WASSUP', content: this.state.newWassup, user: this.state.user});
            this.setState({ newWassup: "" });
        }
        let handleNewWassup = (event) => this.setState({ newWassup: event.target.value });
        let handleNewUser = (event) => this.setState({ user: event.target.value })
        return <WassupForm handleSubmit={handleSubmit} handleNewUser={handleNewUser} handleNewWassup={handleNewWassup} user={this.state.user} newWassup={this.state.newWassup}/>
    }
}
let SmartForm = connect()(WassupFormContainer);

export default SmartForm;