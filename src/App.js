import React from 'react'
import {BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  Prompt
} from 'react-router-dom'
import './App.css'

const Home = () => (<h1>Home</h1>)

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {dirty:false}
    this.setDirty = this.setDirty.bind(this)
  }

  setDirty() {
    this.setState({dirty:true})
  }

  render() {
    return (<div>
      <h1>Form</h1>
      <input type="text" onInput={this.setDirty} />
      <Prompt message="Data will be loss" when={this.state.dirty} />
    </div>)
  }
}

const App = (props) => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
    </div>
  </Router>
)

export default App
