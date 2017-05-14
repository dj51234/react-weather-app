import React from 'react';

class WeatherForm extends React.Component {
  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <div className="row collapse">
          <div className="columns medium-9">
            <input ref='city' type="text" placeholder="Enter City Name" className="input-group-field"/>
          </div>
          <div className="columns medium-3">
            <div className="input-group-button">
              <button className="button hollow expanded">Get Weather</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
  onFormSubmit(e) {
    e.preventDefault()
    const { city } = this.refs;

    // Capitalize string from input form
    function capitalize(str) {
      return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    if(city.value.length > 0) {
      this.props.onSearch(capitalize(city.value));
      city.value = '';
    }
  }
}

export default WeatherForm;
