import React from 'react';
import Homepage from './Homepage';

// const wassups = [ 
//     {
//         "userName": 'Michael',
//         "id": 1,
//         "body": "If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice.",
//     },
//     {
//         "userName": 'Jim',
//         "id": 2,
//         "body": "Beets, Bears, Battlestar Galactica."
//     },
//     {
//         "userName": 'Kelly',
//         "id": 3,
//         "body": "I have alot of questions. Number one, how dare you?"
//     },
//     {
//         "userName": 'Andy',
//         "id": 4,
//         "body": "Sorry I annoyed you with my friendship."
//     },
//     {
//         "userName": 'Pam',
//         "id": 5,
//         "body": "I feel God in this Chili’s tonight."
//     },
//     {
//         "userName": 'Dwight',
//         "id": 6,
//         "body": "Whenever I'm about to do something, I think, 'Would an idiot do that?' And if they would, I do not do that thing."
//     },
//     {
//         "userName": "Michael",
//         "id": 8,
//         "body": "Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me."
//     }
// ]
class HomepageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wassups: [],
            id: 4
        }
    }
    componentDidMount() {
        fetch('http://0.tcp.ngrok.io:10766/wassups.json')
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
        return <Homepage addWassup={addWassup} wassups={this.state.wassups}/>;
    }
 }

 export default HomepageContainer;