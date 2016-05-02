import React from 'react';
import Time from 'react-time';

export default class Flight extends React.Component {
  render() {
    return(
      <div>
        <div className="table__column table__column--bold">{this.props.raw.CARRIER}</div>
        <div className="table__column">{this.props.raw.FLIGHT_NUMBER}</div>
        <div className="table__column">{this.props.raw.CITY_NAME}</div>
        <div className="table__column">{this.props.raw.LATEST_TIME}</div>
        <div className="table__column">{this.props.raw.GATE}</div>
        <div className="table__column table__column--bold">{this.props.raw.FLIGHT_STATUS}</div>
      </div>
    );
  }
}

