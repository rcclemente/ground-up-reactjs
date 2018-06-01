import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import Child from './components/child'

import Footer from './layout/Footer'
import Header from './layout/Header'
import Main from './layout/Main'
import Sidebar from './layout/Sidebar'
import ErrorBoundary from './layout/ErrorBoundary'
import Home from './layout/Home'

import { Provider as UserContextProvider } from './utils/providers/UserContext'
import { Provider as ThemeContextProvider } from './utils/providers/ThemeContext'

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
      }
    }

    render() {
        console.log(this.state)
        return (
          <HashRouter>
            <ThemeContextProvider>
              <UserContextProvider>
                <div className="container">
                  <Header />
                  <ErrorBoundary>
                    <Main />
                  </ErrorBoundary>
                  <Footer />
                </div>
              </UserContextProvider>
            </ThemeContextProvider>
          </HashRouter>
        )
    }
}

export default App
