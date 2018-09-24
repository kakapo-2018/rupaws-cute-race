import React from 'react';

const api = require('../api')

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    let selectedAnimal = e.target
    console.log('clicked', selectedAnimal)

  }

  render() {
    console.log(this.state.animals);

    return (
      <div>

        <h2>Pick an Animal: </h2>

        <table>
          <tbody>
            <tr>
              <td><a href="#" onClick={() => this.props.loadAnimal('sloth')}>Sloth</a></td>
              <td><a href="#" onClick={() => this.props.loadAnimal('dog')}>Dog</a></td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default Landing;