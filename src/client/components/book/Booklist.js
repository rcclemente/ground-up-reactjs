import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import bookData from '../../../../data/books.json'
import authors from '../../../../data/authors.json'

class BookList extends Component {

  constructor() {
    super()
    this.state = {
      hasDataLoaded: false,
      books: [] ,
      error: ''
    }
  }

  getBooks = () => {
    fetch('../../../../data/books.json')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.setState({
          hasDataLoaded: true,
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

  getAuthor = id => {
    // console.log(authors)
    let author = authors.authors.find(author => author.id === parseInt(id))
    return author.name
  }

  componentDidMount() {
    setTimeout(() => {
      this.getBooks()
    }, 1000)
  }

  render() {
    const { books, hasDataLoaded } = this.state

    if (!hasDataLoaded) {
      return "Loading books..."
    }

    return (
      <div>
        <h1 className="title">Top Books</h1>
        <ul className="book-list columns is-multiline">
          {/* <li>Book Title</li> */}
          {
            books.books.map(book => {
              return (
                <li key={book.id} className="column is-one-quarter book-item">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <Link to={`/book/${book.id}`} >{ book.title }</Link>
                      </div>
                      <span className="is-size-7">
                        {/* by: { book.authorId } */}
                        by: { this.getAuthor(book.authorId) }
                      </span>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default BookList
