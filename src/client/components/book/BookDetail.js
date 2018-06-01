import React, { Component } from 'react'

import { Link } from 'react-router-dom'
// import bookData from '../../../../data/books.json'
// import authors from '../../../../data/authors.json'
import axios from 'axios'

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

  getData() {

    const getBooks = () => axios.get( '../../../../data/books.json')
    const getAuthors = () => axios.get( '../../../../data/authors.json')

    const { id } = this.props.match.params

    console.log(id)

    axios
      .all([getBooks(), getAuthors()])
      .then(axios.spread((books, authors) => {
        console.log(books)
        console.log(authors)
        const book = books.data.books.find(book => book.id === parseInt(id))
        const author = authors.data.authors.find(author => author.id == parseInt(book.authorId))
        this.setState({
          hasDataLoaded: true,
          book: book,
          author: author
        })
      }))
      .catch(error => {
        if (error) {
          this.setState({
            hasDataLoaded: false,
            error: error
          })
        }
        console.log('errorrr')
      })
  }

  componentDidMount() {
    setTimeout(() => {
      // this.getBookDetail()
      this.getData()
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
        <button onClick={() => this.props.history.goBack()}>Back</button>

        <p className="is-text-6">Viewing current book:</p>
        <h1 className="title">Title: { book.title }</h1>
        {/* <p className="subtitle">Author: { author }</p> */}
        <p className="subtitle">Author: <Link to={`/author/${book.authorId}`}>{ author.name }</Link></p>
        <hr />
        <p>{ book.summary }</p>
      </div>
    )
  }
}

export default BookDetail
