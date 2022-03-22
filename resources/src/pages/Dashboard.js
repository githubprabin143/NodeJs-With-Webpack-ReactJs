import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Dashboard extends Component {
    render() {
        return (
            <div>
                Dashboard ok ok ok ok
            </div>
        );
    }
}


if (document.getElementById('dashboard')) {
    ReactDOM.render(<Dashboard />, document.getElementById('dashboard'));
}