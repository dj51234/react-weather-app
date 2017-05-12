import React from 'react';

class WeatherMessage extends React.Component {
  render() {
    const { city, temp} = this.props;
    return (
      <h4 className="text-center">It is {this.props.temp} degrees in {this.props.city}!</h4>
    )
  }
}

export default WeatherMessage;
