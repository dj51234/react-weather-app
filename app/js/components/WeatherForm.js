import React from 'react';

class WeatherForm extends React.Component {
  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input ref='city' type="text" placeholder="Enter City Name"/>
        <button>Get Weather</button>
      </form>
    )
  }
  onFormSubmit(e) {
    e.preventDefault()
    const { city } = this.refs;

    // Capitalize string from input form
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    if(city.value.length > 0) {
      this.props.onSearch(capitalize(city.value));
      city.value = '';
    }
  }
}

export default WeatherForm;
