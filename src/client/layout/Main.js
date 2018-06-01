import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Switch, Route, Redirect } from 'react-router-dom'

import Home from './Home'
import About from './About'
import NoMatch from './NoMatch'
import BookList from '../components/book/BookList'
import BookDetail from '../components/book/BookDetail'

class Main extends Component {
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

    return (
      <div id="main" className="section">
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route path="/" exact render={() => {
            return "I am a Main component!!!"
          }} />

          {/* <Route path="/home" exact render={() => <Home />} /> */}
          {/* <Route path="/about" exact render={() => <About />} /> */}

          <Route path="/home" exact component={Home }/>
          <Route path="/about/:id?" component={About}/>
          <Route path="/books" component={BookList}/>
          <Route path="/book/:id?" component={BookDetail}/>

          <Route render={() => <NoMatch />} />
          {/* <Route path="/books" exact render={() => <Books />} /> */}
        </Switch>
      </div>
    )
  }
}

Main.defaultProps = {
  food: "chicken"
}

Main.propTypes = {
  food: PropTypes.string.isRequired
}
export default Main
