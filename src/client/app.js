import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import Child from './components/child'

import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'
import Sidebar from './layout/Sidebar'
import ErrorBoundary from './layout/ErrorBoundary'
import Home from './layout/Home'


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
          <HashRouter>
            <div className="container">
              <Header />
              <ErrorBoundary>
                {/* <Main food={this.state.food}/> */}
                <Main food={this.state.food}/>
              </ErrorBoundary>
              <Footer />
            </div>
          </HashRouter>
        )
    }
}

export default App
