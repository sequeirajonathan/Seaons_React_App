import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    // Initialize State
    constructor(props) {
        super(props);
        // THIS IS THE ONLY TIME we do direct assignemnt 
        // to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setState!!!!
                this.setState({ lat: position.coords.latitude });

                // we did not!!
                // this.state.lat = position.coords.latitude
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        );
    }


    // React says we have to define render!!
    render() {
        if(!this.state.lat && this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(this.state.lat && !this.state.errorMessage){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading...</div>
    };
}

ReactDOM.render(<App />, document.querySelector('#root'));