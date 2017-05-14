import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Weather App</li>
            <li><IndexLink to='/' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Weather</IndexLink></li>
            <li><Link to='/about' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to='/examples' activeClassName='active' activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Enter city name"/></li>
              <li><button type="button" className="button">Search</button></li>
            </ul>
          </form>
        </div>
      </div>
    )
  } // End Render
  onSearch(e) {
    e.preventDefault();
    console.log('Success');
  }
}

export default Nav;
