import React, { Component, createContext } from 'react'

const UserContext = createContext()

export class Provider extends Component {
  constructor() {
    super()
    this.state = {
      loggedUsername: null
    }
  }

  login = name => this.setState({ loggedUsername: 'Ryan' })
  logout = () => this.setState({ loggedUsername: null })

  render() {
    return (
      <UserContext.Provider value={{
        user: this.state.loggedUsername,
        actions: {
          login: this.login,
          logout: this.logout
        }
      }}>
        { this.props.children }
      </UserContext.Provider>
    )
  }
}

export const Consumer = UserContext.Consumer
