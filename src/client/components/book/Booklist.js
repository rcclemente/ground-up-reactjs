import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import bookData from '../../../../data/books.json'
import authors from '../../../../data/authors.json'

import BookItem from './BookItem'
import axios from 'axios'

class BookList extends Component {

  constructor() {
    super()
    this.state = {
      hasDataLoaded: false,
      books: [] ,
      error: ''
    }
  }

  getBook = () => {
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
    console.log(authors)
    let author = authors.authors.find(author => author.id === parseInt(id))
    return author.name
  }

  getAuthorName = id => {
    const { authors } = this.state
    let author = authors.find(author => author.id === parseInt(id))
    return author.name
  }

  getData() {
    const getBooks = () => axios.get( '../../../../data/books.json')
    const getAuthors = () => axios.get( '../../../../data/authors.json')

    axios
      .all([getBooks(), getAuthors()])
      .then(axios.spread((books, authors) => {
        // console.log(books)
        // console.log(authors)
        this.setState({
          hasDataLoaded: true,
          books: books.data.books,
          authors: authors.data.authors
        })
      }))
      .catch(error => {
        if (error) {
          this.setState({
            hasDataLoaded: false,
            error: error
          })
        }
      })
  }

  componentDidMount() {
    setTimeout(() => {
      // this.getBooks()
      this.getData()
    }, 1000)
  }

  render() {
    const { books, hasDataLoaded, error } = this.state

    if (!hasDataLoaded) {
      return "Loading books..."
    }

    if (error) {
      return "Error loading"
    }

    return (
      <div>
        <h1 className="title">Top Books</h1>
        <ul className="book-list columns is-multiline">
          {
            books.map(book => {
              return (
                <BookItem
                  key={book.id}
                  book={book}
                  authorName={this.getAuthorName(book.authorId)} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default BookList
