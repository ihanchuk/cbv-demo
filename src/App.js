import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css';

import { Route,  Link, Switch} from 'react-router-dom';

import BooksComponent  from './components/books/books.component';
import BookComponent  from './components/book/book.component';
import MainComponent  from './components/main/main.component';
import GenreComponent from './components/genre/genre.component';
import AuthorComponent from './components/author/author.component';
 
class App extends Component {
  render() {
    return (
     <div>
            <nav className="navbar-inverse  daren">
              <div className="container">
                <ul className=" nav nav-pills">
                    <li role="presentation"><Link to="/">Main Page</Link></li>
                    <li role="presentation"><Link to="/books"> Books </Link></li>
                </ul>
              </div>
            </nav>
            <div className="jumbotron bookTorn">
                <div className="container">
                  <h1>Hello, world!</h1>
                  <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                  <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                </div>
              </div>
               <Switch>
                  <Route exact  path="/" component={MainComponent}/>
                  <Route path="/books" component={BooksComponent}/>
                  <Route path="/book/:id" component={BookComponent}/>
              </Switch>
     </div>
    );
  }
}

export default App;

