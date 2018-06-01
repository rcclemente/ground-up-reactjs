import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div id="Header" className="section has-background-primary">
        <div>
          <h1 className="title has-text-white">The Book List</h1>
          <p className="subtitle">My Favorite Books</p>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/home" activeClassName="active" activeStyle={{ color: 'red' }} exact>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active" activeStyle={{ color: 'red' }} exact>About</NavLink>
              </li>
              <li>
                <NavLink to="/books" activeClassName="active" activeStyle={{ color: 'red' }} exact>Books</NavLink>
              </li>
              <li>
                <NavLink to="/authors" activeClassName="active" activeStyle={{ color: 'red' }} exact>Authors</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
