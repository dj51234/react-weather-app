import React from 'react';
import Nav from './Nav';
import Weather from './Weather';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>

    )
  }
}

export default Main;
