import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

    // Initialize State
    constructor(props) {
        super(props);
        // THIS IS THE ONLY TIME we do direct assignemnt 
        // to this.state
        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {

                // we called setState!!!!
                this.setState({ lat: position.coords.latitude });

                // we did not!!
                // this.state.lat = position.coords.latitude
            },
            (err) => console.log(err)
        );
    }


    // React says we have to define render!!
    render() {
        return <div>Latitude: {this.state.lat}</div>
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));