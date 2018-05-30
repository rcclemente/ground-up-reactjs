import React, { Component } from 'react'

import Child from './components/child'

import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'
import Sidebar from './layout/Sidebar'


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
        }
      }
    }

    render() {

        console.log(this.state)
        return (
            <div>
              <Header />
              <Main name="Ryan" />
              <Footer />
            </div>
        )
    }
}

export default App
