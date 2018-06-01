import React, { Component } from 'react'

const ThemeChanger = props => {
  return (
    <div className="is-pulled-right">
      Change Theme:
      <select onChange={props.theme.actions.changeTheme}>
        <option value="default">Default</option>
        <option value="green">green</option>
        <option value="red">red</option>
        <option value="yellow">yellow</option>
      </select>
    </div>
  )
}

export default ThemeChanger
