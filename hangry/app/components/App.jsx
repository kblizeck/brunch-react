import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'whatwg-fetch';

import Flights from './Flights';

// Import your main sections into here
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Flights />
      </div>
    );
  }
}
