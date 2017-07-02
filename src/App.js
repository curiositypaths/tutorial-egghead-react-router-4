import React from 'react'
import {BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import './App.css'

const Links = () =>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/old">Old</Link>
    <Link to="/new">New</Link>
  </nav>

    const App = (props) => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={ () => <h1>Home</h1> } />
      <Route exact path="/new" render={ () => <h1>New</h1> } />
      <Route path="/old" render={ () => <Redirect to="/new" /> } />
    </div>
  </Router>
)

export default App
