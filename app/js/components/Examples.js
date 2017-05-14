import React from 'react';
import { Link } from 'react-router';

const Examples = function() {
  return (
    <div className="row">
      <div className="columns medium-6 small-centered">
        <h3 className="text-center main-title">Examples</h3>
        <p>Check out a few examples:</p>
        <ol>
          <li><Link to="/?city=charlotte">Charlotte, NC</Link></li>
          <li><Link to="/?city=newyork">New York, NY</Link></li>
        </ol>
      </div>
    </div>
  )
}

export default Examples;
