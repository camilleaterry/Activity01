// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

import React from 'react'
import ReactDOM from 'react-dom'
import { FaReact, FaNode, FaDatabase, FaShippingFast } from 'react-icons/fa'
import {books} from './books'
import { main } from "@popperjs/core";

class Main extends React.Component {
  render()  {
    return <BookList books= {books} />
  }
}

class BookList extends React.Component {
  render(){
    return (
      <div className="container">
        <header>
          <h1>Top 10 Books</h1>
        </header>
        <nav>
          <ul>
            <li>Home</li>
            <li>List</li>
            <li>About</li>
          </ul>
        </nav>
        <main>
          {this.props.books.map(b => {
            return <Book key={b.id} book={b}/>
          })}
        </main>
      </div>
    )
  }
}

function Book(props){
  const b = props.book
  return (
    <div className="card"> 
      <h2>{b.title}</h2>
      <h3>{b.author}</h3>
      <p>{b.description}</p>
      <ul className="extra">
        <li><strong>{b.genre}</strong> </li>
        <li><strong>{b.published}</strong> </li>
        <li><button className="primary">Select</button></li>
      </ul>
    </div>

  )
}

ReactDOM.render(<Main/>, document.getElementById('main'))
