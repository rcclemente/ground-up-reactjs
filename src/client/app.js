import React, { Component } from 'react'

import Child from './components/child'

import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'
import Sidebar from './layout/Sidebar'
import ErrorBoundary from './layout/ErrorBoundary'


const book = {
  title: "hunger games",
  author: "Suzanne Collins"
}

class App extends Component {
    constructor(){
      super()
      this.state = {
        color: 'red',
        book: {
          title: "hunger games",
          author: "Suzanne Collins"
        },
        // food: 1
      }
    }

    render() {
        console.log(this.state)
        return (
            <div>
              <Header />
              <ErrorBoundary>
                <Main food={this.state.food}/>
              </ErrorBoundary>
              <Footer />
            </div>
        )
    }
}

export default App
