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
     <div className="container">
      <div className="header clearfix row">
        <nav className="navbar navbar-inverse">
          <ul className=" nav nav-pills">
            <li role="presentation"><Link to="/">Main Page</Link></li>
            <li role="presentation"><Link to="/books"> Books </Link></li>
          </ul>
        </nav>
      </div>

      <div className="row">
        <div className="col-lg-12">
              <Switch>
                  <Route exact  path="/" component={MainComponent}/>
                  <Route path="/books" component={BooksComponent}/>
                  <Route path="/book/:id" component={BookComponent}/>
              </Switch>
          </div>
      <footer className="footer">
        <p>&copy; 2016 Company, Inc.</p>
      </footer>

    </div> 
    </div>
    );
  }
}

export default App;

