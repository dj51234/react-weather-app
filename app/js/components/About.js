import React from 'react';

const About = function() {
  return (
    <div className="row">
      <div className="columns medium-8 small-centered">
        <h1 className="text-center">About</h1>
        <p>This is a simple React weather app that leveragesthe OpenWeatherMap API along with a React app structure.  Here are a few links for resources:</p>
        <ol>
          <li><a href="https://facebook.github.io/react">React</a> - Javascript framework</li>
          <li><a href="http://openweathermap.org">OpenWeatherMap API</a> - Used for API to fetch weather</li>
        </ol>
      </div>
    </div>
  )
}

export default About;
