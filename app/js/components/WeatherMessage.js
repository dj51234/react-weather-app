import React from 'react';

class WeatherMessage extends React.Component {
  render() {
    const { city, temp} = this.props;
    return (
      <h3>It is {this.props.temp} degrees in {this.props.city}!</h3>
    )
  }
}

export default WeatherMessage;
