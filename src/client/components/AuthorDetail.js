import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class AuthorDetail extends Component {

  constructor() {
    super()
    this.state = {
      hasDataLoaded: false,
      author: '',
      error: '',
      books: []
    }
  }

  getData() {
    const getAuthors = () => axios.get( '../../../../data/authors.json')
    const getBooks = () => axios.get( '../../../../data/books.json')

    const { id } = this.props.match.params

    axios
      .all([getBooks(), getAuthors()])
      .then(axios.spread((books, authors) => {
        const author = authors.data.authors.find(author => author.id == parseInt(id))
        const author_books = books.data.books.filter(book =>  parseInt(book.authorId) === author.id)
        console.log(authors)
        console.log(author_books)
        this.setState({
          hasDataLoaded: true,
          author: author,
          books: author_books
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
      this.getData()
    }, 1000)
  }

  render() {
    const { author, books, hasDataLoaded, error } = this.state
    return (
      <div>
        <h1 className="title">Author Name: {author.name}</h1>
        <hr />
        List or written books:
        <ul>
          {
            books.map(book => (
              <li key={book.id}>
                <Link to={`/book/${book.id}`}>{ book.title }</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default AuthorDetail
