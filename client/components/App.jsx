import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Landing from './Landing'
import Species from './Species'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div>
            {/* <Route path="/species" component={Species} /> */}
            {/* <Route path="/" component={Landing} test="test" /> */}
            <Route path="/species" render={props => {
              return <Species {...props} test="test" />
            }
            } />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

