import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

const api = require('../api')

import Header from './Header'
import Footer from './Footer'
import Landing from './Landing'
import Species from './Species'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: [],
      selectedAnimal: null
    }
    this.getAnimalsByParam = this.getAnimalsByParam.bind(this)
    this.loadAnimal = this.loadAnimal.bind(this)
  }

  componentWillMount() {
    this.loadAnimal(this.state.selectedAnimal)
  }

  loadAnimal(animal) {
    api.getAnimalByParam(animal, this.getAnimalsByParam)
  }


  getAnimalsByParam(e, data) {
    this.setState({
      animal: data
    })
  }


  render() {

    return (
      <Router>
        <div>
          <Header />
          <div>
            {/* <Route path="/" component={Landing} /> */}
            {/* <Route path="/species" component={Species} /> */}
            <Route path="/" render={props => {
              return <Landing {...props} loadAnimal={this.loadAnimal} />
            }} />

            {this.state.animal.length > 0 && <Species animals={this.state.animal} />}
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

