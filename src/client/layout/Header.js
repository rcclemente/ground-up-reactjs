import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import WelcomeLogin from './WelcomeLogin'
import ThemeChanger from '../components/ThemeChanger'

import { connect } from 'react-redux'

import { Consumer as ThemeContextConsumer } from '../utils/providers/ThemeContext'

class Header extends Component {
  render() {
    const { theme } = this.props
    const headerColor = () => {
      switch(theme) {
        case 'default' : return 'has-background-primary'
        case 'green' : return 'has-background-success'
        case 'red' : return 'has-background-danger'
        case 'yellow' : return 'has-background-warning'
      }
    }

    return (
      <div id="Header" className={`section ${headerColor()}`}>
        <div className="columns">
          <div className="columns">
            <h1 className="title has-text-white">The Book List</h1>
            <p className="subtitle">My Favorite Books</p>
          </div>
          <div className="columns">
          </div>
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
        {/* <ThemeChanger theme={value}/> */}
        <ThemeChanger />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  theme: state.theme
})

export default connect(mapStateToProps)(Header)
