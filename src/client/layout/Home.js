import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'

class Home extends Component {
  constructor(){
    super()
    this.state = {
      name: 'Red',
      favourite: {
        book: "hunger games",
        author: "Suzanne Collins"
      },
      // food: "foo",
      place: "bar"
    }
  }

  changeName(name) {
    this.setState({ name: name })
  }

  changeInput(event) {
    this.setState({ name: event.target.value })
  }

  render() {
    const { name, favourite, ...rest } = this.state
    // const name = this.state.name
    // const favourite = this.state.favourite

    console.log(rest)
    return (
      <div id="main" className="section">
        I am Home Component
        <hr />
        my food = { this.props.food }
        <hr />
        my name is { name } <br />
        my favourite author { favourite.author } <br />
        my favourite book { favourite.book } <br />
        {/* <Children /> */}
        <button onClick={() => this.changeName('NewName')}>Change Name</button>
        <input type="text" onChange={(e) => this.changeInput(e)} />
        <hr />
      </div>
    )
  }
}

Home.defaultProps = {
  food: "chicken"
}

Home.propTypes = {
  food: PropTypes.string.isRequired
}
export default Home
