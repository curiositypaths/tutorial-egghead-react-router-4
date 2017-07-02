import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

const isActiveFn = (match, location) => {
  console.log(match,location)
  //if a match is returned activeClassName will trigger
  return match
}

const App = () => (
  <Router>
    <div>
      <Route path='/:page?-:subpage?' render={ ({match}) => (
        <h1>
          Page: {match.params.page || 'Home'}<br/>
          Subpage: {match.params.subpage}
        </h1>
      ) } />
    </div>
  </Router>
)

export default App
