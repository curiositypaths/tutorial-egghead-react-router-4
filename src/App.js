import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import './App.css'

const isActiveFn = (match, location) => {
  console.log(match,location)
  //if a match is returned activeClassName will trigger
  return match
}

const Links = () => (
  <nav>
    <NavLink exact activeClassName='active-link' to='/'>Home</NavLink>
    <NavLink activeClassName='active-link' to={ {pathname:'/about'} }>About</NavLink>
    <NavLink isActive={ isActiveFn } activeClassName='active-link' replace to='/Contact'>Contact</NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links/>
      <Route exact path='/' render={ ()=> <h1>Home</h1> } />
      <Route exact path='/about' render={ ()=> <h1>About</h1> } />
      <Route exact path='/contact' render={ ()=> <h1>Contact</h1> } />
    </div>
  </Router>
)

export default App
