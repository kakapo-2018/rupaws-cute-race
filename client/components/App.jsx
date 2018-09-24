import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Landing from './Landing'
import Species from './Species'
import Homepage from './Homepage'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "home",
      activeSpecies: null
    }
    this.setActivePage = this.setActivePage.bind(this)
  }

  setActivePage(page, species) {
    this.setState({
      activePage: page,
      activeSpecies: species
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Header setActivePage={this.setActivePage}/>
          {this.state.activePage == "home" ? <Homepage setActivePage={this.setActivePage}/> : <Species species={this.state.activeSpecies}/>}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

