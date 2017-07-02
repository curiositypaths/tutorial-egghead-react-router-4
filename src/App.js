import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const Home = ({match}) => {
    console.log(match)
    return <h1>Home</h1>
}
const AboutComp = () => <h2>This is the About component</h2>
const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      {/*<Route path='/about' component={AboutComp} />*/}
      {/*<Route path='/about' render={ () => (<h2>New About</h2>) }/>*/}
      <Route path='/about' children={({match}) => match && <h2>I will always render</h2>} />
    </div>
  </Router>
)

export default App
