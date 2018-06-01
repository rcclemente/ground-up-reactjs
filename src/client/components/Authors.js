import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

class Authors extends Component {

  constructor() {
    super()
    this.state = {
      hasDataLoaded: false,
      authors: [] ,
      error: ''
    }
  }

  getData() {
    const getBooks = () => axios.get( '../../../../data/books.json')
    const getAuthors = () => axios.get( '../../../../data/authors.json')

    axios
      .all([getAuthors()])
      .then(axios.spread((authors) => {
        // console.log(authors)
        this.setState({
          hasDataLoaded: true,
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
      this.getData()
    }, 1000)
  }

  render() {
    const { authors, hasDataLoaded, error } = this.state

    if (!hasDataLoaded) {
      return "Loading books..."
    }

    if (error) {
      return "Error loading authors"
    }

    return (
      <div>
        <h1 className="title">Top Authors</h1>
        <ul className="book-list columns is-multiline">
          {
            authors.map(author => {
              return (
                <li key={author.id} className="column is-one-quarter book-item">
                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <Link to={`/author/${author.id}`} >{ author.name }</Link>
                      </div>
                      <span className="is-size-7">
                        by: { author.name }
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

export default Authors
