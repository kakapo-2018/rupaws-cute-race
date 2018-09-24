import React from 'react';

const api = require('../api')

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panda: [],
      allAnimals: []
    }
    this.getAnimalsByParam = this.getAnimalsByParam.bind(this)
    this.getAllAnimals = this.getAllAnimals.bind(this)
  }

  getAnimalsByParam(e, data) {
    this.setState({
      panda: data
    })
  }

  getAllAnimals(e, data) {
    this.setState({
      allAnimals: data
    })
  }


  componentDidMount() {
    console.log(this.props);

    api.getAnimalByParam('dog', this.getAnimalsByParam)
    api.getAllAnimals(this.getAllAnimals)
  }

  render() {
    console.log(this.state.panda);

    return (
      <div>

        <h2>Pick an Animal: </h2>

        <table>
          <tbody>
            <tr>
            </tr>
            <tr>
              <td>Hello2</td>
              <td>Hi2</td>
              <td>Goodbye2</td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default Landing;