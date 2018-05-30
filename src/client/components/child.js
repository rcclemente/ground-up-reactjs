import React from 'react'

const Child = props => {
    console.log(props)
    return (
        <div>
          I am a { props.name } and my favorite color is { props.color } <br />
          <br />
          My fave book is { props.book.title } by { props.book.author }
        </div>
    )
}

export default Child
