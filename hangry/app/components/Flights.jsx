import React from 'react';
import Flight from './Flight';

export default class Flights extends React.Component {
  // props are data passed to a component from it's parent
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      url: '/data/flight_data.json'
    };
  }

  componentDidMount() {
    var getFlights = function(url) {
      return fetch(url).then(response => response.json())
    };

    // ES6 Arrow function
    // Maintain the scope, the 'this' inside the function points to the instance of the Class
    getFlights(this.state.url).then((data) => {
      this.setState({data});
    });

  }

  render() {
    console.log(this.state.data);
    var flights = this.state.data.map((flight, i) =>
      <div  className="table__row" key={i}><Flight raw={flight} /></div>
    );
    return (
      <div className="table table--six">
        <div className="table__header">
          <div className="table__column">Airline</div>
          <div className="table__column">Flight #</div>
          <div className="table__column">Destination</div>
          <div className="table__column">STA</div>
          <div className="table__column">Gate #</div>
          <div className="table__column">Status</div>
        </div>
        {flights}
      </div>
    )
  }
}
