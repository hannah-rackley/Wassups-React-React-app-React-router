import WassupForm from'./WassupForm';
import React from 'react';

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
            this.props.addWassup({ content: this.state.newWassup, user: this.state.user });
            this.setState({ newWassup: "" });
        }
        let handleNewWassup = (event) => this.setState({ newWassup: event.target.value });
        let handleNewUser = (event) => this.setState({ user: event.target.value })
        return <WassupForm handleSubmit={handleSubmit} handleNewUser={handleNewUser} handleNewWassup={handleNewWassup} user={this.state.user} newWassup={this.state.newWassup}/>
    }
}

export default WassupFormContainer;