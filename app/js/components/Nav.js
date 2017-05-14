import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
  constructor() {
    super();
    this.onSearch = this.onSearch.bind(this);
  }
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
      </div>
    )
  } // End Render
  onSearch(e) {
    e.preventDefault();
    const { navInput } = this.refs;
    const encodedInput = encodeURI(navInput.value);
    navInput.value = '';
    window.location.hash = `#/?location=${encodedInput}`;;
  }
}

export default Nav;
