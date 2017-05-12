import React from 'react';
import { Link } from 'react-router';

const Examples = function() {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Check out a few examples:</p>
      <ol>
        <li><Link to="/?city=charlotte">Charlotte, NC</Link></li>
        <li><Link to="/?city=newyork">New York, NY</Link></li>
      </ol>
    </div>
  )
}

export default Examples;
