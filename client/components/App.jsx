import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Landing from './Landing'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Header />
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;

