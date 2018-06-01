import React, { Component, createContext } from 'react'

const ThemeContext = createContext()

export class Provider extends Component {
  constructor() {
    super()
    this.state = {
      themeName: 'default'
    }
  }

  changeTheme = e => this.setState({ themeName: e.target.value })

  render() {
    console.log(this.state.themeName)
    return (
      <ThemeContext.Provider value={{
        theme: this.state.themeName,
        actions: {
          changeTheme: this.changeTheme
        }
      }}>
        { this.props.children }
      </ThemeContext.Provider>
    )
  }
}

export const Consumer = ThemeContext.Consumer
