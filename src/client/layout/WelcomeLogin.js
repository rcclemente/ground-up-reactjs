import React, { Component } from 'react'

import { Consumer as UserContextConsumer } from '../utils/providers/UserContext'

class WelcomeLogin extends Component {
  render() {
    return (
      <UserContextConsumer>
        { value => {
          console.log(value)
          const { user, actions } = value
          return (
            <div>
              <p className="is-pulled-right has-text-right">
                Welcome, { user ? user : 'Guest' } <br />
                {
                  user
                    ? <button className="button is-small" onClick={actions.logout}>Logout</button>
                    : <button className="button is-small" onClick={actions.login}>Login</button>
                }
              </p>
            </div>
          )
        }}
      </UserContextConsumer>
    )
  }
}

export default WelcomeLogin
