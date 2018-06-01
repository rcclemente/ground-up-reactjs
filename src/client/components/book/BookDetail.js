import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import bookData from '../../../../data/books.json'
import authors from '../../../../data/authors.json'

class BookDetail extends Component {

  constructor() {
    super()
    this.state = {
      hasDataLoaded: false,
      book: [] ,
      author: '',
      error: ''
    }
  }

  getAuthorName = id => {
    fetch('../../../../data/authors.json')
      .then(response => response.json())
      .then(json => {
        // console.log(json)
        let author = json.authors.find(author => author.id === parseInt(id))
        console.log(author)
        this.setState({
          author: author.name
        })
        return author.name
      })
      .catch(error => {
        this.setState({
          hasDataLoaded: true,
          error: error.message
        })
      })
  }

  getBookDetail = () => {
    const { id } = this.props.match.params

    fetch('../../../../data/books.json')
      .then(response => response.json())
      .then(json => {
        // console.log(json)
        let currentBook = json.books.find(book => book.id === parseInt(id))
        this.setState({
          hasDataLoaded: true,
          book: currentBook,
        }, () => {
          this.getAuthorName(currentBook.authorId)
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
      this.getBookDetail()
    }, 1000)
  }

  render() {
    const { book, hasDataLoaded, error, author } = this.state

    if (!hasDataLoaded) {
      return "Loading book details..."
    }

    if (error.length !== 0) {
      return "Error fetching book"
    }

    return (
      <div>
        <p className="is-text-6">Viewing current book:</p>
        <h1 className="title">Title: { book.title }</h1>
        <p className="subtitle">Author: { author }</p>
        <hr />
        <p>{ book.summary }</p>
      </div>
    )
  }
}

export default BookDetail
