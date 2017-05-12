import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openWeatherMap from '../../api/openWeatherMap';

class Weather extends React.Component {
  constructor() {
    super();
    this.onSearch = this.onSearch.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.state = {
      isLoading: false
    };
  } // End Constructor

  render() {
    const { isLoading, city, temp } = this.state;

    function renderMessage() {
        if(isLoading) {
          return <h3>Grabbing weather data...</h3>
        } else if (temp && city) {
          return <WeatherMessage city={city} temp={temp}/>;
        }
    }
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.onSearch}/>
        {renderMessage()}
      </div>
    )
  } //  End Render

  onSearch(city) {
    const that = this;
    this.setState({isLoading: true});

    this.getWeather(city).then((data) => {
      const temp = data.main.temp.toFixed(0);
      // Simulate a longer data fetch to show loading text
      setTimeout(function(){
        that.setState({city, temp, isLoading: false});
      },1000);
    }).catch((err) => {
      that.setState({city: null, temp: null, isLoading: false});
      alert('Enter a valid city!');
    })
  } // End onSearch

  getWeather(city) {
    const encodedLocation = encodeURIComponent(city);
    const appId = '&appid=a2ec99f4659ab632a4ede7a9ab576a43';
    const units = '&units=imperial';
    const url = 'http://api.openweathermap.org/data/2.5/weather?';
    const requestURL = `${url}${appId}${units}&q=${encodedLocation}`;
    const weatherData = fetch(requestURL).then((response) => response.json());

    return weatherData;
  }  // End getWeather
}

export default Weather;
