import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import bookData from '../../../../data/books.json'
import authors from '../../../../data/authors.json'

class BookList extends Component {

  constructor() {
    super()
    this.state = {
      hasDataLoaded: false,
      books: {}
    }
  }

  getBooks = () => {
    fetch(bookData)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          books: json
        })
      })
      .catch(error => {
        this.setState({
          hasDataLoaded: true,
          error: error.message
        })
      })
  }

  componentDidMount() {
    setTimeout(() => {
      this.getBooks()
    }, 2000)
  }

  render() {
    return (
      <div>
        <h1 className="title">Top Books</h1>
        <ul>
          <li>Book Title</li>
        </ul>
      </div>
    )
  }
}

export default BookList
