import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router,  Route,  Link, Switch} from 'react-router-dom';

import BooksComponent  from './components/books/books.component';
import BookComponent  from './components/book/book.component';
import MainComponent  from './components/main/main.component';

class App extends Component {
  render() {
    return (
      <div>
        <h3>Hello from App.js</h3>
        <ul>
            <li><Link to="/">Main Page</Link></li>
            <li><Link to="/books"> Books </Link></li>
            <li><Link  to={`/book/${21}`}> Single Book </Link></li>
          </ul>
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
