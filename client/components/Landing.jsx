import React from 'react';

const api = require('../api')

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animals: []
    }
    this.getAnimalsByParam = this.getAnimalsByParam.bind(this)
  }

  getAnimalsByParam(e, data) {
    this.setState({
      animals: data
    })
  }

  componentDidMount() {
    api.getAnimalByParam('panda', this.getAnimalsByParam)
  }

  render() {
    console.log(this.state.animals);

    return (
      <div>

        <h2>Pick an Animal: </h2>

        <table>
          <tbody>
            <tr>
              {this.state.animals.map(animal => {
                return <td>{animal.type}</td>
                // return <td><img src={this.state.animals.imgSrc}></img></td>
              })}
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